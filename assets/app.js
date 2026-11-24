const EMAIL_ADDRESS = "gavicoding@gmail.com";

const TRANSLATIONS = {
  en: {
    skip_link: "Skip to main content",
    nav_lab: "Live Lab",
    nav_demos: "Video Demos",
    nav_dpo: "DPO & LGPD",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_stack: "Stack",
    nav_contact: "Contact",
    hero_badge: "REMOTE · ASYNC-FIRST · BRAZIL & GLOBAL",
    hero_title:
      "Engineering resilient automation, hybrid Windows/Linux ops, and privacy governance by design.",
    hero_subtitle:
      "I'm Gabriel Souza: IT Automation, DevOps & Software Engineer, Solutions Product Owner (PO), and DPO (LGPD/GDPR). I combine Python, TypeScript, Next.js, T-SQL, C# (.NET), Docker, Windows Server, and Active Directory to deliver ERP/system deployments, L2 remote/chat operations, and OWASP AppSec hardening.",
    cta_lab: "Launch Interactive Lab",
    cta_github: "GitHub",
    cta_linkedin: "LinkedIn",
    cta_copy_email: "Copy Email",
    term_status: "INTERACTIVE CLI",
    term_placeholder: "Type 'help', 'dpo', 'infra'...",
    term_run: "Run",
    metric_1_label:
      "Next.js dashboard TTFB after replacing 85 parallel queries with single-pass SQL aggregation",
    metric_2_label:
      "Distributed branches & Windows endpoints across hybrid AD, Linux & L2 remote/chat ops",
    metric_3_label:
      "Public open-source tools tested with GitHub Actions across Python, TS, T-SQL, Bash/PS & C#",
    metric_4_label:
      "LGPD/GDPR governance, APDADOS® Security Committee & 16 OWASP Top 10 flaws remediated",
    lab_eyebrow: "LIVE BROWSER SANDBOX",
    lab_title: "Interactive Engineering Lab",
    lab_desc:
      "Playable front-end simulations built in pure HTML5, CSS3, and Vanilla JavaScript to demonstrate Zero-Trust DLP redaction and distributed queue observability with synthetic test data.",
    dlp_title: "Live LGPD / Secret Redaction Engine",
    dlp_desc:
      "Edit the text below or load a synthetic payload to inspect real-time CPF/CNPJ, email, API token, and RFC 1918 internal IP detection in the browser.",
    dlp_preset_ticket: "Sample: ITSM Ticket",
    dlp_preset_ai: "Sample: AI Prompt",
    dlp_preset_config: "Sample: Env Log",
    dlp_input_label: "RAW INPUT (SYNTHETIC DATA)",
    dlp_output_label: "REDACTED OUTPUT PREVIEW",
    dlp_stat_pii: "PII (CPF/CNPJ/Email)",
    dlp_stat_secrets: "API Keys / Tokens",
    dlp_stat_ips: "Internal IPs",
    topo_title: "Animated Hybrid Topology & Queue Watchdog",
    topo_desc:
      "Switch operational load states to see how snapshot trend heuristics separate active HIGH_LOAD bursts from true STALLED bottlenecks without false-alarm floods.",
    topo_btn_healthy: "Healthy Sync",
    topo_btn_high: "HIGH_LOAD (Draining)",
    topo_btn_stalled: "STALLED (Bottleneck)",
    topo_btn_recover: "Run Auto-Recovery",
    topo_stat_depth: "Queue Depth",
    topo_stat_trend: "Drain Trend",
    topo_stat_mtls: "mTLS Link",
    topo_stat_policy: "Alert Policy",
    demos_eyebrow: "ANIMATED ENGINEERING SHOWCASE (1080P60)",
    demos_title: "Project & Governance Video Demos",
    demos_desc:
      "Seven deterministic 30s studio demos illustrating architecture, code execution, and DPO compliance flows using 100% synthetic data.",
    demo_synthetic_badge: "DEMO · 100% SYNTHETIC",
    demo_open_project: "Open Project",
    demo_07_nav_title: "07 · DPO & LGPD Governance",
    btn_watch_dpo_demo: "Watch DPO Video (32s)",
    btn_watch_demo: "Watch Demo",
    dpo_eyebrow: "DATA PROTECTION OFFICER & SECURITY GOVERNANCE",
    dpo_title: "DPO Governance (LGPD / GDPR), APDADOS® & OWASP AppSec",
    dpo_desc:
      "Bridging legal compliance and hands-on engineering: RoPA inventories, DPIA/RIPD risk assessments, Art. 18 data subject workflows, relational anonymization, OWASP Top 10 remediation, and active Security Committee participation at APDADOS® since 2021.",
    dpo_step_1: "Mapping & RoPA",
    dpo_step_2: "Legal Bases & DPIA/RIPD",
    dpo_step_3: "Art. 18 & Anonymization",
    dpo_step_4: "OWASP & Access Hardening",
    dpo_step_5: "Zero-Trust AI & APDADOS®",
    cred_edu_tag: "ACADEMIC FOUNDATION",
    cred_edu_title: "Education & Cybersecurity Specialization",
    edu1_title: "Postgraduate in Cybersecurity",
    edu1_meta: "UTFPR · Apr 2026 - Mar 2028",
    edu2_title: "MBA in Process Management",
    edu2_meta: "Estácio · 2023",
    edu3_title: "Postgraduate in Information Security",
    edu3_meta: "Estácio · 2023",
    edu4_title: "Bachelor's Degree in Computer Science",
    edu4_meta: "Estácio · 2019 - 2022",
    cred_gov_tag: "COMMITTEE, CERTS & CONTROLS",
    cred_gov_title: "APDADOS®, Certifications & Technical Controls",
    edu5_title: "Volunteer Security Committee Member",
    edu5_meta:
      "APDADOS® (National Association of Data Privacy Professionals) · Jul 2021 - Present",
    cred_apdados_desc:
      "Active contribution to cybersecurity practices, ANPD regulatory readiness, corporate privacy training, and incident-response guidance.",
    certs_langs_title: "Certifications & Languages",
    certs_langs_body:
      "Minicurso LGPD (APDADOS®) · Curso LGPD 4.0 (Mariana Toledo) | Portuguese (Native) & Technical English (Reading, Docs & Async)",
    dpo_pill_1: "RoPA & DPIA / RIPD",
    dpo_pill_2: "Vendor DPAs & Notices",
    dpo_pill_3: "16 OWASP Flaws Mapped",
    dpo_pill_4: "AD logonHours & RBAC",
    projects_eyebrow: "OPEN-SOURCE & CI VERIFIED",
    projects_title: "Featured Open-Source Projects",
    projects_desc:
      "Six public repositories built with automated CI checks in GitHub Actions, bilingual English/Portuguese documentation, and zero confidential company data.",
    filter_all: "All",
    filter_security: "Security & AI",
    filter_observability: "Observability",
    filter_data: "Data / T-SQL",
    filter_infra: "Infra / DevOps",
    filter_desktop: "Desktop",
    proj_pii_desc:
      "Zero-dependency CLI, library & GitHub PR diff auditor catching LGPD/GDPR PII (mod-11 CPF/CNPJ, Luhn cards), API secrets, and RFC 1918 internal IPs across logs, PRs, and screenshots (OCR/Vision).",
    proj_watchdog_desc:
      "Read-only replication & job queue monitor using snapshot trend heuristics to distinguish active HIGH_LOAD from STALLED queues, preventing alert fatigue with cooldowns, webhooks, and a live HTML dashboard.",
    proj_sql_desc:
      "Synthetic T-SQL analytics & DBA toolkit covering single-pass conditional sales KPIs, ROW_NUMBER() asset deduplication, multi-mode stored procedures, WMS bottlenecks, sys.dm_tran_locks logging & RBAC grants.",
    proj_infra_desc:
      "Hybrid Linux + Windows/AD operations playbook featuring RSA-3072 signed PowerShell agents, language-agnostic SID ACL recovery, Postgres Docker backups, Nginx mTLS templates, and 24 sanitized troubleshooting cases.",
    proj_otimizapc_desc:
      "Dark-mode Windows system optimizer built with strict deletion previews, one-click Restore Points, multi-profile junk cleanup, content-hash duplicate finder, 90-day orphan residue scanner, S.M.A.R.T. & instant disk analyzer.",
    proj_tb_desc:
      "Bidirectional Windows email & address-book migrator preserving folder trees, original received timestamps (MSGFLAG_UNSENT / MAPI), senders, attachments, and \\\\?\\ long file paths.",
    link_repo: "Repository",
    link_docs: "Live Docs",
    exp_eyebrow: "PRODUCTION IMPACT & TIMELINE",
    impact_title: "Sanitized Production Case Studies & Career Progression",
    impact_desc:
      "Measurable architecture, web engineering, Windows Server / AD operations, Solutions Product Ownership (PO), and reliability outcomes across distributed retail.",
    imp1_tag: "Next.js · SVG Topology · Observability",
    imp1_title: "Operational Dashboard & Live Infrastructure Map",
    imp1_body:
      "Replaced 85 parallel per-store queries with single-query aggregations, dynamic Server Components, animated SVG dependency topology, and hourly batched HTML alerts, cutting TTFB from 6.8s to 0.1s and email noise from 80+/day to digests.",
    imp2_tag: "Web · Leaflet/OSM · WCAG Accessibility",
    imp2_title: "Corporate Site Rebuild & Interactive Store Locator",
    imp2_body:
      "Rebuilt a 7-page institutional website with a city/service-filtered Leaflet + OpenStreetMap locator, ResizeObserver iframe sizing, mobile-first breakpoints (tested at 390px), and automated contrast audits achieving 0 WCAG failures.",
    imp3_tag: "Windows Fleet · WebSockets + mTLS · PowerShell",
    imp3_title: "Endpoint Fleet Control Plane & ACL Self-Healing",
    imp3_body:
      "Deployed an NSSM Windows agent over WebSockets + mTLS with wave rollouts, kill-switch recovery, RSA-signed auto-updates, and language-agnostic SID ACL repair, cutting post-restart reconnection from 60s to 3-7s.",
    imp4_tag: "Sync Recovery · ITSM · Automation",
    imp4_title: "Sales & Fiscal Retransmission + ITSM Backlog Recovery",
    imp4_body:
      "Automated contingency fiscal/sales retransmission with retry safeguards and vendor ticketing, automated CCTV evidence retrieval across 83 NVRs/DVRs, and recovered a stalled 109k-ticket ITSM notification queue without email storms.",
    imp5_tag: "T-SQL · WMS Picking · Lock Diagnostics",
    imp5_title: "SQL Server Optimization & Warehouse Throughput Analytics",
    imp5_body:
      "Eliminated multi-trip returnable container duplicates via ROW_NUMBER(), unified strategic sales KPIs in one pass, instrumented WMS picking/checkout stage bottlenecks, and captured sys.dm_tran_locks wait snapshots asynchronously.",
    imp6_tag: "Product Ownership (PO) · System Deployment · Rollouts",
    imp6_title: "End-to-End ERP & System Implementations, PO & UI Extensions",
    imp6_body:
      "Acted as Solutions Product Owner translating business needs into specs, Kanban pipelines, UAT sign-off, migration runbooks, parallel cutovers, wave rollouts, and hands-on team training, plus CSP-safe UI plugins (~13 KB theme) and Outlook-safe HTML/SVG templates.",
    imp7_tag: "Python · SQL Server · OData API · IMAP · Desktop 24/7",
    imp7_badge: "IN PRODUCTION",
    imp7_title: "E-Invoice (NF-e) Intake Hub & Daily Reconciliation",
    case_pain: "THE PAIN",
    case_solution: "WHAT I BUILT",
    case_result: "RESULT",
    imp7_pain:
      "Supplier invoice XMLs arrived by email, invoices stalled in the ERP import queue, and a separate manual tool made someone pick date ranges and re-scan 40k+ invoices a month, so gaps stayed open until the next manual run.",
    imp7_solution:
      "One always-on desktop hub: IMAP intake of XMLs, automatic re-queue of stalled invoices in the ERP, incremental sync from the fiscal platform's OData API, key-only daily reconciliation, certificate expiry alerts, and a watchdog that restarts any hung cycle.",
    imp7_result:
      "Manual monthly sweeps became 10-minute cycles of ~4s each, plus one daily pass that checks every day since a set start date (~12s per day) and fetches only what is missing. Also fixed a 3-hour timezone gap and a field the old tool always left empty.",
    timeline_heading: "Career Timeline",
    tl1_period: "Aug 2021 - Present · Multi-Branch Retail",
    tl1_title: "IT Administrator, DPO (LGPD) & Solutions Product Owner (PO)",
    tl1_body:
      "Lead end-to-end ERP/system deployments, Solutions PO backlogs, Windows Server & Active Directory access governance, L2 remote/chat escalation, Python/TypeScript/T-SQL automation, and corporate LGPD compliance across ~80 branches.",
    tl2_period: "Apr 2021 - Aug 2021 · Multi-Branch Retail",
    tl2_title: "Senior IT Assistant: Information Security, LGPD & Level 2 Support",
    tl2_body:
      "Led initial Information Security and LGPD compliance structuring alongside Level 2 branch technical support, incident response, Active Directory controls, and early privacy risk mapping.",
    tl3_period: "Sep 2019 - Apr 2021 · Multi-Branch Retail",
    tl3_title: "IT Assistant: Remote & Chat Support, Service Desk & ERP",
    tl3_body:
      "Delivered L1/L2 technical support via remote access, chat, and on-site troubleshooting, hardware/network maintenance, Active Directory user/access routines, and ERP system rollout support.",
    tl4_period: "Feb 2016 - Dec 2016 · Municipal Data Processing",
    tl4_title: "IT Intern: Software Development & Technical Support",
    tl4_body:
      "Worked in the Software Development department supporting internal application development and maintenance alongside end-user technical support and preventive/corrective workstation maintenance.",
    stack_eyebrow: "CORE TOOLKIT",
    stack_title: "Technical Stack",
    stack_desc:
      "End-to-end engineering from Windows Server, Active Directory, and SQL internals to modern web interfaces, CI/CD, and DPO governance.",
    stack_g1: "Languages & Scripting",
    stack_g2: "Web, APIs & Desktop",
    stack_g3: "Windows Server, AD, Databases & Infra",
    stack_g4: "DPO Governance, Security & Product",
    contact_eyebrow: "NEXT STEP",
    contact_title: "Let's Work Together",
    contact_desc:
      "Open to remote opportunities in Brazil and internationally across IT Automation, Software/Backend Engineering, Solutions PO / Systems Implementation, DevOps / Hybrid Infrastructure, and DPO / AppSec.",
    contact_github: "Visit GitHub (@gavicoding)",
    contact_linkedin: "Connect on LinkedIn",
    contact_copy_email: "Copy Email (gavicoding@gmail.com)",
    footer_note: "Handcrafted with HTML5, CSS3 & Vanilla JS · Hosted on GitHub Pages",
    toast_copied: "Email copied: gavicoding@gmail.com",
    toast_copy_fallback: "Email: gavicoding@gmail.com",
  },
  pt: {
    skip_link: "Ir para o conteúdo principal",
    nav_lab: "Lab ao Vivo",
    nav_demos: "Vídeos Demo",
    nav_dpo: "DPO & LGPD",
    nav_projects: "Projetos",
    nav_experience: "Experiência",
    nav_stack: "Stack",
    nav_contact: "Contato",
    hero_badge: "REMOTO · ASYNC-FIRST · BRASIL & EXTERIOR",
    hero_title:
      "Engenharia de automações resilientes, infraestrutura Windows/Linux e governança de privacidade.",
    hero_subtitle:
      "Sou Gabriel Souza: Engenheiro de Automação de TI, DevOps e Software, Product Owner (PO) de Soluções e DPO (LGPD/GDPR). Uno Python, TypeScript, Next.js, T-SQL, C# (.NET), Docker, Windows Server e Active Directory para implantar ERPs e sistemas, sustentar o suporte remoto/chat N2 e aplicar hardening OWASP AppSec.",
    cta_lab: "Testar Laboratório Interativo",
    cta_github: "GitHub",
    cta_linkedin: "LinkedIn",
    cta_copy_email: "Copiar E-mail",
    term_status: "CLI INTERATIVO",
    term_placeholder: "Digite 'help', 'dpo', 'infra'...",
    term_run: "Executar",
    metric_1_label:
      "TTFB do painel Next.js após trocar 85 consultas paralelas por agregação única em SQL",
    metric_2_label:
      "Filiais e estações Windows atendidas em operação híbrida AD, Linux e suporte remoto/chat N2",
    metric_3_label:
      "Repositórios públicos com testes no GitHub Actions em Python, TS, T-SQL, Bash/PS e C#",
    metric_4_label:
      "Governança DPO (LGPD/GDPR), Comitê de Segurança APDADOS® e 16 falhas OWASP Top 10 mapeadas",
    lab_eyebrow: "SANDBOX AO VIVO NO NAVEGADOR",
    lab_title: "Laboratório Interativo de Engenharia",
    lab_desc:
      "Simulações interativas construídas em HTML5, CSS3 e JavaScript puro para demonstrar mascaramento DLP Zero-Trust e observabilidade de filas distribuídas usando dados fictícios.",
    dlp_title: "Mascaramento de Dados LGPD & Segredos ao Vivo",
    dlp_desc:
      "Edite o texto abaixo ou carregue um exemplo fictício para ver a detecção e o mascaramento instantâneo de CPF, CNPJ, e-mail, chaves de API e IPs internos no navegador.",
    dlp_preset_ticket: "Exemplo: Chamado ITSM",
    dlp_preset_ai: "Exemplo: Prompt de IA",
    dlp_preset_config: "Exemplo: Log de Env",
    dlp_input_label: "ENTRADA BRUTA (DADOS FICTÍCIOS)",
    dlp_output_label: "SAÍDA MASCARADA EM TEMPO REAL",
    dlp_stat_pii: "PII (CPF/CNPJ/E-mail)",
    dlp_stat_secrets: "Chaves / Tokens",
    dlp_stat_ips: "IPs Internos",
    topo_title: "Topologia Híbrida Animada & Watchdog de Filas",
    topo_desc:
      "Alterne os estados de carga para visualizar como a heurística de tendência diferencia picos saudáveis (HIGH_LOAD) de travamentos reais (STALLED) sem gerar tempestade de alertas.",
    topo_btn_healthy: "Sync Saudável",
    topo_btn_high: "HIGH_LOAD (Drenando)",
    topo_btn_stalled: "STALLED (Gargalo)",
    topo_btn_recover: "Executar Auto-Recuperação",
    topo_stat_depth: "Tamanho da Fila",
    topo_stat_trend: "Tendência",
    topo_stat_mtls: "Link mTLS",
    topo_stat_policy: "Política de Alerta",
    demos_eyebrow: "VITRINE ANIMADA DE ENGENHARIA (1080P60)",
    demos_title: "Vídeos Demonstrativos dos Projetos & DPO",
    demos_desc:
      "Sete vídeos curtos (30s) mostrando arquitetura, execução do código e fluxos de governança DPO, com dados 100% fictícios.",
    demo_synthetic_badge: "DEMO · 100% FICTÍCIO",
    demo_open_project: "Abrir Projeto",
    demo_07_nav_title: "07 · Governança DPO & LGPD",
    btn_watch_dpo_demo: "Ver Vídeo DPO (32s)",
    btn_watch_demo: "Ver Vídeo",
    dpo_eyebrow: "ENCARREGADO DE DADOS (DPO) & SEGURANÇA",
    dpo_title: "Governança DPO (LGPD / GDPR), APDADOS® & OWASP AppSec",
    dpo_desc:
      "Unindo adequação regulatória e engenharia prática: inventários RoPA, relatórios DPIA/RIPD, fluxos do Art. 18, anonimização relacional, remediação OWASP Top 10 e atuação voluntária no Comitê de Segurança da APDADOS® desde 2021.",
    dpo_step_1: "Mapeamento & RoPA",
    dpo_step_2: "Bases Legais & RIPD",
    dpo_step_3: "Art. 18 & Anonimização",
    dpo_step_4: "OWASP & Controle de Acesso",
    dpo_step_5: "IA Zero-Trust & APDADOS®",
    cred_edu_tag: "BASE ACADÊMICA",
    cred_edu_title: "Formação & Especialização em Segurança",
    edu1_title: "Pós-graduação em Segurança Cibernética",
    edu1_meta: "UTFPR · Abr 2026 - Mar 2028",
    edu2_title: "MBA em Gestão de Processos",
    edu2_meta: "Estácio · 2023",
    edu3_title: "Pós-graduação em Segurança da Informação",
    edu3_meta: "Estácio · 2023",
    edu4_title: "Bacharelado em Ciência da Computação",
    edu4_meta: "Estácio · 2019 - 2022",
    cred_gov_tag: "COMITÊ, CERTIFICAÇÕES & CONTROLES",
    cred_gov_title: "APDADOS®, Certificações & Controles Técnicos",
    edu5_title: "Membro do Comitê de Segurança (Voluntário)",
    edu5_meta:
      "APDADOS® (Associação Nacional dos Profissionais de Privacidade de Dados) · Jul 2021 - Atual",
    cred_apdados_desc:
      "Atuação ativa em práticas de cibersegurança, prontidão regulatória junto à ANPD, capacitação corporativa e diretrizes de resposta a incidentes.",
    certs_langs_title: "Certificações & Idiomas",
    certs_langs_body:
      "Minicurso LGPD (APDADOS®) · Curso LGPD 4.0 (Mariana Toledo) | Português (Nativo) & Inglês Básico/Técnico (Leitura e Documentação)",
    dpo_pill_1: "RoPA & DPIA / RIPD",
    dpo_pill_2: "DPAs & Avisos de Privacidade",
    dpo_pill_3: "16 Falhas OWASP Mapeadas",
    dpo_pill_4: "AD logonHours & RBAC",
    projects_eyebrow: "OPEN-SOURCE VALIDADO NO CI",
    projects_title: "Projetos Open-Source em Destaque",
    projects_desc:
      "Seis repositórios públicos com validações automatizadas no GitHub Actions, documentação bilíngue (Inglês/Português) e zero dados proprietários.",
    filter_all: "Todos",
    filter_security: "Segurança & IA",
    filter_observability: "Observabilidade",
    filter_data: "Dados / T-SQL",
    filter_infra: "Infra / DevOps",
    filter_desktop: "Desktop",
    proj_pii_desc:
      "CLI, biblioteca e auditor de diffs de PR no GitHub sem dependências externas que detecta dados LGPD/GDPR (CPF/CNPJ módulo 11, cartões Luhn), segredos e IPs internos RFC 1918 em logs, PRs e prints (OCR/Visão).",
    proj_watchdog_desc:
      "Monitor somente leitura de filas e replicação usando heurística de tendência por snapshots para diferenciar HIGH_LOAD de STALLED, evitando fadiga de alertas com cooldowns, webhooks e painel web ao vivo.",
    proj_sql_desc:
      "Kit sintético de T-SQL e DBA cobrindo KPIs de vendas em passada única, deduplicação por ROW_NUMBER(), procedures multivisão, gargalos WMS, captura de locks (sys.dm_tran_locks) e controle de acesso RBAC.",
    proj_infra_desc:
      "Playbook de infra híbrida Linux + Windows/AD com agentes PowerShell assinados (RSA-3072), recuperação de ACL por SID, backups Postgres em Docker, templates Nginx mTLS e 24 casos reais anonimizados.",
    proj_otimizapc_desc:
      "Otimizador Windows em tema escuro com revisão explícita antes de excluir, Pontos de Restauração em 1 clique, limpeza multi-usuário, busca de duplicados por hash, resíduos órfãos (90 dias), S.M.A.R.T. e análise instantânea de disco.",
    proj_tb_desc:
      "Migrador bidirecional Windows de e-mails e contatos preservando hierarquia de pastas, datas originais de recebimento (MSGFLAG_UNSENT / MAPI), remetentes, anexos e caminhos longos (\\\\?\\).",
    link_repo: "Repositório",
    link_docs: "Documentação",
    exp_eyebrow: "IMPACTO EM PRODUÇÃO & TRAJETÓRIA",
    impact_title: "Casos Sanitizados em Produção & Evolução de Carreira",
    impact_desc:
      "Resultados mensuráveis em arquitetura, engenharia web, operação Windows Server / Active Directory, Product Ownership (PO) de soluções e confiabilidade no varejo multilojas.",
    imp1_tag: "Next.js · Topologia SVG · Observabilidade",
    imp1_title: "Dashboard Operacional & Mapa de Infraestrutura",
    imp1_body:
      "Substituiu 85 consultas paralelas por agregação única, Server Components dinâmicos, mapa de topologia animado em SVG e alertas HTML consolidados por hora, reduzindo TTFB de 6,8s para 0,1s e e-mails de 80+/dia para resumos.",
    imp2_tag: "Web · Leaflet/OSM · Acessibilidade WCAG",
    imp2_title: "Reconstrução de Site & Localizador Interativo de Lojas",
    imp2_body:
      "Reconstruiu site institucional de 7 páginas com localizador Leaflet + OpenStreetMap filtrável por cidade/serviço, ajuste de iframe com ResizeObserver, responsividade mobile (390px) e auditoria de contraste com 0 falhas WCAG.",
    imp3_tag: "Frota Windows · WebSockets + mTLS · PowerShell",
    imp3_title: "Painel de Controle de Frota & Auto-Cura de ACLs",
    imp3_body:
      "Implantou agente Windows (NSSM) via WebSockets + mTLS com rollout em ondas, kill switch, auto-update assinado em RSA e reparo de ACLs por SID independente de idioma, reduzindo reconexão pós-restart de 60s para 3-7s.",
    imp4_tag: "Retransmissão · ITSM · Automação",
    imp4_title: "Retransmissão de Vendas/Fiscal & Fila de 109k Chamados",
    imp4_body:
      "Automatizou retransmissão fiscal e de vendas em contingência com salvaguardas e abertura de chamados, coleta de imagens em 83 DVRs/NVRs e normalização de fila de 109 mil notificações ITSM sem disparo em massa.",
    imp5_tag: "T-SQL · Separação WMS · Diagnóstico de Locks",
    imp5_title: "Otimização SQL Server & Produtividade de Separação",
    imp5_body:
      "Eliminou duplicidade em rastreamento de caixas retornáveis via ROW_NUMBER(), unificou vendas estratégicas em passada única, mediu gargalos de separação/conferência WMS e registrou snapshots assíncronos de sys.dm_tran_locks.",
    imp6_tag: "Product Ownership (PO) · Implantação de Sistemas · Rollouts",
    imp6_title: "Implantação de ERPs & Sistemas, PO & Extensões Web",
    imp6_body:
      "Atuação como Product Owner (PO) de soluções internas traduzindo demandas de negócio em especificações, fluxos Kanban, homologação (UAT), runbooks de migração, viradas em paralelo, rollouts em ondas e treinamentos práticos, além de plugins CSP (~13 KB) e templates HTML/SVG compatíveis com Outlook.",
    imp7_tag: "Python · SQL Server · API OData · IMAP · Desktop 24/7",
    imp7_badge: "EM PRODUÇÃO",
    imp7_title: "Hub de Entrada de NF-e & Conciliação Diária",
    case_pain: "A DOR",
    case_solution: "O QUE EU CONSTRUÍ",
    case_result: "RESULTADO",
    imp7_pain:
      "Os XMLs de NF-e dos fornecedores chegavam por e-mail, notas travavam na fila de importação do ERP e uma ferramenta manual à parte exigia alguém escolher datas e reprocessar mais de 40 mil notas por mês, então as lacunas ficavam abertas até a próxima rodada manual.",
    imp7_solution:
      "Um hub desktop que roda 24/7: entrada dos XMLs via IMAP, reprocessamento automático das notas travadas no ERP, sincronização incremental pela API OData da plataforma fiscal, conciliação diária comparando só as chaves, alerta de certificado digital vencendo e um watchdog que reinicia qualquer ciclo travado.",
    imp7_result:
      "A varredura manual do mês virou ciclos a cada 10 min de ~4s cada, mais uma passada diária que confere todos os dias desde uma data inicial (~12s por dia) e baixa só o que falta. De quebra, corrigi uma janela de fuso deslocada em 3h e um campo que a ferramenta antiga sempre deixava vazio.",
    timeline_heading: "Trajetória Profissional",
    tl1_period: "Ago 2021 - Atual · Varejo Multilojas",
    tl1_title: "Administrador de TI, DPO (LGPD) & Product Owner (PO) de Soluções",
    tl1_body:
      "Liderança de implantações ponta a ponta de ERPs/sistemas, backlog de soluções como PO, governança de acessos em Windows Server e Active Directory, suporte N2 remoto/chat, automações em Python/TypeScript/T-SQL e conformidade LGPD em ~80 filiais.",
    tl2_period: "Abr 2021 - Ago 2021 · Varejo Multilojas",
    tl2_title: "Auxiliar de TI Sênior: Segurança da Informação, LGPD & Suporte N2",
    tl2_body:
      "Estruturação inicial de Segurança da Informação e adequação à LGPD somada ao suporte técnico N2 para matriz e filiais, resposta a incidentes, controles no Active Directory e mapeamento inicial de riscos.",
    tl3_period: "Set 2019 - Abr 2021 · Varejo Multilojas",
    tl3_title: "Auxiliar de TI: Atendimento Remoto, Chat, Service Desk & ERP",
    tl3_body:
      "Suporte técnico N1/N2 a usuários via acesso remoto, chat e atendimento presencial, manutenção preventiva/corretiva de hardware e redes, rotinas de Active Directory e apoio em implantações de sistemas ERP.",
    tl4_period: "Fev 2016 - Dez 2016 · Processamento de Dados Municipal",
    tl4_title: "Estagiário de TI: Desenvolvimento de Sistemas & Suporte Técnico",
    tl4_body:
      "Atuação no setor de Desenvolvimento apoiando criação e manutenção de sistemas internos, além de suporte técnico a usuários finais e manutenção preventiva/corretiva de estações e infraestrutura.",
    stack_eyebrow: "CAIXA DE FERRAMENTAS",
    stack_title: "Stack Técnica",
    stack_desc:
      "Engenharia ponta a ponta: de Windows Server, Active Directory e internals de banco de dados até interfaces web modernas, CI/CD e governança DPO.",
    stack_g1: "Linguagens & Scripting",
    stack_g2: "Web, APIs & Desktop",
    stack_g3: "Windows Server, AD, Bancos & Infra",
    stack_g4: "Governança DPO, Segurança & Produto",
    contact_eyebrow: "PRÓXIMO PASSO",
    contact_title: "Vamos Trabalhar Juntos",
    contact_desc:
      "Aberto a oportunidades remotas no Brasil e no exterior em Automação de TI, Engenharia de Software/Backend, Implantação de Sistemas (PO), DevOps / Infraestrutura Híbrida e DPO / AppSec.",
    contact_github: "Visitar GitHub (@gavicoding)",
    contact_linkedin: "Conectar no LinkedIn",
    contact_copy_email: "Copiar E-mail (gavicoding@gmail.com)",
    footer_note: "Desenvolvido em HTML5, CSS3 & JS puro · Hospedado no GitHub Pages",
    toast_copied: "E-mail copiado: gavicoding@gmail.com",
    toast_copy_fallback: "E-mail: gavicoding@gmail.com",
  },
};

