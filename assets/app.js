const EMAIL_ADDRESS = "gavicoding@gmail.com";

const TRANSLATIONS = {
  en: {
    skip_link: "Skip to main content",
    nav_lab: "Live Lab",
    nav_demos: "Video Demos",
    nav_dpo: "DPO & LGPD",
    nav_projects: "Projects",
    nav_sql: "SQL",
    sql_eyebrow: "SQL SERVER IN PRODUCTION",
    sql_title: "SQL Casebook",
    sql_desc: "Seven real SQL Server fixes, rebuilt with generic names and fictional data. Pick one to see the pain, the fix, the result and the code before and after. Every \"after\" script runs on a real SQL Server 2022 in CI.",
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
      "LGPD/GDPR governance, APDADOS® Security Committee & 16 OWASP Top 10 findings mapped with fix plans",
    lab_eyebrow: "LIVE BROWSER SANDBOX",
    lab_title: "Interactive Engineering Lab",
    lab_desc:
      "Three playable simulations in plain HTML5, CSS3 and JavaScript (no frameworks): Zero-Trust DLP redaction, queue health heuristics and a daily invoice reconciliation pass. All data is fictional.",
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
    recon_tag: "Case study · E-invoice hub · Fictional data",
    recon_title: "Daily Invoice Reconciliation Pass",
    recon_desc: "Each square is one day of invoices. The pass lists only the invoice keys of each day on the fiscal platform, compares them with the local database and downloads full data only for what is missing. Press Run, or inject gaps first.",
    recon_btn_run: "Run daily pass",
    recon_btn_gaps: "Inject random gaps",
    recon_btn_reset: "Reset",
    recon_stat_days: "Days checked",
    recon_stat_total: "Keys compared",
    recon_stat_missing: "Missing found",
    recon_stat_fixed: "Recovered",
    recon_see_case: "See the real case study",
    cmdk_hint: "Ctrl K",
    demos_eyebrow: "ANIMATED ENGINEERING SHOWCASE (1080P60)",
    demos_title: "Project & Governance Video Demos",
    demos_desc:
      "Nine deterministic 30s studio demos illustrating architecture, code execution, and DPO compliance flows using 100% synthetic data.",
    demo_synthetic_badge: "DEMO · 100% SYNTHETIC",
    demo_open_project: "Open Project",
    demo_07_nav_title: "07 · DPO & LGPD Governance",
    demo_08_nav_title: "08 · E-Invoice Intake Hub",
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
      "Minicurso LGPD (APDADOS®) · Curso LGPD 4.0 (Mariana Toledo) | Portuguese (native) & technical English (reading & documentation)",
    dpo_pill_1: "RoPA & DPIA / RIPD",
    dpo_pill_2: "Vendor DPAs & Notices",
    dpo_pill_3: "16 OWASP Flaws Mapped",
    dpo_pill_4: "AD logonHours & RBAC",
    projects_eyebrow: "OPEN-SOURCE & CI VERIFIED",
    projects_title: "Featured Open-Source Projects",
    projects_desc:
      "Seven public repositories built with automated CI checks in GitHub Actions, bilingual English/Portuguese documentation, and zero confidential company data.",
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
      "Production-proven T-SQL patterns on a synthetic schema, executed on a real SQL Server 2022 in CI: catch-all reports with RECOMPILE, idempotent batch ingest, incremental MERGE, ROW_NUMBER() dedupe, Extended Events, lock diagnostics and least-privilege RBAC.",
    proj_infra_desc:
      "Hybrid Linux + Windows/AD operations playbook featuring RSA-3072 signed PowerShell agents, language-agnostic SID ACL recovery, Postgres Docker backups, Nginx mTLS templates, and 24 sanitized troubleshooting cases.",
    proj_otimizapc_desc:
      "Dark-mode Windows system optimizer built with strict deletion previews, one-click Restore Points, multi-profile junk cleanup, content-hash duplicate finder, 90-day orphan residue scanner, S.M.A.R.T. & instant disk analyzer.",
    proj_tb_desc:
      "Bidirectional Windows email & address-book migrator preserving folder trees, original received timestamps (MSGFLAG_UNSENT / MAPI), senders, attachments, and \\\\?\\ long file paths.",
    proj_nfe_desc:
      "Validate, inspect, organize and reconcile Brazilian e-invoice (NF-e/NFC-e) XML files: mod-11 access key check and breakdown, namespace-agnostic XML reader, dry-run YYYY/MM organizer that never overwrites, and a folder vs. key-list reconciliation with CI-friendly exit codes.",
    link_repo: "Repository",
    link_docs: "Live Docs",
    exp_eyebrow: "PRODUCTION IMPACT & TIMELINE",
    impact_title: "Production Case Studies & Career Timeline",
    impact_desc:
      "Projects running in production, told as the pain, what I built and the result. Names, systems and data are left out on purpose; the numbers are real.",
    case_pain: "THE PAIN",
    case_solution: "WHAT I BUILT",
    case_result: "RESULT",
    c0_tag:
      "Python · SQL Server · OData API · IMAP · Desktop 24/7",
    c0_badge:
      "IN PRODUCTION",
    c0_title:
      "E-Invoice (NF-e) Intake Hub & Daily Reconciliation",
    c0_pain:
      "Supplier invoice XMLs arrived by email, invoices stalled in the ERP import queue, and a separate manual tool made someone pick date ranges and re-scan 40k+ invoices a month, so gaps stayed open until the next manual run.",
    c0_built:
      "One always-on desktop hub: IMAP intake of XMLs, automatic re-queue of stalled invoices in the ERP, incremental sync from the fiscal platform's OData API, key-only daily reconciliation, certificate expiry alerts, and a watchdog that restarts any hung cycle.",
    c0_result:
      "Manual monthly sweeps became 10-minute cycles of ~4s each, plus one daily pass that checks every day since a set start date (~12s per day) and fetches only what is missing. Also fixed a 3-hour timezone gap and a field the old tool always left empty.",
    c1_tag:
      "Next.js · SQL · SVG · Observability",
    c1_title:
      "Operations Dashboard & Live Infrastructure Map",
    c1_pain:
      "The ops dashboard fired 85 queries per page load (one per site) and took 6.8s to open, while alert emails passed 80 a day.",
    c1_built:
      "Single-query SQL aggregation, dynamic Server Components, an animated SVG map of service dependencies and hourly batched HTML alerts.",
    c1_result:
      "Page response (TTFB) dropped from 6.8s to 0.1s and alert email went from 80+ a day to hourly digests.",
    c2_tag:
      "Web · Leaflet/OSM · WCAG",
    c2_title:
      "Institutional Website & Location Finder",
    c2_pain:
      "Visitors had no easy way to find the nearest location or what it offers, and several pages broke on phones and failed contrast checks.",
    c2_built:
      "A 7-page institutional site with a Leaflet + OpenStreetMap locator filtered by city and service, auto-sized embeds and a mobile-first layout tested at 390px.",
    c2_result:
      "Zero WCAG contrast failures in the automated audit and a locator that works on any screen.",
    c3_tag:
      "Windows · WebSockets + mTLS · PowerShell",
    c3_title:
      "Endpoint Fleet Control Plane & ACL Self-Healing",
    c3_pain:
      "Hundreds of Windows endpoints across ~80 branches needed remote actions; after a reboot agents took ~60s to come back, and a broken folder permission could lock them out.",
    c3_built:
      "A Windows service agent over WebSockets + mTLS with wave rollouts, a kill switch, RSA-signed auto-updates and SID-based permission repair that works in any OS language.",
    c3_result:
      "Reconnection after restart went from 60s to 3-7s, and only correctly signed updates ever install.",
    c4_tag:
      "Automation · Retry Logic · Vendor Tickets",
    c4_title:
      "Offline Sales Invoice Retransmission",
    c4_pain:
      "When point-of-sale units issued invoices in offline contingency mode, someone had to retransmit them by hand and open vendor tickets for each failure.",
    c4_built:
      "A continuous retransmission robot with retry safeguards, a status page and automatic vendor ticket creation during business hours.",
    c4_result:
      "Contingency backlogs clear without manual work, and failures reach the vendor as tickets on their own.",
    c5_tag:
      "Python · ITSM API · NVR/DVR",
    c5_title:
      "CCTV Footage Request Orchestrator",
    c5_pain:
      "Every footage request from a site meant someone logging into the right recorder by hand, among 83 devices from different brands.",
    c5_built:
      "An orchestrator that reads the request from the help desk, connects to the right NVR/DVR, retrieves the footage, retries on failure and updates the ticket with notifications.",
    c5_result:
      "Footage requests flow end to end without manual logins, and recorders with wrong credentials are flagged for fixing.",
    c6_tag:
      "ITSM · Email · Data Cleanup",
    c6_title:
      "Help Desk Notification Recovery (109k Tickets)",
    c6_pain:
      "Help desk email notifications had been stuck for weeks, with 109k old resolved tickets queued: turning email back on would have flooded every user.",
    c6_built:
      "Cleared the stale queue, set a dedicated sender, limited notifications to the events and people that matter, and closed the 109k backlog silently.",
    c6_result:
      "Notifications came back without an email storm, with auto-close after 3 days and satisfaction surveys only for new tickets.",
    c7_tag:
      "T-SQL · WMS · Lock Diagnostics",
    c7_title:
      "SQL Server Tuning & Warehouse Throughput",
    c7_pain:
      "Returnable containers were counted twice when they made several trips, sales KPIs needed several slow passes, and nobody could see where warehouse picking stalled.",
    c7_built:
      "ROW_NUMBER() deduplication, single-pass conditional aggregation, timing for each picking and checkout stage, and async sys.dm_tran_locks snapshots.",
    c7_result:
      "Duplicate-free container tracking, KPIs in one pass and measurable picking bottlenecks with the locks behind them.",
    c8_tag:
      "Product Ownership · ERP · Rollouts",
    c8_title:
      "ERP & System Implementations as Product Owner",
    c8_pain:
      "System rollouts across dozens of branches risked downtime and confusion, and business requests often arrived vague.",
    c8_built:
      "Specs and Kanban backlogs, UAT sign-off, migration runbooks, parallel cutovers, wave rollouts and hands-on training, plus CSP-safe UI plugins and Outlook-safe email templates.",
    c8_result:
      "Rollouts went out in waves with a parallel fallback and trained teams on day one.",
    c9_tag:
      "Python · SQL Server · Chat Approvals",
    c9_title:
      "Time-Boxed Database Access Automation",
    c9_pain:
      "Temporary database access for analysts and vendors was granted by hand, sometimes stayed open after hours, and nobody could easily see who was connected.",
    c9_built:
      "A bot that registers each request, creates time-boxed access and emails it, cuts it at the end of business hours, sends after-hours requests to an approval poll in chat and shows live sessions.",
    c9_result:
      "Every access now has an owner, a window and an automatic end; extensions only move the end time.",
    timeline_heading: "Career Timeline",
    tl1_period: "Aug 2021 - Present",
    tl1_title: "IT Administrator, DPO (LGPD) & Solutions Product Owner (PO)",
    tl1_body:
      "Lead end-to-end ERP/system deployments, Solutions PO backlogs, Windows Server & Active Directory access governance, L2 remote/chat escalation, Python/TypeScript/T-SQL automation, and LGPD compliance across ~80 sites.",
    tl2_period: "Apr 2021 - Aug 2021",
    tl2_title: "Senior IT Assistant: Information Security, LGPD & Level 2 Support",
    tl2_body:
      "Led initial Information Security and LGPD compliance structuring alongside Level 2 branch technical support, incident response, Active Directory controls, and early privacy risk mapping.",
    tl3_period: "Sep 2019 - Apr 2021",
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
    nav_sql: "SQL",
    sql_eyebrow: "SQL SERVER EM PRODUÇÃO",
    sql_title: "SQL Casebook",
    sql_desc: "Sete correções reais em SQL Server, recriadas com nomes genéricos e dados fictícios. Escolha uma para ver a dor, a correção, o resultado e o código antes e depois. Todo script \"depois\" roda num SQL Server 2022 de verdade no CI.",
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
      "Governança DPO (LGPD/GDPR), Comitê de Segurança APDADOS® e 16 falhas OWASP Top 10 mapeadas com plano de correção",
    lab_eyebrow: "SANDBOX AO VIVO NO NAVEGADOR",
    lab_title: "Laboratório Interativo de Engenharia",
    lab_desc:
      "Três simulações interativas em HTML5, CSS3 e JavaScript puro (sem frameworks): mascaramento DLP Zero-Trust, heurística de saúde de filas e uma conciliação diária de notas fiscais. Todos os dados são fictícios.",
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
    recon_tag: "Case · Hub de NF-e · Dados fictícios",
    recon_title: "Conciliação Diária de Notas Fiscais",
    recon_desc: "Cada quadrado é um dia de notas. A conciliação lista só as chaves das notas de cada dia na plataforma fiscal, compara com o banco local e baixa os dados completos apenas do que falta. Clique em Executar, ou crie lacunas antes.",
    recon_btn_run: "Executar conciliação",
    recon_btn_gaps: "Criar lacunas aleatórias",
    recon_btn_reset: "Reiniciar",
    recon_stat_days: "Dias conferidos",
    recon_stat_total: "Chaves comparadas",
    recon_stat_missing: "Faltando",
    recon_stat_fixed: "Recuperadas",
    recon_see_case: "Ver o case real",
    cmdk_hint: "Ctrl K",
    demos_eyebrow: "VITRINE ANIMADA DE ENGENHARIA (1080P60)",
    demos_title: "Vídeos Demonstrativos dos Projetos & DPO",
    demos_desc:
      "Nove vídeos curtos (30s) mostrando arquitetura, execução do código e fluxos de governança DPO, com dados 100% fictícios.",
    demo_synthetic_badge: "DEMO · 100% FICTÍCIO",
    demo_open_project: "Abrir Projeto",
    demo_07_nav_title: "07 · Governança DPO & LGPD",
    demo_08_nav_title: "08 · Hub de Entrada de NF-e",
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
      "Minicurso LGPD (APDADOS®) · Curso LGPD 4.0 (Mariana Toledo) | Português (nativo) & inglês técnico (leitura e documentação)",
    dpo_pill_1: "RoPA & DPIA / RIPD",
    dpo_pill_2: "DPAs & Avisos de Privacidade",
    dpo_pill_3: "16 Falhas OWASP Mapeadas",
    dpo_pill_4: "AD logonHours & RBAC",
    projects_eyebrow: "OPEN-SOURCE VALIDADO NO CI",
    projects_title: "Projetos Open-Source em Destaque",
    projects_desc:
      "Sete repositórios públicos com validações automatizadas no GitHub Actions, documentação bilíngue (Inglês/Português) e zero dados proprietários.",
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
      "Padrões de T-SQL vindos de produção, sobre um esquema fictício e executados num SQL Server 2022 de verdade no CI: relatório catch-all com RECOMPILE, ingestão idempotente, MERGE incremental, deduplicação com ROW_NUMBER(), Extended Events, diagnóstico de locks e RBAC de menor privilégio.",
    proj_infra_desc:
      "Playbook de infra híbrida Linux + Windows/AD com agentes PowerShell assinados (RSA-3072), recuperação de ACL por SID, backups Postgres em Docker, templates Nginx mTLS e 24 casos reais anonimizados.",
    proj_otimizapc_desc:
      "Otimizador Windows em tema escuro com revisão explícita antes de excluir, Pontos de Restauração em 1 clique, limpeza multi-usuário, busca de duplicados por hash, resíduos órfãos (90 dias), S.M.A.R.T. e análise instantânea de disco.",
    proj_tb_desc:
      "Migrador bidirecional Windows de e-mails e contatos preservando hierarquia de pastas, datas originais de recebimento (MSGFLAG_UNSENT / MAPI), remetentes, anexos e caminhos longos (\\\\?\\).",
    proj_nfe_desc:
      "Valida, inspeciona, organiza e concilia XMLs de NF-e/NFC-e: chave de acesso conferida pelo módulo 11 e decomposta, leitura de XML sem depender de namespace, organização em AAAA/MM com simulação por padrão e sem sobrescrever, e conciliação pasta x lista de chaves com código de saída para CI.",
    link_repo: "Repositório",
    link_docs: "Documentação",
    exp_eyebrow: "IMPACTO EM PRODUÇÃO & TRAJETÓRIA",
    impact_title: "Casos Reais em Produção & Trajetória",
    impact_desc:
      "Projetos rodando em produção, contados como a dor, o que eu construí e o resultado. Nomes, sistemas e dados ficaram de fora de propósito; os números são reais.",
    case_pain: "A DOR",
    case_solution: "O QUE EU CONSTRUÍ",
    case_result: "RESULTADO",
    c0_tag:
      "Python · SQL Server · API OData · IMAP · Desktop 24/7",
    c0_badge:
      "EM PRODUÇÃO",
    c0_title:
      "Hub de Entrada de NF-e & Conciliação Diária",
    c0_pain:
      "Os XMLs de NF-e dos fornecedores chegavam por e-mail, notas travavam na fila de importação do ERP e uma ferramenta manual à parte exigia alguém escolher datas e reprocessar mais de 40 mil notas por mês, então as lacunas ficavam abertas até a próxima rodada manual.",
    c0_built:
      "Um hub desktop que roda 24/7: entrada dos XMLs via IMAP, reprocessamento automático das notas travadas no ERP, sincronização incremental pela API OData da plataforma fiscal, conciliação diária comparando só as chaves, alerta de certificado digital vencendo e um watchdog que reinicia qualquer ciclo travado.",
    c0_result:
      "A varredura manual do mês virou ciclos a cada 10 min de ~4s cada, mais uma passada diária que confere todos os dias desde uma data inicial (~12s por dia) e baixa só o que falta. De quebra, corrigi uma janela de fuso deslocada em 3h e um campo que a ferramenta antiga sempre deixava vazio.",
    c1_tag:
      "Next.js · SQL · SVG · Observabilidade",
    c1_title:
      "Painel Operacional & Mapa de Infraestrutura ao Vivo",
    c1_pain:
      "O painel disparava 85 consultas por carregamento (uma por unidade) e levava 6,8s para abrir, enquanto os e-mails de alerta passavam de 80 por dia.",
    c1_built:
      "Agregação em uma única consulta SQL, Server Components dinâmicos, mapa animado em SVG das dependências e alertas HTML consolidados por hora.",
    c1_result:
      "Resposta da página (TTFB) caiu de 6,8s para 0,1s e os alertas foram de 80+ e-mails por dia para resumos por hora.",
    c2_tag:
      "Web · Leaflet/OSM · WCAG",
    c2_title:
      "Novo Site Institucional & Localizador de Unidades",
    c2_pain:
      "O visitante não tinha um jeito fácil de achar a unidade mais próxima e o que ela oferece, e várias páginas quebravam no celular e reprovavam no contraste.",
    c2_built:
      "Site institucional de 7 páginas com localizador Leaflet + OpenStreetMap filtrado por cidade e serviço, incorporações com tamanho automático e layout mobile-first testado em 390px.",
    c2_result:
      "Zero falhas de contraste WCAG na auditoria automática e um localizador que funciona em qualquer tela.",
    c3_tag:
      "Windows · WebSockets + mTLS · PowerShell",
    c3_title:
      "Controle Central de Estações & Auto-Reparo de Permissões",
    c3_pain:
      "Centenas de estações Windows em ~80 filiais precisavam de ações remotas; depois de reiniciar, o agente levava ~60s para voltar e uma permissão de pasta quebrada podia trancá-lo para fora.",
    c3_built:
      "Agente em serviço Windows via WebSockets + mTLS com implantação em ondas, kill switch, atualização automática assinada em RSA e reparo de permissões por SID, independente do idioma do sistema.",
    c3_result:
      "Reconexão após reinício caiu de 60s para 3-7s, e só atualização com assinatura válida é instalada.",
    c4_tag:
      "Automação · Retentativas · Chamados",
    c4_title:
      "Retransmissão de Notas Emitidas em Contingência",
    c4_pain:
      "Quando os pontos de venda emitiam notas em contingência, alguém precisava retransmiti-las à mão e abrir chamado no fornecedor para cada falha.",
    c4_built:
      "Robô de retransmissão contínua com proteções de retentativa, página de status e abertura automática de chamado no fornecedor em horário comercial.",
    c4_result:
      "O acúmulo de contingência é resolvido sem trabalho manual, e as falhas chegam ao fornecedor como chamado sozinhas.",
    c5_tag:
      "Python · API de ITSM · NVR/DVR",
    c5_title:
      "Orquestrador de Pedidos de Imagens de CFTV",
    c5_pain:
      "Cada pedido de imagem de uma unidade exigia alguém entrar à mão no gravador certo, entre 83 aparelhos de marcas diferentes.",
    c5_built:
      "Orquestrador que lê o pedido no help desk, conecta no NVR/DVR certo, baixa as imagens, tenta de novo em caso de falha e atualiza o chamado com notificações.",
    c5_result:
      "Os pedidos andam de ponta a ponta sem login manual, e gravadores com credencial errada são sinalizados para correção.",
    c6_tag:
      "ITSM · E-mail · Limpeza de Dados",
    c6_title:
      "Recuperação de Notificações do Help Desk (109 mil chamados)",
    c6_pain:
      "As notificações por e-mail do help desk estavam paradas havia semanas, com 109 mil chamados antigos na fila: religar o e-mail inundaria todos os usuários.",
    c6_built:
      "Limpei a fila velha, defini um remetente próprio, restringi os avisos aos eventos e pessoas que importam e encerrei os 109 mil chamados em silêncio.",
    c6_result:
      "As notificações voltaram sem disparo em massa, com fechamento automático em 3 dias e pesquisa de satisfação só para chamados novos.",
    c7_tag:
      "T-SQL · WMS · Diagnóstico de Locks",
    c7_title:
      "Otimização SQL Server & Produtividade do Depósito",
    c7_pain:
      "Caixas retornáveis eram contadas em dobro quando faziam várias viagens, os indicadores de venda exigiam várias passadas lentas e ninguém via onde a separação travava.",
    c7_built:
      "Deduplicação com ROW_NUMBER(), agregação condicional em passada única, medição de cada etapa de separação e conferência e snapshots assíncronos de sys.dm_tran_locks.",
    c7_result:
      "Rastreio de caixas sem duplicidade, indicadores em uma passada e gargalos de separação medidos junto com os locks que os causam.",
    c8_tag:
      "Product Ownership · ERP · Rollouts",
    c8_title:
      "Implantação de ERPs e Sistemas como Product Owner",
    c8_pain:
      "Implantar sistemas em dezenas de filiais arriscava parada e confusão, e os pedidos do negócio muitas vezes chegavam vagos.",
    c8_built:
      "Especificações e backlog em Kanban, homologação (UAT), runbooks de migração, virada em paralelo, implantação em ondas e treinamento prático, além de plugins de interface seguros (CSP) e modelos de e-mail compatíveis com Outlook.",
    c8_result:
      "As implantações saíram em ondas, com o sistema antigo em paralelo como plano B e equipes treinadas desde o primeiro dia.",
    c9_tag:
      "Python · SQL Server · Aprovação via Chat",
    c9_title:
      "Automação de Acesso Temporário ao Banco de Dados",
    c9_pain:
      "O acesso temporário ao banco para analistas e fornecedores era liberado à mão, às vezes ficava aberto fora do horário e não dava para ver com facilidade quem estava conectado.",
    c9_built:
      "Robô que registra cada pedido, cria o acesso com prazo e envia por e-mail, corta no fim do expediente, manda pedidos fora do horário para aprovação por enquete no chat e mostra as sessões ativas.",
    c9_result:
      "Todo acesso agora tem dono, janela e fim automático; uma prorrogação só muda o horário de término.",
    timeline_heading: "Trajetória Profissional",
    tl1_period: "Ago 2021 - Atual",
    tl1_title: "Administrador de TI, DPO (LGPD) & Product Owner (PO) de Soluções",
    tl1_body:
      "Liderança de implantações ponta a ponta de ERPs/sistemas, backlog de soluções como PO, governança de acessos em Windows Server e Active Directory, suporte N2 remoto/chat, automações em Python/TypeScript/T-SQL e conformidade LGPD em ~80 unidades.",
    tl2_period: "Abr 2021 - Ago 2021",
    tl2_title: "Auxiliar de TI Sênior: Segurança da Informação, LGPD & Suporte N2",
    tl2_body:
      "Estruturação inicial de Segurança da Informação e adequação à LGPD somada ao suporte técnico N2 para matriz e filiais, resposta a incidentes, controles no Active Directory e mapeamento inicial de riscos.",
    tl3_period: "Set 2019 - Abr 2021",
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
      "Commands: whoami, cases, sql, projects, sim, dpo, infra, stack, site, contact, clear",
      "Tips: Tab completes, Up/Down recalls history, Ctrl+K opens the command palette.",
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
      "[OK] RoPA inventory & Arts. 7/11 legal bases mapped across operations & SaaS",
      "[OK] DPIA/RIPD risk governance, vendor DPAs & Art. 18 rights workflows",
      "[OK] OWASP Top 10 web pentests: 16 critical/medium findings mapped with fix plans",
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
      "7. nfe-toolkit            (Python)     NF-e key check, organize & reconcile",
    ],
    cases: [
      "$ ls ./production-cases",
      "0. E-invoice intake hub     40k+ manual re-scans/month -> 10-min cycles",
      "1. Ops dashboard            TTFB 6.8s -> 0.1s, 80+ alerts/day -> digests",
      "2. Site & location finder   0 WCAG contrast failures, mobile-first",
      "3. Endpoint fleet agent     reconnect 60s -> 3-7s, signed updates",
      "4. Offline invoice resend   contingency backlog with zero manual work",
      "5. CCTV footage requests    83 recorders, end-to-end from the ticket",
      "6. Help desk notifications  109k stale tickets closed, no email storm",
      "7. SQL & warehouse tuning   one-pass KPIs, measurable picking stalls",
      "8. Time-boxed DB access     every access has an owner, window and end",
      "Names and data left out on purpose. Try 'sim' for a live demo.",
    ],
    sql: [
      "$ ls ./sql-casebook   # runs on SQL Server 2022 in CI",
      "1. Catch-all report       TRY_CONVERT + OPTION (RECOMPILE), 15 joins",
      "2. Idempotent ingest      NOT EXISTS x2 + UPDLOCK/HOLDLOCK + OUTPUT INTO",
      "3. Incremental summary    MERGE a few days per run instead of 12 months",
      "4. Two-stage aggregation  indexed #temp, no EXISTS inside SUM",
      "5. Extended Events        map the procedures an app calls, then reuse them",
      "6. Least privilege        a bot that can only extend an access window",
      "7. LGPD erasure           irreversible anonymization, totals and FKs kept",
      "Scroll to the SQL section to read each one with the code.",
    ],
    sim: [
      "$ ./reconcile --daily --fictional-data",
      "Scrolling to the Lab and running the daily reconciliation pass...",
    ],
    site: [
      "$ cat ./about-this-site",
      "Plain HTML5 + CSS3 + vanilla JS: zero frameworks, zero build step.",
      "Bilingual EN/PT, dark/light themes, respects prefers-reduced-motion.",
      "3 live simulations, a CLI, a Ctrl+K palette and CI tests on every push.",
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
      `Command not found: '${cmd}'. Try 'help', 'whoami', 'cases', 'projects' or 'sim'.`,
    ],
  },
  pt: {
    help: [
      "$ help",
      "Comandos: whoami, cases, sql, projects, sim, dpo, infra, stack, site, contact, clear",
      "Dicas: Tab completa, Cima/Baixo repete comandos, Ctrl+K abre a paleta de comandos.",
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
      "[OK] Pentests web OWASP Top 10: 16 falhas críticas/médias mapeadas com plano de correção",
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
      "7. nfe-toolkit            (Python)     Chave, organização e conciliação NF-e",
    ],
    cases: [
      "$ ls ./casos-em-producao",
      "0. Hub de entrada de NF-e   40 mil+ reprocessos/mês -> ciclos de 10 min",
      "1. Painel operacional       TTFB 6,8s -> 0,1s, 80+ alertas/dia -> resumos",
      "2. Site e localizador       0 falhas de contraste WCAG, mobile-first",
      "3. Agente de estações       reconexão 60s -> 3-7s, update assinado",
      "4. Reenvio de contingência  acúmulo resolvido sem trabalho manual",
      "5. Pedidos de imagem CFTV   83 gravadores, de ponta a ponta pelo chamado",
      "6. Notificações help desk   109 mil chamados velhos, sem disparo em massa",
      "7. SQL e depósito           KPIs em 1 passada, gargalos de separação",
      "8. Acesso temporário ao BD  todo acesso com dono, janela e fim",
      "Nomes e dados deixados de fora de propósito. Rode 'sim' para ver ao vivo.",
    ],
    sql: [
      "$ ls ./sql-casebook   # roda em SQL Server 2022 no CI",
      "1. Relatório catch-all    TRY_CONVERT + OPTION (RECOMPILE), 15 JOINs",
      "2. Ingestão idempotente   NOT EXISTS x2 + UPDLOCK/HOLDLOCK + OUTPUT INTO",
      "3. Resumo incremental     MERGE de poucos dias por rodada, não 12 meses",
      "4. Agregação em 2 etapas  #temp indexada, sem EXISTS dentro de SUM",
      "5. Extended Events        mapear as procedures que o sistema chama",
      "6. Menor privilégio       robô que só consegue prorrogar um acesso",
      "7. Eliminação LGPD        anonimização irreversível, totais e chaves mantidos",
      "Role até a seção SQL para ler cada um com o código.",
    ],
    sim: [
      "$ ./conciliar --diario --dados-ficticios",
      "Indo para o Lab e executando a conciliação diária...",
    ],
    site: [
      "$ cat ./sobre-este-site",
      "HTML5 + CSS3 + JS puro: zero frameworks, zero etapa de build.",
      "Bilíngue EN/PT, tema claro/escuro, respeita prefers-reduced-motion.",
      "3 simulações ao vivo, uma CLI, paleta Ctrl+K e testes no CI a cada push.",
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
      `Comando desconhecido: '${cmd}'. Tente 'help', 'whoami', 'cases', 'projects' ou 'sim'.`,
    ],
  },
};

