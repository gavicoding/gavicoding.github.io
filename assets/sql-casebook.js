// SQL Casebook: real SQL Server fixes, rebuilt with generic names and fictional data.
// Every "after" snippet runs on SQL Server 2022 in the CI of tsql-retail-ops-analytics.
const SQL_REPO = "https://github.com/gavicoding/tsql-retail-ops-analytics/blob/main/";

const SQL_CASES = [
  {
    id: "catch-all",
    file: "procedures/usp_purchase_items_report.sql",
    en: {
      tag: "Catch-all report · Parameter sniffing",
      title: "Optional product filter on a 15-join purchase report",
      pain: "The purchase invoice report only filtered by period. Auditing one product meant exporting everything and filtering in a spreadsheet, and two old attempts at an optional filter were left commented out after numeric conversion errors on blank input.",
      fix: "Blank or invalid input becomes NULL before the query runs, the filter is optional, and OPTION (RECOMPILE) gives each run its own plan: index seek for one product, date range for the full extract.",
      result: "One report serves single-product audits and full-period extracts without spreadsheet work. Odd inputs like '$', '1e5' and '12,5' no longer break it.",
    },
    pt: {
      tag: "Relatório catch-all · Parameter sniffing",
      title: "Filtro opcional por produto em relatório de compras com 15 JOINs",
      pain: "O relatório de notas de entrada só filtrava por período. Auditar um produto exigia exportar tudo e filtrar em planilha, e duas tentativas antigas de filtro opcional estavam comentadas depois de erros de conversão quando o campo ficava vazio.",
      fix: "Entrada vazia ou inválida vira NULL antes da consulta, o filtro fica opcional e o OPTION (RECOMPILE) dá a cada execução o seu plano: busca pelo índice para um produto, faixa de datas para a extração completa.",
      result: "Um relatório atende a auditoria de um produto e a extração do período inteiro, sem planilha. Entradas estranhas como '$', '1e5' e '12,5' não quebram mais.",
    },
    before: `-- filter left commented out after conversion errors
-- DECLARE @product NUMERIC
-- SELECT @product = ISNULL(dbo.to_numeric_or_null(:product), 0)

WHERE pi.issued_at >= @date_from
  AND pi.issued_at <= @date_to
--AND (it.item_id = @product OR @product IS NULL)
ORDER BY pi.posted_at`,
    after: `-- blank or invalid text becomes NULL (TRY_CONVERT(INT, '') would be 0)
DECLARE @item_id INT =
    TRY_CONVERT(INT, NULLIF(LTRIM(RTRIM(@product_text)), N''));

WHERE pi.issued_at >= @date_from
  AND pi.issued_at <= @date_to
  AND (it.item_id = @item_id OR @item_id IS NULL)
ORDER BY pi.posted_at
OPTION (RECOMPILE);  -- right plan for one item OR the whole period`,
  },
  {
    id: "ingest",
    file: "procedures/usp_ingest_invoice_index_batch.sql",
    en: {
      tag: "Set-based ingest · Concurrency",
      title: "Idempotent batch ingest from an external API",
      pain: "A legacy sync inserted one invoice per round trip and stopped the whole run on the first duplicate, because the table has a unique registry number besides the invoice key.",
      fix: "One statement per page: duplicates inside the batch removed with ROW_NUMBER, NOT EXISTS on both keys under UPDLOCK + HOLDLOCK, and OUTPUT INTO a table variable to report exactly what was new.",
      result: "Pages of 100 invoices in one round trip, safe to rerun at any time. It now powers a 10-minute sync that takes about 4 seconds per cycle.",
    },
    pt: {
      tag: "Ingestão em lote · Concorrência",
      title: "Ingestão idempotente em lote vinda de uma API externa",
      pain: "A sincronização antiga gravava uma nota por ida ao banco e parava tudo na primeira duplicada, porque a tabela tem um número de registro único além da chave da nota.",
      fix: "Um comando por página: duplicadas do próprio lote removidas com ROW_NUMBER, NOT EXISTS nas duas chaves com UPDLOCK + HOLDLOCK e OUTPUT INTO numa variável de tabela para saber exatamente o que entrou.",
      result: "Páginas de 100 notas numa ida só, seguro para rodar de novo a qualquer hora. Hoje sustenta uma sincronização a cada 10 min que leva cerca de 4 s por ciclo.",
    },
    before: `-- one round trip per invoice; first duplicate aborts the run
FOR EACH invoice IN page:
    IF NOT EXISTS (SELECT 1 FROM dbo.invoice_platform_index
                   WHERE access_key = @key)
        INSERT INTO dbo.invoice_platform_index (...) VALUES (...);`,
    after: `WITH batch AS (
    SELECT st.*,
           ROW_NUMBER() OVER (PARTITION BY st.access_key
                              ORDER BY st.imported_at DESC) AS rn
    FROM dbo.invoice_ingest_staging AS st
    WHERE st.batch_id = @batch_id
)
INSERT INTO dbo.invoice_platform_index (access_key, registry_id, ...)
OUTPUT inserted.access_key, inserted.registry_id INTO @inserted
SELECT b.access_key, b.registry_id, ...
FROM batch AS b
WHERE b.rn = 1
  AND NOT EXISTS (SELECT 1 FROM dbo.invoice_platform_index AS t
                  WITH (UPDLOCK, HOLDLOCK) WHERE t.access_key = b.access_key)
  AND NOT EXISTS (SELECT 1 FROM dbo.invoice_platform_index AS t
                  WITH (UPDLOCK, HOLDLOCK) WHERE t.registry_id = b.registry_id);`,
  },
  {
    id: "preagg",
    file: "procedures/usp_refresh_daily_emission_summary.sql",
    en: {
      tag: "Pre-aggregation · MERGE",
      title: "Incremental summary over a huge fiscal log",
      pain: "A dashboard summarised 12 months of the raw fiscal transmission log on every load. The query took more than 2 minutes and hit the application timeout.",
      fix: "A small summary table refreshed a few days per run (never-summarised days first, plus the two latest), counting each document once in its latest state, upserted with MERGE.",
      result: "The dashboard reads a tiny table instead of scanning the log, and reruns are idempotent.",
    },
    pt: {
      tag: "Pré-agregação · MERGE",
      title: "Resumo incremental sobre um log fiscal enorme",
      pain: "Um painel resumia 12 meses do log de transmissões fiscais a cada carregamento. A consulta passava de 2 minutos e estourava o timeout da aplicação.",
      fix: "Uma tabela de resumo atualizada alguns dias por rodada (primeiro os dias nunca resumidos, mais os dois últimos), contando cada documento uma vez no seu estado mais recente, com MERGE.",
      result: "O painel lê uma tabela pequena em vez de varrer o log, e rodar de novo não duplica nada.",
    },
    before: `-- on every dashboard load
SELECT business_date, store_id,
       SUM(CASE WHEN status = 'AUTHORIZED' THEN 1 ELSE 0 END) AS authorized,
       ...
FROM dbo.fiscal_transmissions          -- 12 months of raw rows
WHERE business_date >= DATEADD(MONTH, -12, @today)
GROUP BY business_date, store_id;      -- 2+ minutes, timeout`,
    after: `-- a few days per run; the dashboard reads daily_emission_summary
WITH latest AS (
    SELECT f.*, ROW_NUMBER() OVER (
             PARTITION BY f.business_date, f.store_id, f.document_number
             ORDER BY f.attempted_at DESC) AS rn
    FROM dbo.fiscal_transmissions AS f
    JOIN @days AS d ON d.business_date = f.business_date
)
MERGE dbo.daily_emission_summary AS tgt
USING (SELECT business_date, store_id, ... FROM latest WHERE rn = 1
       GROUP BY business_date, store_id) AS src
   ON tgt.business_date = src.business_date AND tgt.store_id = src.store_id
WHEN MATCHED THEN UPDATE SET ...
WHEN NOT MATCHED BY TARGET THEN INSERT (...) VALUES (...);`,
  },
  {
    id: "two-stage",
    file: "queries/06_contingency_backlog_two_stage.sql",
    en: {
      tag: "#temp tables · Timeouts",
      title: "Two-stage aggregation to beat a 15s timeout",
      pain: "A backlog panel checked 'still pending?' with a correlated EXISTS on every log row and aggregated it all at once. It ran past the 15-second timeout, and putting EXISTS inside SUM is not even allowed (error 130).",
      fix: "Stage 1 materialises one flagged row per document into an indexed #temp table; stage 2 aggregates that small set.",
      result: "The panel answers inside the timeout and the logic stays readable.",
    },
    pt: {
      tag: "Tabelas #temp · Timeout",
      title: "Agregação em duas etapas para vencer um timeout de 15 s",
      pain: "Um painel de pendências verificava 'ainda pendente?' com EXISTS correlacionado em cada linha do log e agregava tudo de uma vez. Passava do timeout de 15 s, e EXISTS dentro de SUM nem é permitido (erro 130).",
      fix: "A etapa 1 materializa uma linha marcada por documento numa tabela #temp indexada; a etapa 2 agrega esse conjunto pequeno.",
      result: "O painel responde dentro do timeout e a lógica continua legível.",
    },
    before: `SELECT store_id,
       SUM(CASE WHEN EXISTS (SELECT 1 FROM dbo.fiscal_transmissions AS a
                             WHERE a.document_number = c.document_number
                               AND a.transmission_status = 'AUTHORIZED')
                THEN 0 ELSE 1 END) AS still_pending   -- error 130
FROM dbo.fiscal_transmissions AS c
WHERE c.transmission_status = 'CONTINGENCY'
GROUP BY store_id;`,
    after: `-- stage 1: one flagged row per document
SELECT c.store_id, c.document_number,
       CASE WHEN EXISTS (SELECT 1 FROM dbo.fiscal_transmissions AS a
                         WHERE a.document_number = c.document_number
                           AND a.transmission_status = 'AUTHORIZED')
            THEN 0 ELSE 1 END AS still_pending
INTO #pending
FROM dbo.fiscal_transmissions AS c
WHERE c.transmission_status = 'CONTINGENCY'
GROUP BY c.store_id, c.document_number;

CREATE CLUSTERED INDEX CX_pending ON #pending (store_id);

-- stage 2: aggregate the small set
SELECT store_id, COUNT(*) AS docs, SUM(still_pending) AS pending
FROM #pending GROUP BY store_id;`,
  },
  {
    id: "xevents",
    file: "observability/03_trace_app_calls_with_xevents.sql",
    en: {
      tag: "Extended Events · Safe automation",
      title: "Map what a vendor app calls before automating it",
      pain: "Automating an ERP screen by inserting straight into its tables would skip the stock, finance and audit rows that the application writes behind the scenes.",
      fix: "A short Extended Events session filtered to one app, with a ring buffer, captured which procedures run when a user saves one record in the test environment. The automation calls those same procedures instead of touching tables.",
      result: "Automations behave exactly like a user in the application, with every side effect preserved and nothing written directly to ERP tables.",
    },
    pt: {
      tag: "Extended Events · Automação segura",
      title: "Mapear o que o sistema chama antes de automatizar",
      pain: "Automatizar uma tela do ERP gravando direto nas tabelas pularia os registros de estoque, financeiro e auditoria que o sistema grava por trás.",
      fix: "Uma sessão curta de Extended Events, filtrada para um aplicativo e com ring buffer, mostrou quais procedures rodam quando o usuário salva um registro em homologação. A automação chama essas mesmas procedures em vez de mexer nas tabelas.",
      result: "As automações se comportam exatamente como um usuário no sistema, com todos os efeitos preservados e nada gravado direto nas tabelas do ERP.",
    },
    before: `-- tempting, but skips everything the app does on save
INSERT INTO dbo.erp_documents (...) VALUES (...);
INSERT INTO dbo.erp_document_items (...) VALUES (...);`,
    after: `CREATE EVENT SESSION trace_app_calls ON SERVER
ADD EVENT sqlserver.rpc_completed (
    ACTION (sqlserver.client_app_name, sqlserver.session_id)
    WHERE sqlserver.like_i_sql_unicode_string(
              sqlserver.client_app_name, N'ERP Desktop%'))
ADD TARGET package0.ring_buffer (SET max_memory = 4096);
ALTER EVENT SESSION trace_app_calls ON SERVER STATE = START;
-- save one record in the app, read the ring buffer, then:
EXEC dbo.erp_save_document @header = ..., @items = ...;  -- what the app calls`,
  },
  {
    id: "least-privilege",
    file: "security/02_time_boxed_access_extension.sql",
    en: {
      tag: "Least privilege · RBAC",
      title: "A bot that can only extend temporary access",
      pain: "Temporary database access was granted and extended by hand, sometimes stayed open after hours, and a bot with table rights could have created windows or moved start times.",
      fix: "The bot can only move the end of an existing window forward. In production that was a column-level grant; the tested pattern here goes further, with EXECUTE on one procedure (up to 12h per extension) and direct INSERT, UPDATE and DELETE denied.",
      result: "Every access has an owner, a start and an automatic end, and the automation physically cannot do anything else.",
    },
    pt: {
      tag: "Menor privilégio · RBAC",
      title: "Um robô que só consegue prorrogar acesso temporário",
      pain: "O acesso temporário ao banco era liberado e prorrogado à mão, às vezes ficava aberto fora do horário, e um robô com permissão na tabela poderia criar janelas ou mudar o início.",
      fix: "O robô só consegue empurrar o fim de uma janela existente. Em produção isso foi uma permissão por coluna; o padrão testado aqui vai além, com EXECUTE em uma única procedure (até 12 h por prorrogação) e INSERT, UPDATE e DELETE diretos negados.",
      result: "Todo acesso tem dono, início e fim automático, e a automação fisicamente não consegue fazer mais nada.",
    },
    before: `-- bot account with table rights
GRANT SELECT, INSERT, UPDATE, DELETE ON dbo.access_windows TO access_bot;`,
    after: `CREATE OR ALTER PROCEDURE dbo.usp_extend_access_window
    @window_id INT, @new_ends_at DATETIME2(0)
AS
BEGIN
    UPDATE dbo.access_windows
    SET ends_at = @new_ends_at
    WHERE window_id = @window_id
      AND @new_ends_at > ends_at
      AND @new_ends_at <= DATEADD(HOUR, 12, ends_at);
    IF @@ROWCOUNT = 0
        THROW 50010, 'Not a valid extension.', 1;
END;

GRANT EXECUTE ON OBJECT::dbo.usp_extend_access_window TO db_access_window_bot;
DENY INSERT, UPDATE, DELETE ON OBJECT::dbo.access_windows TO db_access_window_bot;`,
  },
];

const SQL_UI = {
  en: { before: "Before", after: "After", open: "Open the tested script", pain: "THE PAIN", fix: "THE FIX", result: "RESULT" },
  pt: { before: "Antes", after: "Depois", open: "Abrir o script testado", pain: "A DOR", fix: "A CORREÇÃO", result: "RESULTADO" },
};