const TERMINAL_DATA = {
  en: {
    help: [
      "$ help",
      "Available commands: whoami, dpo, infra, projects, stack, contact, clear",
      "Tip: click any command chip below or type your own.",
    ],
    whoami: [
      "$ whoami --profile",
      "Gabriel Souza (@gavicoding) | IT Admin, DevOps, Solutions PO & DPO (LGPD/GDPR)",
      "Focus: Python, TypeScript, Next.js, T-SQL, C# (.NET), Docker, Windows Server & AD",
      "Education: B.Sc. Computer Science | MBA Process Mgmt | Postgrad InfoSec & Cybersecurity (UTFPR)",
      "Volunteering: Security Committee Member at APDADOS® (since 2021)",
    ],
    dpo: [
      "$ dpo --status",
      "[OK] RoPA inventory & Arts. 7/11 legal bases mapped across retail & SaaS",
      "[OK] DPIA/RIPD risk governance, vendor DPAs & Art. 18 rights workflows",
      "[OK] OWASP Top 10 web pentesting: 16 critical/medium findings remediated",
      "[OK] Zero-Trust AI DLP gate preventing PII & internal secrets leakage",
    ],
    infra: [
      "$ infra --health",
      "[OK] ~80 branches / ~400 Windows endpoints managed via AD & GPOs",
      "[OK] Fleet Agent: WebSockets + mTLS (3-7s reconnect after reboot)",
      "[OK] L2 Service Desk, remote/chat escalation & SQL read-only watchdog",
    ],
    projects: [
      "$ ls ./open-source",
      "1. pii-screenshot-guard   (Python)     Zero-Trust DLP & PR auditor",
      "2. queue-health-watchdog  (TypeScript) Replication trend monitor",
      "3. tsql-retail-ops        (T-SQL)      Single-pass KPIs & DBA locks",
      "4. infra-ops-playbook     (PS/Bash)    RSA agents, SID ACL & mTLS",
      "5. OtimizaPC              (C#/.NET 8)  Safe Windows MVVM optimizer",
      "6. Thunderbird-Outlook    (Python/COM) Bidirectional mail migrator",
    ],
    stack: [
      "$ stack --summary",
      "Code:  Python, TypeScript, JS, T-SQL, C# (.NET 8), Bash, PowerShell",
      "Web:   Next.js, React, FastAPI, Node.js, Playwright, HTML5, CSS3",
      "Infra: Windows Server, Active Directory, Linux, Docker, Nginx mTLS, SQL Server",
    ],
    contact: [
      "$ contact --links",
      "Email:    gavicoding@gmail.com",
      "GitHub:   https://github.com/gavicoding",
      "LinkedIn: https://www.linkedin.com/in/gabrielvsouza/",
    ],
    unknown: (cmd) => [
      `$ ${cmd}`,
      `Command not found: '${cmd}'. Try 'help', 'whoami', 'dpo', 'infra', 'projects', or 'stack'.`,
    ],
  },
  pt: {
    help: [
      "$ help",
      "Comandos disponíveis: whoami, dpo, infra, projects, stack, contact, clear",
      "Dica: clique nos botões abaixo ou digite um comando.",
    ],
    whoami: [
      "$ whoami --profile",
      "Gabriel Souza (@gavicoding) | Adm. de TI, DevOps, PO de Soluções & DPO (LGPD/GDPR)",
      "Foco: Python, TypeScript, Next.js, T-SQL, C# (.NET), Docker, Windows Server & AD",
      "Formação: Ciência da Computação | MBA Processos | Pós Seg. Info & Cibersegurança (UTFPR)",
      "Voluntariado: Membro do Comitê de Segurança da APDADOS® (desde 2021)",
    ],
    dpo: [
      "$ dpo --status",
      "[OK] Inventário RoPA e bases legais (Arts. 7 e 11) mapeados",
      "[OK] Relatórios DPIA/RIPD, DPAs com fornecedores e fluxos do Art. 18",
      "[OK] Pentests web OWASP Top 10: 16 falhas críticas/médias remediadas",
      "[OK] Barreira DLP Zero-Trust impedindo exposição de PII/segredos em IA",
    ],
    infra: [
      "$ infra --health",
      "[OK] ~80 filiais / ~400 estações Windows geridas via AD e GPOs",
      "[OK] Agente de Frota: WebSockets + mTLS (reconexão em 3-7s pós-boot)",
      "[OK] Service Desk N2, suporte remoto/chat e watchdog SQL somente leitura",
    ],
    projects: [
      "$ ls ./open-source",
      "1. pii-screenshot-guard   (Python)     Scanner DLP Zero-Trust & PRs",
      "2. queue-health-watchdog  (TypeScript) Monitor de filas por tendência",
      "3. tsql-retail-ops        (T-SQL)      KPIs em 1 passada & locks DBA",
      "4. infra-ops-playbook     (PS/Bash)    Agentes RSA, ACL por SID & mTLS",
      "5. OtimizaPC              (C#/.NET 8)  Otimizador Windows MVVM seguro",
      "6. Thunderbird-Outlook    (Python/COM) Migrador bidirecional MAPI",
    ],
    stack: [
      "$ stack --summary",
      "Código: Python, TypeScript, JS, T-SQL, C# (.NET 8), Bash, PowerShell",
      "Web:    Next.js, React, FastAPI, Node.js, Playwright, HTML5, CSS3",
      "Infra:  Windows Server, Active Directory, Linux, Docker, Nginx mTLS, SQL Server",
    ],
    contact: [
      "$ contact --links",
      "E-mail:   gavicoding@gmail.com",
      "GitHub:   https://github.com/gavicoding",
      "LinkedIn: https://www.linkedin.com/in/gabrielvsouza/",
    ],
    unknown: (cmd) => [
      `$ ${cmd}`,
      `Comando desconhecido: '${cmd}'. Tente 'help', 'whoami', 'dpo', 'infra', 'projects' ou 'stack'.`,
    ],
  },
};