const DLP_PRESETS = {
  en: {
    ticket:
      "Ticket #8421 (Fictional Site 12): User Maria Silva, CPF 123.456.789-01, e-mail maria.silva@exemplo-ficticio.com.br reported printer error on host 10.24.8.15. Fallback token sk_live_demo_9f8a7b6c5d4e removed before sharing.",
    ai:
      "Prompt draft: Analyze vendor CNPJ 12.345.678/0001-99 invoice lag for contact ops@empresa-demo.test using webhook key ghp_demoTokenExample9876543210 on internal DB 192.168.40.22.",
    config:
      "DEBUG 2026-11-23T14:02Z gateway=172.16.12.8 auth='Bearer demo_jwt_secret_payload_abc123' owner=carlos.lima@exemplo-ficticio.org cpf=987.654.321-00",
  },
  pt: {
    ticket:
      "Chamado #8421 (Unidade Fictícia 12): Usuária Maria Silva, CPF 123.456.789-01, e-mail maria.silva@exemplo-ficticio.com.br relatou erro de impressora no host 10.24.8.15. Token sk_live_demo_9f8a7b6c5d4e barrado antes do envio.",
    ai:
      "Rascunho de prompt: Analisar atraso do fornecedor CNPJ 12.345.678/0001-99 (contato ops@empresa-demo.test) usando chave ghp_demoTokenExample9876543210 no banco interno 192.168.40.22.",
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
        "Complete mapping of personal and sensitive data flows across point-of-sale systems, ERP modules, HR/back-office databases, physical archives, and third-party portals.",
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
        "Tested T-SQL implementation on SQL Server 2022: see case 07 in the SQL Casebook.",
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
        "Implementação em T-SQL testada em SQL Server 2022: veja o caso 07 do SQL Casebook.",
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
      desc: "RoPA & DPIA, Art. 18 irreversible anonymization, 16 OWASP Top 10 findings mapped, AD logonHours, Zero-Trust AI DLP & APDADOS®.",
    },
    pt: {
      tag: "LGPD / GDPR · OWASP · APDADOS®",
      title: "Governança DPO & Cibersegurança em Produção",
      desc: "RoPA e RIPD, anonimização do Art. 18, 16 falhas OWASP mapeadas, AD logonHours, barreira DLP para IA e Comitê APDADOS®.",
    },
  },
  {
    id: "08",
    mp4: "assets/videos/08-nfe-intake-hub.mp4",
    poster: "assets/videos/posters/08-nfe-intake-hub.jpg",
    duration: "0:30",
    href: "#experience",
    external: false,
    en: {
      tag: "Python · OData API · Reconciliation",
      title: "E-Invoice Intake Hub",
      desc: "Email intake, stalled-queue recovery, 10-minute incremental sync and a key-only daily reconciliation that fetches only what is missing.",
    },
    pt: {
      tag: "Python · API OData · Conciliação",
      title: "Hub de Entrada de NF-e",
      desc: "Entrada por e-mail, fila destravada, sincronização a cada 10 min e conciliação diária por chave que baixa só o que falta.",
    },
  },
  {
    id: "09",
    mp4: "assets/videos/09-nfe-toolkit.mp4",
    poster: "assets/videos/posters/09-nfe-toolkit.jpg",
    duration: "0:30",
    href: "https://github.com/gavicoding/nfe-toolkit",
    external: true,
    en: {
      tag: "Python · CLI · Zero Dependencies",
      title: "nfe-toolkit",
      desc: "Mod-11 access key validation, YYYY/MM organizer with dry run and duplicate detection, and folder vs. key-list reconciliation for CI.",
    },
    pt: {
      tag: "Python · CLI · Zero Dependências",
      title: "nfe-toolkit",
      desc: "Validação de chave pelo módulo 11, organização em AAAA/MM com simulação e duplicados, e conciliação pasta x lista para CI.",
    },
  },
];

const RECON_TEXT = {
  en: {
    ready: "READY",
    running: "RUNNING",
    synced: "IN SYNC",
    recovered: (n) => `${n} RECOVERED`,
    intro: "[setup] One month of fictional invoices loaded, with a few gaps. Press Run.",
    start: (days) => `[pass] Listing invoice keys for ${days} days and comparing with the database...`,
    ok: (dd, total) => `[ok]    day ${dd}: ${total} keys on the platform, all in the database`,
    gap: (dd, total, missing) => `[gap]   day ${dd}: ${total} on the platform, ${missing} missing in the database`,
    fetch: (missing) => `[fetch] downloading only those ${missing} invoices by key... stored`,
    done: (days, missing, fixed) =>
      missing
        ? `[done]  ${days} days checked, ${fixed} of ${missing} missing invoices recovered.`
        : `[done]  ${days} days checked, nothing missing. Database in sync.`,
    gaps: (n) => `[setup] ${n} new days with missing invoices. Press Run.`,
    reset: "[setup] Fresh month loaded. Press Run.",
  },
  pt: {
    ready: "PRONTO",
    running: "EXECUTANDO",
    synced: "EM DIA",
    recovered: (n) => `${n} RECUPERADAS`,
    intro: "[setup] Um mês de notas fictícias carregado, com algumas lacunas. Clique em Executar.",
    start: (days) => `[passo] Listando as chaves de ${days} dias e comparando com o banco...`,
    ok: (dd, total) => `[ok]    dia ${dd}: ${total} chaves na plataforma, todas no banco`,
    gap: (dd, total, missing) => `[lacuna] dia ${dd}: ${total} na plataforma, ${missing} faltando no banco`,
    fetch: (missing) => `[busca] baixando só essas ${missing} notas pela chave... gravadas`,
    done: (days, missing, fixed) =>
      missing
        ? `[fim]   ${days} dias conferidos, ${fixed} de ${missing} notas faltantes recuperadas.`
        : `[fim]   ${days} dias conferidos, nada faltando. Banco em dia.`,
    gaps: (n) => `[setup] ${n} dias novos com notas faltando. Clique em Executar.`,
    reset: "[setup] Mês novo carregado. Clique em Executar.",
  },
};