const DLP_PRESETS = {
  en: {
    ticket:
      "Ticket #8421 (Fictional Store 12): User Maria Silva, CPF 123.456.789-01, e-mail maria.silva@exemplo-ficticio.com.br reported printer error on host 10.24.8.15. Fallback token sk_live_demo_9f8a7b6c5d4e removed before sharing.",
    ai:
      "Prompt draft: Analyze vendor CNPJ 12.345.678/0001-99 invoice lag for contact ops@varejo-demo.test using webhook key ghp_demoTokenExample9876543210 on internal DB 192.168.40.22.",
    config:
      "DEBUG 2026-11-23T14:02Z gateway=172.16.12.8 auth='Bearer demo_jwt_secret_payload_abc123' owner=carlos.lima@exemplo-ficticio.org cpf=987.654.321-00",
  },
  pt: {
    ticket:
      "Chamado #8421 (Loja Fictícia 12): Usuária Maria Silva, CPF 123.456.789-01, e-mail maria.silva@exemplo-ficticio.com.br relatou erro de impressora no host 10.24.8.15. Token sk_live_demo_9f8a7b6c5d4e barrado antes do envio.",
    ai:
      "Rascunho de prompt: Analisar atraso do fornecedor CNPJ 12.345.678/0001-99 (contato ops@varejo-demo.test) usando chave ghp_demoTokenExample9876543210 no banco interno 192.168.40.22.",
    config:
      "DEBUG 2026-11-23T14:02Z gateway=172.16.12.8 auth='Bearer demo_jwt_secret_payload_abc123' resp=carlos.lima@exemplo-ficticio.org cpf=987.654.321-00",
  },
};