const PALETTE_TEXT = {
  en: {
    placeholder: "Search sections or actions...",
    empty: "No matches.",
    foot: "Up/Down to move · Enter to open · Esc to close",
    title: "Command palette",
    items: {
      lab: "Go to Live Lab",
      sim: "Run the reconciliation demo",
      demos: "Go to Video Demos",
      dpo: "Go to DPO & LGPD",
      projects: "Go to Open-Source Projects",
      sql: "Go to SQL Casebook",
      cases: "Go to Production Case Studies",
      stack: "Go to Technical Stack",
      contact: "Go to Contact",
      terminal: "Focus the terminal",
      theme: "Toggle light / dark theme",
      lang: "Mudar para Português",
      email: "Copy email address",
      github: "Open GitHub profile",
      linkedin: "Open LinkedIn profile",
    },
  },
  pt: {
    placeholder: "Buscar seções ou ações...",
    empty: "Nada encontrado.",
    foot: "Cima/Baixo para mover · Enter para abrir · Esc para fechar",
    title: "Paleta de comandos",
    items: {
      lab: "Ir para o Lab ao Vivo",
      sim: "Executar a demo de conciliação",
      demos: "Ir para os Vídeos Demo",
      dpo: "Ir para DPO & LGPD",
      projects: "Ir para os Projetos Open-Source",
      sql: "Ir para o SQL Casebook",
      cases: "Ir para os Casos em Produção",
      stack: "Ir para a Stack Técnica",
      contact: "Ir para Contato",
      terminal: "Focar no terminal",
      theme: "Alternar tema claro / escuro",
      lang: "Switch to English",
      email: "Copiar e-mail",
      github: "Abrir perfil no GitHub",
      linkedin: "Abrir perfil no LinkedIn",
    },
  },
};