const DPO_STAGES = {
  en: [
    {
      tag: "LGPD Arts. 37 & 50 · GDPR Art. 30",
      title: "01. Data Discovery & Record of Processing Activities (RoPA)",
      summary:
        "Complete mapping of personal and sensitive data flows across retail POS, ERP modules, HR/back-office databases, physical archives, and third-party portals.",
      deliverables: [
        "Structured RoPA inventory linking business processes, tables, retention windows, and owners.",
        "Segregation between standard commercial records and sensitive/clinical datasets.",
        "Physical archive audit and certified document disposal procedures.",
      ],
    },
    {
      tag: "LGPD Arts. 7 & 11 · Accountability",
      title: "02. Legal Bases, Vendor DPAs & DPIA / RIPD",
      summary:
        "Alignment of every processing activity with valid legal hypotheses, Data Protection Impact Assessments (RIPD), and contractual Data Processing Agreements.",
      deliverables: [
        "Written DPIA / RIPD documents evaluating operational risks and technical mitigations.",
        "Privacy Notices and vendor DPA clauses defining clear Controller/Processor boundaries.",
        "Regulatory readiness aligned with ANPD guidelines and Privacy by Design.",
      ],
    },
    {
      tag: "LGPD Art. 18 · Data Integrity",
      title: "03. Data Subject Rights & Irreversible Anonymization",
      summary:
        "Operational workflows for access, correction, portability, and deletion requests without breaking relational foreign keys or fiscal audit logs.",
      deliverables: [
        "Art. 18 SLA workflows connecting Legal/DPO triage with engineering execution.",
        "Irreversible relational anonymization patterns preserving aggregate KPIs and audit trails.",
        "Sanitized synthetic datasets replacing real customer data in QA and staging.",
      ],
    },
    {
      tag: "OWASP Top 10 · Least-Privilege AD",
      title: "04. Offensive AppSec Remediation & Access Hardening",
      summary:
        "Hands-on technical security controls bridging DPO compliance with infrastructure: web pentesting, temporary vendor access, and email/endpoint defense.",
      deliverables: [
        "Web penetration tests mapping 16 critical/medium OWASP Top 10 vulnerabilities with remediation plans.",
        "Ticket-validated temporary vendor access using AD logonHours, RDS logoff, and encrypted VPN tunnels.",
        "Hardening stack: least-privilege RBAC, DKIM/SPF/DMARC, ClamAV, and digital forensics.",
      ],
    },
    {
      tag: "Zero-Trust AI · APDADOS® Since 2021",
      title: "05. Zero-Trust AI DLP & Voluntary Security Committee",
      summary:
        "Practical safeguards allowing teams to use modern AI tools safely while contributing actively to the national privacy and cybersecurity community.",
      deliverables: [
        "Deterministic & Vision-assisted DLP gates blocking CPF/CNPJ, tokens, and internal IPs before external AI calls.",
        "Modular corporate awareness training on privacy, secure disposal, and responsible AI.",
        "Active Volunteer Security Committee Member at APDADOS® contributing since July 2021.",
      ],
    },
  ],
  pt: [
    {
      tag: "LGPD Arts. 37 e 50 · GDPR Art. 30",
      title: "01. Mapeamento de Fluxos & Inventário RoPA",
      summary:
        "Levantamento completo do ciclo de vida de dados pessoais e sensíveis entre sistemas de PDV, módulos ERP, retaguarda, portais web, integrações e arquivos físicos.",
      deliverables: [
        "Inventário RoPA estruturado conectando processos de negócio, tabelas, prazos de retenção e responsáveis.",
        "Segregação lógica entre cadastros comerciais comuns e bases sensíveis.",
        "Auditoria de arquivo físico com fluxos certificados de eliminação e descarte seguro.",
      ],
    },
    {
      tag: "LGPD Arts. 7 e 11 · Prestação de Contas",
      title: "02. Bases Legais, DPAs com Fornecedores & DPIA / RIPD",
      summary:
        "Enquadramento de cada tratamento em hipóteses legais válidas, elaboração de Relatórios de Impacto (RIPD) e revisão contratual de proteção de dados.",
      deliverables: [
        "Elaboração de DPIA / RIPD avaliando riscos operacionais, probabilidades e salvaguardas técnicas.",
        "Redação de Avisos de Privacidade e cláusulas DPA definindo papéis de Controlador e Operador.",
        "Prontidão regulatória alinhada às diretrizes da ANPD e Privacy by Design.",
      ],
    },
    {
      tag: "LGPD Art. 18 · Integridade Relacional",
      title: "03. Direitos dos Titulares & Anonimização Irreversível",
      summary:
        "Atendimento estruturado a solicitações de acesso, correção e eliminação de dados sem quebrar integridade referencial de bancos ou trilhas fiscais.",
      deliverables: [
        "Fluxos operacionais do Art. 18 conectando triagem do DPO e execução técnica auditável.",
        "Padrões de anonimização relacional irreversível preservando KPIs históricos e auditoria.",
        "Massas de dados sintéticas substituindo dados reais em homologação e testes.",
      ],
    },
    {
      tag: "OWASP Top 10 · Active Directory RBAC",
      title: "04. Remediação OWASP AppSec & Hardening de Acessos",
      summary:
        "Controles técnicos reais unindo governança de DPO com operação de infraestrutura: testes ofensivos, acessos temporários auditáveis e defesa de e-mail.",
      deliverables: [
        "Testes de intrusão web mapeando 16 vulnerabilidades críticas e médias (OWASP Top 10) com planos de correção.",
        "Acessos temporários de terceiros vinculados a chamado com AD logonHours, logoff RDS e VPN criptografada.",
        "Hardening prático com RBAC mínimo privilégio, DKIM/SPF/DMARC, ClamAV e perícia forense digital.",
      ],
    },
    {
      tag: "IA Zero-Trust · APDADOS® Desde 2021",
      title: "05. DLP para IA Generativa & Comitê de Segurança APDADOS®",
      summary:
        "Barreiras técnicas para uso seguro de IA no dia a dia corporativo somadas à atuação voluntária contínua na comunidade nacional de privacidade.",
      deliverables: [
        "Filtros DLP determinísticos e por Visão barrando CPF/CNPJ, chaves de API e IPs internos antes de prompts externos.",
        "Trilhas práticas de conscientização corporativa sobre privacidade, descarte seguro e IA responsável.",
        "Atuação ativa como Membro do Comitê de Segurança da APDADOS® desde julho de 2021.",
      ],
    },
  ],
};