const TERMINAL_COMMANDS = [
  "help",
  "whoami",
  "cases",
  "sql",
  "projects",
  "sim",
  "dpo",
  "infra",
  "stack",
  "site",
  "contact",
  "clear",
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
  const termHistory = [];
  let termHistoryIdx = -1;

  // ---- Lab 3: daily reconciliation pass (fictional data, deterministic) ----
  const RECON_DAYS = 30;
  let reconSeed = 20261124;
  let reconData = [];
  let reconRunning = false;
  let reconTimers = [];
  let reconStats = { days: 0, total: 0, missing: 0, fixed: 0 };
  let reconLog = [];
  let reconAutoPlayed = false;

  function reconRand() {
    // mulberry32: same "random" month on every visit
    reconSeed = (reconSeed + 0x6d2b79f5) | 0;
    let t = Math.imul(reconSeed ^ (reconSeed >>> 15), 1 | reconSeed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  function reconText() {
    return RECON_TEXT[currentLang] || RECON_TEXT.en;
  }

  function reconFmt(n) {
    return n.toLocaleString(currentLang === "pt" ? "pt-BR" : "en-US");
  }

  function reconAddGaps(count) {
    const candidates = reconData.filter((d) => d.missing === 0);
    let added = 0;
    for (let n = 0; n < count && candidates.length; n += 1) {
      const pick = candidates.splice(Math.floor(reconRand() * candidates.length), 1)[0];
      pick.missing = 2 + Math.floor(reconRand() * 9);
      added += 1;
    }
    return added;
  }

  function reconBuild() {
    reconData = [];
    for (let i = 0; i < RECON_DAYS; i += 1) {
      const weekend = i % 7 === 5 || i % 7 === 6;
      const total = weekend ? 240 + Math.floor(reconRand() * 460) : 1800 + Math.floor(reconRand() * 1400);
      reconData.push({ day: i + 1, weekend, total, missing: 0, recovered: 0, state: "pending" });
    }
    reconAddGaps(4);
    reconStats = { days: 0, total: 0, missing: 0, fixed: 0 };
  }

  function reconStopTimers() {
    reconTimers.forEach((t) => window.clearTimeout(t));
    reconTimers = [];
    reconRunning = false;
  }

  function reconPushLog(line) {
    reconLog.push(line);
    if (reconLog.length > 7) reconLog = reconLog.slice(-7);
  }

  function reconRender() {
    const grid = document.getElementById("recon-grid");
    if (!grid) return;
    if (grid.children.length !== reconData.length) {
      grid.replaceChildren();
      reconData.forEach((d) => {
        const cell = document.createElement("div");
        const num = document.createElement("span");
        num.textContent = String(d.day).padStart(2, "0");
        cell.append(num, document.createElement("small"));
        grid.appendChild(cell);
      });
    }
    reconData.forEach((d, i) => {
      const cell = grid.children[i];
      cell.className = `recon-cell is-${d.state}${d.weekend ? " is-weekend" : ""}`;
      const small = cell.querySelector("small");
      if (small) {
        small.textContent =
          d.state === "gap" ? `-${d.missing}` : d.state === "fixed" ? `+${d.recovered}` : d.state === "ok" ? "ok" : "";
      }
    });

    const T = reconText();
    const set = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };
    set("recon-days", `${reconStats.days} / ${RECON_DAYS}`);
    set("recon-total", reconFmt(reconStats.total));
    set("recon-missing", reconFmt(reconStats.missing));
    set("recon-fixed", reconFmt(reconStats.fixed));
    set("recon-log", reconLog.join("\n"));

    const badge = document.getElementById("recon-state");
    if (badge) {
      badge.classList.remove("is-warn", "is-danger");
      if (reconRunning) {
        badge.textContent = T.running;
        badge.classList.add("is-warn");
      } else if (reconStats.days === RECON_DAYS) {
        badge.textContent = reconStats.fixed ? T.recovered(reconStats.fixed) : T.synced;
      } else {
        badge.textContent = T.ready;
      }
    }
    ["recon-run", "recon-gaps", "recon-reset"].forEach((id) => {
      const btn = document.getElementById(id);
      if (btn && id !== "recon-reset") btn.disabled = reconRunning;
    });
  }

  function reconRun() {
    if (reconRunning || !reconData.length) return;
    const T = reconText();
    // dias recuperados na passada anterior agora estao completos
    reconData.forEach((d) => {
      if (d.state === "fixed") d.missing = 0;
      d.state = "pending";
      d.recovered = 0;
    });
    reconStats = { days: 0, total: 0, missing: 0, fixed: 0 };
    reconLog = [];
    reconPushLog(T.start(RECON_DAYS));

    const steps = [];
    reconData.forEach((d) => {
      const dd = String(d.day).padStart(2, "0");
      steps.push({ wait: 55, fn: () => { d.state = "scan"; } });
      steps.push({
        wait: d.missing ? 260 : 75,
        fn: () => {
          const t = reconText();
          reconStats.days += 1;
          reconStats.total += d.total;
          if (d.missing) {
            d.state = "gap";
            reconStats.missing += d.missing;
            reconPushLog(t.gap(dd, reconFmt(d.total), d.missing));
          } else {
            d.state = "ok";
            reconPushLog(t.ok(dd, reconFmt(d.total)));
          }
        },
      });
      if (d.missing) {
        steps.push({
          wait: 420,
          fn: () => {
            d.state = "fixed";
            d.recovered = d.missing;
            reconStats.fixed += d.missing;
            reconPushLog(reconText().fetch(d.missing));
          },
        });
      }
    });
    steps.push({
      wait: 120,
      fn: () => {
        reconRunning = false;
        reconPushLog(reconText().done(reconStats.days, reconStats.missing, reconStats.fixed));
      },
    });

    reconRunning = true;
    if (prefersReduced) {
      steps.forEach((s) => s.fn());
      reconRender();
      return;
    }
    let at = 0;
    steps.forEach((s) => {
      at += s.wait;
      reconTimers.push(
        window.setTimeout(() => {
          s.fn();
          reconRender();
        }, at),
      );
    });
    reconRender();
  }

  function reconInjectGaps() {
    if (reconRunning) return;
    reconData.forEach((d) => {
      if (d.state === "fixed") d.missing = 0;
      d.state = "pending";
      d.recovered = 0;
    });
    reconStats = { days: 0, total: 0, missing: 0, fixed: 0 };
    const added = reconAddGaps(2 + Math.floor(reconRand() * 3));
    reconLog = [reconText().gaps(added)];
    reconRender();
  }

  function reconReset() {
    reconStopTimers();
    reconBuild();
    reconLog = [reconText().reset];
    reconRender();
  }

  reconBuild();
  reconLog = [RECON_TEXT[currentLang] ? RECON_TEXT[currentLang].intro : RECON_TEXT.en.intro];

  // ---- Command palette (Ctrl/Cmd + K) ----
  let paletteIdx = 0;
  let paletteItems = [];
  let paletteReturnFocus = null;

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
  }

  function paletteActions() {
    return {
      lab: () => scrollToId("lab"),
      sim: () => {
        scrollToId("recon-lab");
        window.setTimeout(reconRun, prefersReduced ? 0 : 650);
      },
      demos: () => scrollToId("demos"),
      dpo: () => scrollToId("dpo"),
      projects: () => scrollToId("projects"),
      sql: () => scrollToId("sql"),
      cases: () => scrollToId("experience"),
      stack: () => scrollToId("stack"),
      contact: () => scrollToId("contact"),
      terminal: () => {
        const input = document.getElementById("terminal-input");
        scrollToId("top");
        if (input) window.setTimeout(() => input.focus({ preventScroll: true }), prefersReduced ? 0 : 450);
      },
      theme: () => applyTheme(currentTheme === "dark" ? "light" : "dark"),
      lang: () => applyLanguage(currentLang === "en" ? "pt" : "en"),
      email: () => {
        const btn = document.getElementById("copy-email-hero");
        if (btn) btn.click();
      },
      github: () => window.open("https://github.com/gavicoding", "_blank", "noopener"),
      linkedin: () => window.open("https://www.linkedin.com/in/gabrielvsouza/", "_blank", "noopener"),
    };
  }

  function renderPalette() {
    const list = document.getElementById("cmdk-list");
    const input = document.getElementById("cmdk-input");
    if (!list || !input) return;
    const P = PALETTE_TEXT[currentLang] || PALETTE_TEXT.en;
    const q = input.value.trim().toLowerCase();
    paletteItems = Object.entries(P.items)
      .filter(([id, label]) => !q || label.toLowerCase().includes(q) || id.includes(q))
      .map(([id, label]) => ({ id, label }));
    paletteIdx = Math.max(0, Math.min(paletteIdx, paletteItems.length - 1));
    list.replaceChildren();
    if (!paletteItems.length) {
      const li = document.createElement("li");
      li.className = "cmdk-empty";
      li.textContent = P.empty;
      list.appendChild(li);
      input.removeAttribute("aria-activedescendant");
      return;
    }
    paletteItems.forEach((item, i) => {
      const li = document.createElement("li");
      li.id = `cmdk-opt-${item.id}`;
      li.className = `cmdk-item${i === paletteIdx ? " is-active" : ""}`;
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", String(i === paletteIdx));
      li.textContent = item.label;
      li.addEventListener("mousemove", () => {
        if (paletteIdx !== i) {
          paletteIdx = i;
          renderPalette();
        }
      });
      li.addEventListener("click", () => runPaletteItem(item.id));
      list.appendChild(li);
    });
    input.setAttribute("aria-activedescendant", `cmdk-opt-${paletteItems[paletteIdx].id}`);
    const active = list.children[paletteIdx];
    if (active && typeof active.scrollIntoView === "function") active.scrollIntoView({ block: "nearest" });
  }

  function openPalette() {
    const box = document.getElementById("cmdk");
    const input = document.getElementById("cmdk-input");
    if (!box || !input) return;
    const P = PALETTE_TEXT[currentLang] || PALETTE_TEXT.en;
    paletteReturnFocus = document.activeElement;
    input.setAttribute("placeholder", P.placeholder);
    const foot = document.getElementById("cmdk-foot");
    if (foot) foot.textContent = P.foot;
    const panel = box.querySelector(".cmdk-panel");
    if (panel) panel.setAttribute("aria-label", P.title);
    input.value = "";
    paletteIdx = 0;
    box.hidden = false;
    document.body.classList.add("cmdk-open");
    renderPalette();
    input.focus();
  }

  function closePalette() {
    const box = document.getElementById("cmdk");
    if (!box || box.hidden) return;
    box.hidden = true;
    document.body.classList.remove("cmdk-open");
    if (paletteReturnFocus && typeof paletteReturnFocus.focus === "function") {
      paletteReturnFocus.focus({ preventScroll: true });
    }
  }

  function runPaletteItem(id) {
    closePalette();
    const action = paletteActions()[id];
    if (action) action();
  }


  // ---- SQL Casebook ----
  let sqlIdx = 0;
  let sqlView = "after";
  const SQL_KW = new Set(("SELECT FROM WHERE AND OR NOT EXISTS INSERT INTO VALUES UPDATE SET DELETE MERGE USING " +
    "WHEN MATCHED THEN ELSE END CASE AS ON JOIN LEFT GROUP BY ORDER WITH OUTPUT INSERTED DECLARE INT " +
    "NVARCHAR DATETIME2 NUMERIC CREATE ALTER PROCEDURE BEGIN IF NULL IS TOP OPTION RECOMPILE INDEX " +
    "CLUSTERED TABLE EVENT SESSION SERVER ADD ACTION TARGET STATE START EXEC GRANT DENY EXECUTE OBJECT TO " +
    "THROW PARTITION OVER DESC ASC FOR EACH IN TARGET").split(" "));
  const SQL_FN = new Set(["ROW_NUMBER", "TRY_CONVERT", "NULLIF", "LTRIM", "RTRIM", "COUNT", "SUM", "MIN", "MAX",
    "DATEADD", "ISNULL", "UPDLOCK", "HOLDLOCK"]);

  function renderSqlCode(el, code) {
    el.replaceChildren();
    const rx = /(--[^\n]*)|('(?:[^']|'')*')|(\b\d+\b)|([A-Za-z_@#][A-Za-z0-9_@#.]*)|(\s+)|([^\sA-Za-z0-9_@#'-]+|-)/g;
    let m;
    while ((m = rx.exec(code)) !== null) {
      const [tok, comment, str, num, word] = m;
      let cls = "";
      if (comment) cls = "c";
      else if (str) cls = "s";
      else if (num) cls = "n";
      else if (word && SQL_KW.has(word.toUpperCase())) cls = "k";
      else if (word && SQL_FN.has(word.toUpperCase())) cls = "f";
      if (cls) {
        const span = document.createElement("span");
        span.className = cls;
        span.textContent = tok;
        el.appendChild(span);
      } else {
        el.appendChild(document.createTextNode(tok));
      }
    }
  }

  function renderSqlCasebook() {
    if (typeof SQL_CASES === "undefined") return;
    const list = document.getElementById("sqlbook-list");
    if (!list) return;
    const ui = SQL_UI[currentLang] || SQL_UI.en;
    list.replaceChildren();
    SQL_CASES.forEach((c, i) => {
      const t = c[currentLang] || c.en;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `sqlbook-item${i === sqlIdx ? " is-active" : ""}`;
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(i === sqlIdx));
      const num = document.createElement("span");
      num.className = "sqlbook-num";
      num.textContent = String(i + 1).padStart(2, "0");
      const txt = document.createElement("span");
      txt.className = "sqlbook-item-text";
      const title = document.createElement("span");
      title.className = "sqlbook-item-title";
      title.textContent = t.title;
      const tag = document.createElement("span");
      tag.className = "sqlbook-item-tag";
      tag.textContent = t.tag;
      txt.append(title, tag);
      btn.append(num, txt);
      btn.addEventListener("click", () => {
        sqlIdx = i;
        sqlView = "after";
        renderSqlCasebook();
      });
      list.appendChild(btn);
    });

    const c = SQL_CASES[sqlIdx];
    const t = c[currentLang] || c.en;
    const set = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };
    set("sqlbook-tag", t.tag);
    set("sqlbook-title", t.title);
    set("sqlbook-before", ui.before);
    set("sqlbook-after", ui.after);
    const link = document.getElementById("sqlbook-link");
    if (link) {
      link.textContent = `${ui.open}: ${c.file}`;
      link.setAttribute("href", SQL_REPO + c.file);
    }
    const rows = document.getElementById("sqlbook-rows");
    if (rows) {
      rows.replaceChildren();
      [["is-pain", ui.pain, t.pain], ["is-built", ui.fix, t.fix], ["is-result", ui.result, t.result]].forEach(([cls, k, v]) => {
        const row = document.createElement("div");
        row.className = `case-row ${cls}`;
        const dt = document.createElement("dt");
        dt.className = "mono";
        dt.textContent = k;
        const dd = document.createElement("dd");
        dd.textContent = v;
        row.append(dt, dd);
        rows.appendChild(row);
      });
    }
    document.querySelectorAll("[data-sql-view]").forEach((b) => {
      const on = b.getAttribute("data-sql-view") === sqlView;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    const code = document.getElementById("sqlbook-code");
    if (code) renderSqlCode(code, sqlView === "before" ? c.before : c.after);
  }

  document.querySelectorAll("[data-sql-view]").forEach((b) => {
    b.addEventListener("click", () => {
      sqlView = b.getAttribute("data-sql-view") || "after";
      renderSqlCasebook();
    });
  });

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
    casos: "cases",
    tsql: "sql",
    banco: "sql",
    case: "cases",
    simular: "sim",
    conciliar: "sim",
    reconcile: "sim",
    demo: "sim",
    sobre_o_site: "site",
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

    if (cmd === "sim") {
      paletteActions().sim();
    }

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
    if (!reconRunning) {
      const T = RECON_TEXT[currentLang] || RECON_TEXT.en;
      reconLog = [reconStats.days === RECON_DAYS ? T.done(reconStats.days, reconStats.missing, reconStats.fixed) : T.intro];
    }
    reconRender();
    renderSqlCasebook();
    const cmdkBox = document.getElementById("cmdk");
    if (cmdkBox && !cmdkBox.hidden) renderPalette();
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
      if (val && termHistory[termHistory.length - 1] !== val) termHistory.push(val);
      termHistoryIdx = -1;
      runTerminalCommand(val || "help");
      termInput.value = "";
      termInput.focus();
    });

    termInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        if (!termHistory.length) return;
        e.preventDefault();
        if (e.key === "ArrowUp") {
          termHistoryIdx = termHistoryIdx < 0 ? termHistory.length - 1 : Math.max(0, termHistoryIdx - 1);
        } else {
          termHistoryIdx = termHistoryIdx < 0 ? -1 : termHistoryIdx + 1;
          if (termHistoryIdx >= termHistory.length) termHistoryIdx = -1;
        }
        termInput.value = termHistoryIdx < 0 ? "" : termHistory[termHistoryIdx];
      } else if (e.key === "Tab") {
        const typed = termInput.value.trim().toLowerCase();
        if (!typed) return; // Tab vazio segue o fluxo normal de foco (acessibilidade)
        const hits = TERMINAL_COMMANDS.filter((c) => c.startsWith(typed));
        if (hits.length === 1) {
          e.preventDefault();
          termInput.value = hits[0];
        } else if (hits.length > 1) {
          e.preventDefault();
          renderTerminalLines([`$ ${typed}`, hits.join("   ")]);
        }
      }
    });
  }

  // Lab 3 events + autoplay the first time the card scrolls into view
  const reconRunBtn = document.getElementById("recon-run");
  if (reconRunBtn) reconRunBtn.addEventListener("click", reconRun);
  const reconGapsBtn = document.getElementById("recon-gaps");
  if (reconGapsBtn) reconGapsBtn.addEventListener("click", reconInjectGaps);
  const reconResetBtn = document.getElementById("recon-reset");
  if (reconResetBtn) reconResetBtn.addEventListener("click", reconReset);
  const reconCard = document.getElementById("recon-lab");
  if (reconCard && !prefersReduced && typeof IntersectionObserver !== "undefined") {
    const reconObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !reconAutoPlayed) {
            reconAutoPlayed = true;
            reconObs.disconnect();
            window.setTimeout(reconRun, 500);
          }
        });
      },
      { threshold: 0.45 },
    );
    reconObs.observe(reconCard);
  }

  // Command palette events
  const cmdkOpenBtn = document.getElementById("cmdk-open");
  if (cmdkOpenBtn) cmdkOpenBtn.addEventListener("click", openPalette);
  document.querySelectorAll("[data-cmdk-close]").forEach((el) => el.addEventListener("click", closePalette));
  const cmdkInput = document.getElementById("cmdk-input");
  if (cmdkInput) {
    cmdkInput.addEventListener("input", () => {
      paletteIdx = 0;
      renderPalette();
    });
    cmdkInput.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!paletteItems.length) return;
        const delta = e.key === "ArrowDown" ? 1 : -1;
        paletteIdx = (paletteIdx + delta + paletteItems.length) % paletteItems.length;
        renderPalette();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (paletteItems[paletteIdx]) runPaletteItem(paletteItems[paletteIdx].id);
      } else if (e.key === "Tab") {
        e.preventDefault(); // foco fica preso na paleta enquanto aberta
      }
    });
  }
  document.addEventListener("keydown", (e) => {
    const box = document.getElementById("cmdk");
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (box && !box.hidden) closePalette();
      else openPalette();
    } else if (e.key === "Escape" && box && !box.hidden) {
      e.preventDefault();
      closePalette();
    }
  });

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
    if (document.hidden) return; // nao gasta CPU com a aba em segundo plano
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