const DEMO_VIDEOS = [
  {
    id: "01",
    mp4: "assets/videos/01-pii-screenshot-guard.mp4",
    poster: "assets/videos/posters/01-pii-screenshot-guard.jpg",
    duration: "0:30",
    href: "https://github.com/gavicoding/pii-screenshot-guard",
    external: true,
    en: {
      tag: "Python · OCR · Zero-Trust DLP",
      title: "pii-screenshot-guard",
      desc: "OCR scanning, deterministic CPF/CNPJ/Luhn/secret masking, and GitHub PR CI blocking with zero external dependencies.",
    },
    pt: {
      tag: "Python · OCR · DLP Zero-Trust",
      title: "pii-screenshot-guard",
      desc: "Leitura OCR, mascaramento determinístico de CPF/CNPJ/cartões/segredos e bloqueio automático em PRs no GitHub.",
    },
  },
  {
    id: "02",
    mp4: "assets/videos/02-queue-health-watchdog.mp4",
    poster: "assets/videos/posters/02-queue-health-watchdog.jpg",
    duration: "0:30",
    href: "https://github.com/gavicoding/queue-health-watchdog",
    external: true,
    en: {
      tag: "TypeScript · Read-Only · Docker",
      title: "queue-health-watchdog",
      desc: "Read-only SQL snapshot heuristics separating healthy HIGH_LOAD bursts from STALLED replication queues without alert fatigue.",
    },
    pt: {
      tag: "TypeScript · Somente Leitura · Docker",
      title: "queue-health-watchdog",
      desc: "Heurística somente leitura diferenciando picos normais (HIGH_LOAD) de filas travadas (STALLED) com cooldown anti-fadiga.",
    },
  },
  {
    id: "03",
    mp4: "assets/videos/03-infra-ops-playbook.mp4",
    poster: "assets/videos/posters/03-infra-ops-playbook.jpg",
    duration: "0:30",
    href: "https://github.com/gavicoding/infra-ops-playbook",
    external: true,
    en: {
      tag: "PowerShell · Bash · Nginx mTLS",
      title: "infra-ops-playbook",
      desc: "400 Windows endpoints across 80 branches, RSA-3072 signed fleet agents, language-agnostic SID ACL repair, and Postgres backups.",
    },
    pt: {
      tag: "PowerShell · Bash · Nginx mTLS",
      title: "infra-ops-playbook",
      desc: "400 estações em 80 filiais, agente assinado RSA-3072 sobre mTLS, reparo de ACL por SID e backup Postgres em container.",
    },
  },
  {
    id: "04",
    mp4: "assets/videos/04-tsql-retail-ops-analytics.mp4",
    poster: "assets/videos/posters/04-tsql-retail-ops-analytics.jpg",
    duration: "0:30",
    href: "https://github.com/gavicoding/tsql-retail-ops-analytics",
    external: true,
    en: {
      tag: "T-SQL · SQL Server · DBA",
      title: "tsql-retail-ops-analytics",
      desc: "ROW_NUMBER() deduplication, single-pass SUM(CASE) aggregation, sys.dm_tran_locks wait capture, and least-privilege RBAC.",
    },
    pt: {
      tag: "T-SQL · SQL Server · DBA",
      title: "tsql-retail-ops-analytics",
      desc: "Deduplicação com ROW_NUMBER(), agregação em passada única, diagnóstico sys.dm_tran_locks e acesso mínimo privilégio.",
    },
  },
  {
    id: "05",
    mp4: "assets/videos/05-otimizapc.mp4",
    poster: "assets/videos/posters/05-otimizapc.jpg",
    duration: "0:30",
    href: "https://github.com/gavicoding/OtimizaPC",
    external: true,
    en: {
      tag: "C# · .NET 8 · WPF MVVM",
      title: "OtimizaPC",
      desc: "Native dark-mode Windows optimizer with one-click Restore Points, SHA-256 duplicate finder, explicit previews, and S.M.A.R.T. health.",
    },
    pt: {
      tag: "C# · .NET 8 · WPF MVVM",
      title: "OtimizaPC",
      desc: "Otimizador Windows nativo com Ponto de Restauração em 1 clique, busca por hash SHA-256, prévia explícita e leitura S.M.A.R.T.",
    },
  },
  {
    id: "06",
    mp4: "assets/videos/06-thunderbird-outlook.mp4",
    poster: "assets/videos/posters/06-thunderbird-outlook.jpg",
    duration: "0:30",
    href: "https://github.com/gavicoding/Thunderbird-Outlook",
    external: true,
    en: {
      tag: "Python · COM/MAPI · vCard 3.0",
      title: "Thunderbird-Outlook",
      desc: "Bidirectional email & contact migrator preserving folder trees, original received timestamps, attachments, and \\\\?\\ long paths.",
    },
    pt: {
      tag: "Python · COM/MAPI · vCard 3.0",
      title: "Thunderbird-Outlook",
      desc: "Migrador bidirecional preservando árvores de pastas, datas originais de recebimento, anexos, caminhos longos e vCard 3.0.",
    },
  },
  {
    id: "07",
    mp4: "assets/videos/07-governanca-dpo.mp4",
    poster: "assets/videos/posters/07-governanca-dpo.jpg",
    duration: "0:32",
    href: "#dpo",
    external: false,
    en: {
      tag: "LGPD / GDPR · OWASP · APDADOS®",
      title: "DPO Governance & Cybersecurity in Production",
      desc: "RoPA & DPIA, Art. 18 irreversible anonymization, 16 OWASP Top 10 findings remediated, AD logonHours, Zero-Trust AI DLP & APDADOS®.",
    },
    pt: {
      tag: "LGPD / GDPR · OWASP · APDADOS®",
      title: "Governança DPO & Cibersegurança em Produção",
      desc: "RoPA e RIPD, anonimização do Art. 18, 16 falhas OWASP remediadas, AD logonHours, barreira DLP para IA e Comitê APDADOS®.",
    },
  },
];

function getInitialLang() {
  try {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "en" || saved === "pt") {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions.
  }
  if (typeof navigator !== "undefined" && navigator.language && navigator.language.toLowerCase().startsWith("pt")) {
    return "pt";
  }
  return "en";
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("portfolio_theme");
    if (saved === "dark" || saved === "light") {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions.
  }
  return "dark";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) {
    return;
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

document.addEventListener("DOMContentLoaded", () => {
  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let currentLang = getInitialLang();
  let currentTheme = getInitialTheme();
  let currentDpoStep = 0;
  let currentDemoId = "01";
  let currentPreset = "ticket";
  let topoMode = "healthy";
  let topoQueueDepth = 14;
  let termTypingTimer = null;

  function applyTheme(theme) {
    currentTheme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", String(currentTheme === "light"));
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", currentTheme === "light" ? "#fafafa" : "#09090b");
    }
    try {
      localStorage.setItem("portfolio_theme", currentTheme);
    } catch {
      // Ignore storage access restrictions.
    }
  }

  function selectDemo(demoId, autoplay = false) {
    const item = DEMO_VIDEOS.find((d) => d.id === demoId) || DEMO_VIDEOS[0];
    currentDemoId = item.id;
    const copy = item[currentLang] || item.en;

    const video = document.getElementById("demo-player");
    const source = document.getElementById("demo-source");
    const tagEl = document.getElementById("demo-active-tag");
    const durEl = document.getElementById("demo-active-duration");
    const titleEl = document.getElementById("demo-active-title");
    const descEl = document.getElementById("demo-active-desc");
    const linkEl = document.getElementById("demo-active-link");

    if (video) {
      video.setAttribute("poster", item.poster);
    }
    if (source && video && source.getAttribute("src") !== item.mp4) {
      source.setAttribute("src", item.mp4);
      video.load();
    }
    if (tagEl) tagEl.textContent = copy.tag;
    if (durEl) durEl.textContent = item.duration;
    if (titleEl) titleEl.textContent = copy.title;
    if (descEl) descEl.textContent = copy.desc;
    if (linkEl) {
      linkEl.setAttribute("href", item.href);
      if (item.external) {
        linkEl.setAttribute("target", "_blank");
        linkEl.setAttribute("rel", "noopener noreferrer");
      } else {
        linkEl.removeAttribute("target");
        linkEl.removeAttribute("rel");
      }
    }

    document.querySelectorAll(".demo-item[data-demo-id]").forEach((btn) => {
      const active = btn.getAttribute("data-demo-id") === item.id;
      btn.classList.toggle("is-active", active);
      if (active) {
        btn.setAttribute("aria-current", "true");
      } else {
        btn.removeAttribute("aria-current");
      }
    });

    if (autoplay && video) {
      video.play().catch(() => {});
    }
  }

  function renderDpoStage(stepIndex) {
    const stages = DPO_STAGES[currentLang] || DPO_STAGES.en;
    const idx = Math.max(0, Math.min(stepIndex, stages.length - 1));
    currentDpoStep = idx;
    const stage = stages[idx];

    const tagEl = document.getElementById("dpo-detail-tag");
    const titleEl = document.getElementById("dpo-detail-title");
    const summaryEl = document.getElementById("dpo-detail-summary");
    const listEl = document.getElementById("dpo-detail-deliverables");

    if (tagEl) tagEl.textContent = stage.tag;
    if (titleEl) titleEl.textContent = stage.title;
    if (summaryEl) summaryEl.textContent = stage.summary;
    if (listEl) {
      listEl.replaceChildren();
      stage.deliverables.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        listEl.appendChild(li);
      });
    }

    document.querySelectorAll(".dpo-step-btn").forEach((btn, i) => {
      const active = i === idx;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", String(active));
    });
  }

  function renderTerminalLines(lines) {
    const out = document.getElementById("terminal-output");
    if (!out) return;
    if (termTypingTimer) {
      window.clearInterval(termTypingTimer);
      termTypingTimer = null;
    }

    const fullText = lines.join("\n");
    if (prefersReduced) {
      out.textContent = fullText;
      return;
    }

    out.textContent = "";
    let pos = 0;
    const step = 4;
    termTypingTimer = window.setInterval(() => {
      pos = Math.min(fullText.length, pos + step);
      out.textContent = fullText.slice(0, pos);
      if (pos >= fullText.length) {
        window.clearInterval(termTypingTimer);
        termTypingTimer = null;
        const cursor = document.createElement("span");
        cursor.className = "term-cursor";
        cursor.setAttribute("aria-hidden", "true");
        out.appendChild(cursor);
      }
    }, 14);
  }

  const TERMINAL_ALIASES = {
    ajuda: "help",
    "?": "help",
    sobre: "whoami",
    quem: "whoami",
    lgpd: "dpo",
    privacidade: "dpo",
    redes: "infra",
    ad: "infra",
    projetos: "projects",
    ls: "projects",
    tecnologias: "stack",
    contato: "contact",
    email: "contact",
    limpar: "clear",
    cls: "clear",
  };

  function runTerminalCommand(rawCmd) {
    const cleaned = (rawCmd || "").trim().replace(/^\$\s*/, "").toLowerCase();
    const baseToken = cleaned.split(/\s+/)[0] || "help";
    const cmd = TERMINAL_ALIASES[baseToken] || baseToken;
    const out = document.getElementById("terminal-output");

    if (cmd === "clear") {
      if (termTypingTimer) {
        window.clearInterval(termTypingTimer);
        termTypingTimer = null;
      }
      if (out) out.textContent = "";
      document.querySelectorAll(".term-chip").forEach((chip) => chip.classList.remove("is-active"));
      return;
    }

    const dict = TERMINAL_DATA[currentLang] || TERMINAL_DATA.en;
    const lines = Object.prototype.hasOwnProperty.call(dict, cmd)
      ? dict[cmd]
      : dict.unknown(cleaned);
    renderTerminalLines(lines);

    document.querySelectorAll(".term-chip").forEach((chip) => {
      chip.classList.toggle("is-active", chip.getAttribute("data-cmd") === cmd);
    });
  }

  function scanAndRenderDlp(text) {
    const out = document.getElementById("dlp-output");
    const piiEl = document.getElementById("dlp-count-pii");
    const secEl = document.getElementById("dlp-count-secrets");
    const ipEl = document.getElementById("dlp-count-ips");
    const gateEl = document.getElementById("dlp-gate-status");
    if (!out) return;

    const rules = [
      {
        kind: "pii",
        label: "[CPF_MASKED]",
        cls: "mask-pii",
        rx: /\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g,
      },
      {
        kind: "pii",
        label: "[CNPJ_MASKED]",
        cls: "mask-pii",
        rx: /\b\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}\b/g,
      },
      {
        kind: "pii",
        label: "[EMAIL_MASKED]",
        cls: "mask-pii",
        rx: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g,
      },
      {
        kind: "secret",
        label: "[SECRET_MASKED]",
        cls: "mask-secret",
        rx: /\b(?:sk_live_[A-Za-z0-9_]+|ghp_[A-Za-z0-9_]+|AKIA[0-9A-Z]{16}|Bearer\s+[A-Za-z0-9._-]+|demo_jwt_[A-Za-z0-9_]+)\b/g,
      },
      {
        kind: "ip",
        label: "[INTERNAL_IP_MASKED]",
        cls: "mask-ip",
        rx: /\b(?:10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})\b/g,
      },
    ];

    const matches = [];
    rules.forEach((rule) => {
      rule.rx.lastIndex = 0;
      let m;
      while ((m = rule.rx.exec(text)) !== null) {
        matches.push({
          start: m.index,
          end: m.index + m[0].length,
          kind: rule.kind,
          label: rule.label,
          cls: rule.cls,
        });
      }
    });

    matches.sort((a, b) => a.start - b.start || b.end - a.end);
    const filtered = [];
    let cursor = 0;
    for (const item of matches) {
      if (item.start >= cursor) {
        filtered.push(item);
        cursor = item.end;
      }
    }

    const counts = { pii: 0, secret: 0, ip: 0 };
    out.replaceChildren();
    let pos = 0;
    for (const item of filtered) {
      if (item.start > pos) {
        out.appendChild(document.createTextNode(text.slice(pos, item.start)));
      }
      const span = document.createElement("span");
      span.className = `mask-token ${item.cls}`;
      span.textContent = item.label;
      out.appendChild(span);
      counts[item.kind] += 1;
      pos = item.end;
    }
    if (pos < text.length) {
      out.appendChild(document.createTextNode(text.slice(pos)));
    }

    const total = counts.pii + counts.secret + counts.ip;
    if (piiEl) piiEl.textContent = String(counts.pii);
    if (secEl) secEl.textContent = String(counts.secret);
    if (ipEl) ipEl.textContent = String(counts.ip);
    if (gateEl) {
      if (total > 0) {
        gateEl.textContent =
          currentLang === "pt"
            ? `BLOQUEADO (${total} REDIGIDOS)`
            : `REDACTED (${total} FINDINGS)`;
        gateEl.classList.add("is-warn");
      } else {
        gateEl.textContent = currentLang === "pt" ? "LIMPO: LIBERADO" : "GATE: CLEAN";
        gateEl.classList.remove("is-warn");
      }
    }
  }

  function updateTopologyDisplay() {
    const svg = document.getElementById("topo-svg");
    const badge = document.getElementById("topo-alert-state");
    const depthEl = document.getElementById("topo-queue-depth");
    const trendEl = document.getElementById("topo-trend");
    const mtlsEl = document.getElementById("topo-mtls");
    const policyEl = document.getElementById("topo-policy");
    const logEl = document.getElementById("topo-log");

    if (svg) {
      svg.classList.remove("mode-healthy", "mode-high-load", "mode-stalled");
      svg.classList.add(
        topoMode === "stalled"
          ? "mode-stalled"
          : topoMode === "high_load"
            ? "mode-high-load"
            : "mode-healthy",
      );
    }

    if (badge) {
      badge.classList.remove("is-warn", "is-danger");
      if (topoMode === "high_load") {
        badge.textContent = "HIGH_LOAD";
        badge.classList.add("is-warn");
      } else if (topoMode === "stalled") {
        badge.textContent = "STALLED";
        badge.classList.add("is-danger");
      } else {
        badge.textContent = "HEALTHY";
      }
    }

    if (depthEl) depthEl.textContent = `${topoQueueDepth} msgs`;
    if (trendEl) {
      trendEl.textContent =
        topoMode === "stalled"
          ? "+42 / tick"
          : topoMode === "high_load"
            ? "-28 / tick"
            : "-6 / tick";
    }
    if (mtlsEl) {
      mtlsEl.textContent =
        topoMode === "stalled" ? "14.2s RETRY" : topoMode === "high_load" ? "4.6s ACK" : "3.8s ACK";
    }
    if (policyEl) {
      policyEl.textContent =
        topoMode === "stalled"
          ? currentLang === "pt"
            ? "ALERTA + RUNBOOK"
            : "ALERT + RUNBOOK"
          : topoMode === "high_load"
            ? currentLang === "pt"
              ? "SUPRIMIDO (DRENANDO)"
              : "SUPPRESSED (DRAINING)"
            : currentLang === "pt"
              ? "SILENCIOSO"
              : "SILENT";
    }

    if (logEl) {
      if (currentLang === "pt") {
        logEl.textContent =
          topoMode === "stalled"
            ? `[WATCHDOG] Fila=${topoQueueDepth} | Tendência estacionada por 3 snapshots -> Estado=STALLED\n[AÇÃO] Alerta enviado ao ITSM com cooldown ativo. Clique em "Executar Auto-Recuperação".`
            : topoMode === "high_load"
              ? `[WATCHDOG] Fila=${topoQueueDepth} | Volume alto porém drenando (-28/tick) -> Estado=HIGH_LOAD\n[AÇÃO] Falso alarme evitado; mTLS mantendo telemetria normal nas ~80 filiais.`
              : `[WATCHDOG] Fila=${topoQueueDepth} | Replicação estável e agente Windows mTLS ativo -> Estado=HEALTHY\n[AÇÃO] Nenhuma intervenção necessária; snapshots somente leitura em execução.`;
      } else {
        logEl.textContent =
          topoMode === "stalled"
            ? `[WATCHDOG] Queue=${topoQueueDepth} | Stagnant trend across 3 snapshots -> State=STALLED\n[ACTION] Dispatched throttled ITSM alert with runbook. Click "Run Auto-Recovery".`
            : topoMode === "high_load"
              ? `[WATCHDOG] Queue=${topoQueueDepth} | Burst active but draining (-28/tick) -> State=HIGH_LOAD\n[ACTION] False alarm suppressed; WebSockets + mTLS telemetry green across ~80 branches.`
              : `[WATCHDOG] Queue=${topoQueueDepth} | Replication steady & Windows mTLS fleet online -> State=HEALTHY\n[ACTION] Zero intervention needed; read-only polling snapshots running.`;
      }
    }

    document.querySelectorAll("[data-topo-mode]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-topo-mode") === topoMode);
    });
  }

  function applyLanguage(lang) {
    currentLang = lang === "pt" ? "pt" : "en";
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    const langLabel = document.getElementById("lang-label");
    if (langLabel) {
      langLabel.textContent = currentLang === "en" ? "PT-BR" : "EN";
    }

    try {
      localStorage.setItem("portfolio_lang", currentLang);
    } catch {
      // Ignore storage access restrictions.
    }

    const dlpInput = document.getElementById("dlp-input");
    if (dlpInput) {
      const presetText = (DLP_PRESETS[currentLang] || DLP_PRESETS.en)[currentPreset];
      if (!dlpInput.dataset.dirty) {
        dlpInput.value = presetText;
      }
      scanAndRenderDlp(dlpInput.value);
    }

    renderDpoStage(currentDpoStep);
    selectDemo(currentDemoId, false);
    updateTopologyDisplay();
    runTerminalCommand("whoami");
  }

  applyTheme(currentTheme);
  applyLanguage(currentLang);

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "pt" : "en");
    });
  }

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Terminal events
  document.querySelectorAll(".term-chip[data-cmd]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd") || "whoami";
      runTerminalCommand(cmd);
    });
  });

  const termForm = document.getElementById("terminal-form");
  const termInput = document.getElementById("terminal-input");
  if (termForm && termInput) {
    termForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = termInput.value.trim();
      runTerminalCommand(val || "help");
      termInput.value = "";
      termInput.focus();
    });
  }

  // DLP events
  const dlpInput = document.getElementById("dlp-input");
  if (dlpInput) {
    dlpInput.addEventListener("input", () => {
      dlpInput.dataset.dirty = "1";
      scanAndRenderDlp(dlpInput.value);
    });
  }

  document.querySelectorAll("[data-dlp-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPreset = btn.getAttribute("data-dlp-preset") || "ticket";
      document.querySelectorAll("[data-dlp-preset]").forEach((b) => {
        b.classList.toggle("is-active", b === btn);
      });
      if (dlpInput) {
        delete dlpInput.dataset.dirty;
        dlpInput.value = (DLP_PRESETS[currentLang] || DLP_PRESETS.en)[currentPreset];
        scanAndRenderDlp(dlpInput.value);
      }
    });
  });

  // Topology Watchdog events & timer
  document.querySelectorAll("[data-topo-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-topo-mode") || "healthy";
      topoMode = mode;
      topoQueueDepth = mode === "stalled" ? 412 : mode === "high_load" ? 186 : 14;
      updateTopologyDisplay();
    });
  });

  const recoverBtn = document.getElementById("topo-recover-btn");
  if (recoverBtn) {
    recoverBtn.addEventListener("click", () => {
      topoMode = "high_load";
      topoQueueDepth = Math.max(48, Math.round(topoQueueDepth * 0.4));
      updateTopologyDisplay();
      window.setTimeout(() => {
        topoMode = "healthy";
        topoQueueDepth = 9;
        updateTopologyDisplay();
      }, 900);
    });
  }

  window.setInterval(() => {
    if (topoMode === "healthy") {
      topoQueueDepth = 8 + Math.floor(Math.random() * 11);
    } else if (topoMode === "high_load") {
      topoQueueDepth = Math.max(24, topoQueueDepth - 14);
      if (topoQueueDepth <= 28) {
        topoMode = "healthy";
      }
    } else if (topoMode === "stalled") {
      topoQueueDepth = Math.min(999, topoQueueDepth + 12);
    }
    updateTopologyDisplay();
  }, 2400);

  // DPO Stepper events
  document.querySelectorAll(".dpo-step-btn[data-dpo-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const step = Number(btn.getAttribute("data-dpo-step") || "0");
      renderDpoStage(step);
    });
  });

  // Video Cinema Showcase events
  document.querySelectorAll(".demo-item[data-demo-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-demo-id") || "01";
      selectDemo(id, true);
    });
  });

  document.querySelectorAll("[data-open-demo]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-open-demo") || "01";
      selectDemo(id, true);
      const showcase = document.getElementById("demos");
      if (showcase) {
        showcase.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      }
    });
  });

  // Project filters
  const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
  const projectCards = document.querySelectorAll(".project-card[data-category]");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-filter") || "all";
      filterButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      projectCards.forEach((card) => {
        const match = target === "all" || card.getAttribute("data-category") === target;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });

  // Copy email toast
  document.querySelectorAll(".copy-email-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        try {
          await navigator.clipboard.writeText(EMAIL_ADDRESS);
          showToast(dict.toast_copied);
          return;
        } catch {
          // Fall back to visible toast with address.
        }
      }
      showToast(dict.toast_copy_fallback);
    });
  });

  // Scroll progress bar
  const progressBar = document.getElementById("scroll-progress");
  function updateProgress() {
    if (!progressBar) return;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0;
    progressBar.style.width = `${pct.toFixed(1)}%`;
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Spotlight cursor glow
  if (!prefersReduced) {
    document.querySelectorAll(".spotlight-card").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    });
  }

  // Active nav highlight & reveal animations
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReduced || typeof IntersectionObserver === "undefined") {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    revealEls.forEach((el) => revealObs.observe(el));

    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((a) => {
              a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((s) => navObs.observe(s));
  }
});
