const EMAIL_ADDRESS = "gavicoding@gmail.com";

const TRANSLATIONS = {
  en: {
    skip_link: "Skip to main content",
    nav_lab: "Live Lab",
    nav_demos: "Videos",
    nav_dpo: "Privacy",
    nav_projects: "Projects",
    nav_sql: "SQL",
    sql_eyebrow: "SQL SERVER IN PRODUCTION",
    sql_title: "SQL Casebook",
    sql_desc: "Seven SQL Server problems I solved at work, rebuilt with generic names and fake data. Pick one to see the problem, the fix, the result and the code before and after. Every fixed script runs on a real SQL Server 2022 on each change (CI).",
    nav_experience: "Experience",
    nav_stack: "Stack",
    nav_contact: "Contact",
    hero_badge: "REMOTE · BRAZIL & ABROAD",
    hero_title:
      "I automate the IT work nobody should be doing by hand, and keep the data safe along the way.",
    hero_subtitle:
      "I'm Gabriel Souza. I run IT for an operation with around 80 sites: I write the automations (Python, TypeScript, SQL Server, C#), keep Windows and Linux servers healthy, lead new system rollouts as Product Owner and act as DPO under Brazil's data protection law (LGPD). Below you can try live simulations, watch 30-second demos and read real cases.",
    cta_lab: "Try the live lab",
    cta_github: "GitHub",
    cta_linkedin: "LinkedIn",
    cta_copy_email: "Copy email",
    term_status: "INTERACTIVE TERMINAL",
    term_placeholder: "Type 'help', 'projects', 'cases'...",
    term_run: "Run",
    metric_1_label:
      "Load time of an internal dashboard after I replaced 85 separate database queries with one",
    metric_2_label:
      "Sites and Windows computers I support with Active Directory, Linux and remote help",
    metric_3_label:
      "Public repositories with automated tests on every change, in Python, TypeScript, SQL, PowerShell and C#",
    metric_4_label:
      "Data protection officer under LGPD/GDPR, plus 16 web security flaws (OWASP Top 10) found and mapped with a fix plan",
    lab_eyebrow: "RUNS IN YOUR BROWSER",
    lab_title: "Interactive Lab",
    lab_desc:
      "Three small simulations of things I built, running right here with fake data. Nothing leaves your browser.",
    dlp_title: "Hide personal data before you share it",
    dlp_desc:
      "Edit the text or load an example. CPF, CNPJ, emails, passwords, API keys and internal IP addresses are masked as you type, the same way my pii-screenshot-guard tool cleans a log before it goes into a ticket.",
    dlp_preset_ticket: "Example: help desk ticket",
    dlp_preset_ai: "Example: AI prompt",
    dlp_preset_config: "Example: server log",
    dlp_input_label: "ORIGINAL TEXT (FAKE DATA)",
    dlp_output_label: "SAFE TO SHARE",
    dlp_stat_pii: "Personal data (CPF/CNPJ/email)",
    dlp_stat_secrets: "Passwords & keys",
    dlp_stat_ips: "Internal IPs",
    topo_title: "Is the queue busy or stuck?",
    topo_desc:
      "A long queue is not always a problem. Switch the states below: the monitor only alerts when items stop moving (STALLED), not during a busy hour (HIGH_LOAD). That is what keeps a team from learning to ignore alerts.",
    topo_btn_healthy: "Normal",
    topo_btn_high: "Busy hour (HIGH_LOAD)",
    topo_btn_stalled: "Stuck (STALLED)",
    topo_btn_recover: "Recover",
    topo_stat_depth: "Items waiting",
    topo_stat_trend: "Trend",
    topo_stat_mtls: "Secure link (mTLS)",
    topo_stat_policy: "Alert",
    recon_tag: "Real case · Invoice hub · Fake data",
    recon_title: "Daily check for missing invoices",
    recon_desc: "Each square is one day. For every day the robot asks the tax platform only for the list of invoice keys (fast), compares it with our database and downloads just the invoices that are missing. Press Run, or create a few gaps first.",
    recon_btn_run: "Run the check",
    recon_btn_gaps: "Create gaps",
    recon_btn_reset: "Start over",
    recon_stat_days: "Days checked",
    recon_stat_total: "Invoices compared",
    recon_stat_missing: "Missing",
    recon_stat_fixed: "Recovered",
    recon_see_case: "Read the real case",
    cmdk_hint: "Ctrl K",
    demos_eyebrow: "30-SECOND VIDEOS",
    demos_title: "See each project working",
    demos_desc:
      "Eleven short videos, each one showing the problem, what I built and the result. All data is fake.",
    demo_synthetic_badge: "DEMO · FAKE DATA",
    demo_open_project: "Open project",
    demo_01_nav_title: "01 · Personal data & secrets scanner",
    demo_02_nav_title: "02 · Queue monitor: busy or stuck?",
    demo_03_nav_title: "03 · Infrastructure playbook",
    demo_04_nav_title: "04 · SQL Server fixes from production",
    demo_05_nav_title: "05 · OtimizaPC: safe Windows cleanup",
    demo_06_nav_title: "06 · Thunderbird ⇄ Outlook migrator",
    demo_09_nav_title: "09 · Toolkit for NF-e invoices",
    demo_07_nav_title: "07 · Privacy & LGPD in practice",
    demo_08_nav_title: "08 · Invoice intake hub",
    demo_10_nav_title: "10 · Active Directory access review",
    demo_11_nav_title: "11 · IBS/CBS e-invoice checker",
    btn_watch_dpo_demo: "Watch the video (32s)",
    btn_watch_demo: "Watch demo",
    dpo_eyebrow: "DATA PROTECTION & SECURITY",
    dpo_title: "Privacy and security, in practice",
    dpo_desc:
      "As DPO I connect what the law asks for with what the systems actually do: I map where personal data lives, document the legal basis and the risks, handle people's requests about their data without breaking the databases, find and fix security flaws and help teams use AI tools without leaking data. I have volunteered on the APDADOS® Security Committee since 2021.",
    dpo_step_1: "Find the data",
    dpo_step_2: "Legal basis & risk",
    dpo_step_3: "Requests & anonymization",
    dpo_step_4: "Security flaws & access",
    dpo_step_5: "Safe AI & community",
    cred_edu_tag: "EDUCATION",
    cred_edu_title: "Degrees & security specialization",
    edu1_title: "Postgraduate in Cybersecurity",
    edu1_meta: "UTFPR · Apr 2026 - Mar 2028",
    edu2_title: "MBA in Process Management",
    edu2_meta: "Estácio · 2023",
    edu3_title: "Postgraduate in Information Security",
    edu3_meta: "Estácio · 2023",
    edu4_title: "Bachelor's Degree in Computer Science",
    edu4_meta: "Estácio · 2019 - 2022",
    cred_gov_tag: "COMMITTEE & CERTIFICATIONS",
    cred_gov_title: "APDADOS®, certifications & controls",
    edu5_title: "Volunteer Security Committee Member",
    edu5_meta:
      "APDADOS® (National Association of Data Privacy Professionals) · Jul 2021 - Present",
    cred_apdados_desc:
      "I help with security best practices, preparation for ANPD requirements, privacy training and incident response guidance.",
    certs_langs_title: "Certifications & Languages",
    certs_langs_body:
      "Minicurso LGPD (APDADOS®) · Curso LGPD 4.0 (Mariana Toledo) | Portuguese (native) & technical English (reading & documentation)",
    dpo_pill_1: "RoPA & DPIA / RIPD",
    dpo_pill_2: "Vendor contracts (DPA) & notices",
    dpo_pill_3: "16 OWASP flaws mapped",
    dpo_pill_4: "AD logonHours & RBAC",
    projects_eyebrow: "OPEN SOURCE, TESTED ON EVERY CHANGE",
    projects_title: "Open-source projects",
    projects_desc:
      "Eleven public repositories, each one born from a real problem. Every card tells what it does and what you gain from it. All of them have automated tests and documentation in English and Portuguese.",
    filter_all: "All",
    filter_security: "Security & privacy",
    filter_observability: "Monitoring",
    filter_data: "Data & SQL",
    filter_infra: "Infrastructure",
    filter_desktop: "Windows apps",
    proj_pii_desc:
      "Scans logs, files, pull requests and screenshots for CPF, CNPJ, card numbers, emails, passwords, API keys and internal IPs, and masks what it finds. Use it as a command, a Python library or a CI check.",
    proj_watchdog_desc:
      "Watches replication and job queues without writing anything to the database. It compares snapshots over time: if items are still moving it is just a busy hour, if nothing moved for a while the queue is stuck. Sends webhooks and shows a live dashboard.",
    proj_sql_desc:
      "Seven SQL Server problems I solved, rebuilt with fake data: a slow report, duplicated imports, a heavy monthly summary, finding which procedures an app calls, a user with minimum permissions and LGPD data erasure. Each script runs on a real SQL Server 2022 in CI.",
    proj_infra_desc:
      "Scripts and step-by-step guides for daily work with Windows, Active Directory, Linux and Docker: health checks, PostgreSQL backups, signed PowerShell agents, folder permission repair that works in any Windows language and 24 real troubleshooting cases, anonymized.",
    proj_otimizapc_desc:
      "A Windows app that frees disk space and shows the computer's health: junk cleanup for every user, duplicate files found by content, leftovers from uninstalled programs, disk health (S.M.A.R.T.) and a map of what takes up space.",
    proj_tb_desc:
      "Moves email and contacts between Thunderbird and Outlook in either direction, through a simple window or the command line. Keeps folders, original dates, senders and attachments.",
    proj_nfe_desc:
      "Command-line tool and Python library for Brazilian electronic invoice XML files (NF-e/NFC-e): checks access keys, shows what is inside a key or an XML, sorts files into year/month folders and compares a folder with a list of keys.",
    proj_adaudit_desc:
      "Reads Active Directory without changing anything and lists the access nobody is watching: idle accounts, passwords that never expire, disabled accounts still in admin groups and supplier accounts that can log on at any hour. Everything comes out in one HTML report sorted by severity, plus CSV and JSON.",
    proj_ibscbs_desc:
      "Checks the new IBS and CBS fields from Brazil's tax reform in NF-e, NFC-e, CT-e, BP-e, NF3-e and NFS-e, and shows which SEFAZ rejection each mistake would cause, with the rule and page of technical note 2025.002-RTC. It runs in the browser without sending anything out, and also in Python, in SQL (SQL Server, PostgreSQL, MySQL, SQLite), as a local API, a Windows .exe or a GitHub Action.",
    proj_amg_desc:
      "Zero-dependency scanner and SHA-256 rug-pull lockfile guard for CLAUDE.md, .cursorrules, SKILL.md and mcp.json: catches hidden Unicode tags, Trojan Source Bidi markers, tool poisoning, credential exfiltration, unpinned npx/uvx runners and schema drift. Exports SARIF 2.1.0 and HTML reports, and runs 100% locally in the browser.",
    proj_wet_desc:
      "Read-only triage for Windows Security, System, PowerShell and Defender logs across 18 MITRE ATT&CK rules: brute force followed by login (4625 to 4624), Kerberoasting (4769 RC4), LSASS/NTDS dumping, rogue services, shadow-copy deletion, cleared logs (1102) and DCSync (4662). Supports live logs, .evtx, Event Viewer XML and offline browser analysis.",
    gain_label: "What you gain:",
    proj_pii_name: "Personal data & secrets scanner",
    proj_pii_gain: "Leaks are caught before a log goes into a ticket or a key reaches GitHub. CPF, CNPJ and cards are checked by their check digits, so false alarms are rare.",
    proj_watchdog_name: "Queue monitor that tells busy from stuck",
    proj_watchdog_gain: "Alerts only when something is really wrong, so people stop ignoring them, and a recovery notice when things are back to normal.",
    proj_sql_name: "SQL Server fixes from production",
    proj_sql_gain: "Patterns you can adapt, with the before and the after, proven by automated tests instead of only described.",
    proj_infra_name: "Infrastructure operations playbook",
    proj_infra_gain: "Fewer surprises at 3 a.m.: tested steps for common failures and a WhatIf preview before anything changes.",
    proj_otimizapc_name: "OtimizaPC: safe Windows cleanup",
    proj_otimizapc_gain: "Space back without fear: it always shows what will be deleted first and creates a restore point with one click.",
    proj_tb_name: "Thunderbird ⇄ Outlook migrator",
    proj_tb_gain: "Switch email programs without losing history or ending up with every message dated today.",
    proj_nfe_name: "Toolkit for Brazilian e-invoices (NF-e)",
    proj_nfe_gain: "Know in seconds which invoices are missing or have a bad key. Sorting never overwrites a file and starts as a dry run. Nothing to install besides Python.",
    proj_adaudit_name: "Active Directory access review",
    proj_adaudit_gain: "The monthly access review in one command, with the reason and the fix for each item, ready to show a manager or an auditor. It also works from an exported file, so you can audit without touching the domain.",
    proj_ibscbs_name: "IBS/CBS e-invoice checker",
    proj_ibscbs_gain: "You fix the invoice before SEFAZ rejects it, not after. The official tables update themselves every day, so the checks keep up with the rules.",
    proj_amg_name: "AI agent & MCP security guard",
    proj_amg_gain: "You catch prompt injection, leaked API keys and silent MCP server changes in CI or offline before an AI agent runs with your developer permissions.",
    proj_wet_name: "Windows Event Log DFIR triage",
    proj_wet_gain: "Fast incident timeline and containment checklist without changing system state or uploading sensitive .evtx logs anywhere, with optional SHA-256 account anonymization.",
    link_repo: "Repository",
    link_docs: "Docs",
    link_open: "Open",
    exp_eyebrow: "REAL PROJECTS IN PRODUCTION",
    impact_title: "Real cases & career",
    impact_desc:
      "Things I built that are running today, told as the problem, what I did and the result. I left out names, systems and data on purpose; the numbers are real.",
    case_pain: "THE PROBLEM",
    case_solution: "WHAT I DID",
    case_result: "RESULT",
    c0_tag:
      "Python · SQL Server · OData API · IMAP · Desktop 24/7",
    c0_badge:
      "IN PRODUCTION",
    c0_title:
      "Invoice intake hub & daily check",
    c0_pain:
      "Supplier invoice files arrived by email, some got stuck in the business system's import queue, and an old tool made someone pick dates and re-scan more than 40 thousand invoices a month. A missing invoice only showed up on the next manual run.",
    c0_built:
      "A program that stays on all day: it reads invoice files from email, unsticks invoices stuck in the import, pulls new ones from the tax platform every 10 minutes, checks every day for anything missing, warns before the digital certificate expires and restarts any step that hangs.",
    c0_result:
      "The monthly manual sweep became automatic 10-minute cycles of about 4 seconds, plus a daily check that covers every day since a start date (about 12 seconds per day) and downloads only what is missing. Along the way I fixed a 3-hour timezone error and a field the old tool always left empty.",
    c1_tag:
      "Next.js · SQL · SVG · Observability",
    c1_title:
      "Operations dashboard & live infrastructure map",
    c1_pain:
      "The dashboard sent 85 queries to the database every time it opened (one per site) and took 6.8 seconds to load, while more than 80 alert emails arrived every day.",
    c1_built:
      "I replaced the 85 queries with a single one that brings everything already summed up, built an animated map of which service depends on which, and grouped alerts into one summary per hour.",
    c1_result:
      "The dashboard now answers in 0.1 second (it was 6.8) and the 80 daily emails became one summary per hour.",
    c2_tag:
      "Web · Leaflet/OSM · WCAG",
    c2_title:
      "New website with a location finder",
    c2_pain:
      "Visitors could not easily find the nearest location or what it offers, and several pages broke on phones or had text that was hard to read.",
    c2_built:
      "A 7-page website with a map (Leaflet + OpenStreetMap) filtered by city and service, designed for phones first and tested on a 390px screen.",
    c2_result:
      "Zero contrast failures in the automated accessibility audit (WCAG) and a location finder that works on any screen.",
    c3_tag:
      "Windows · WebSockets + mTLS · PowerShell",
    c3_title:
      "Central control of Windows computers & automatic permission repair",
    c3_pain:
      "Hundreds of Windows computers across about 80 sites needed remote commands. After a restart the agent took about 60 seconds to come back, and one wrong folder permission could lock it out.",
    c3_built:
      "An agent that runs as a Windows service over a secure channel (WebSockets + mTLS), rolled out in waves, with a kill switch, digitally signed automatic updates and a permission repair that works in any Windows language.",
    c3_result:
      "Reconnection after a restart went from 60 to 3-7 seconds, and the agent only installs updates with a valid signature.",
    c4_tag:
      "Automation · Retry Logic · Vendor Tickets",
    c4_title:
      "Automatic resend of offline sales invoices",
    c4_pain:
      "When a checkout lost connection it issued invoices in offline mode, and someone had to resend them by hand and open a vendor ticket for every failure.",
    c4_built:
      "A robot that keeps resending with a retry limit, a status page and automatic vendor tickets during business hours.",
    c4_result:
      "Pending invoices clear with no manual work, and failures reach the vendor as tickets on their own.",
    c5_tag:
      "Python · ITSM API · NVR/DVR",
    c5_title:
      "Robot for security camera footage requests",
    c5_pain:
      "Every request for camera footage meant someone logging into the right recorder by hand, among 83 devices from different brands.",
    c5_built:
      "A robot that reads the request in the help desk, connects to the right recorder, downloads the footage, retries on failure and updates the ticket so the requester knows.",
    c5_result:
      "Requests go from start to finish without anyone logging into recorders, and devices with a wrong password are flagged for fixing.",
    c6_tag:
      "ITSM · Email · Data Cleanup",
    c6_title:
      "Help desk emails back on (109k tickets)",
    c6_pain:
      "The help desk's automatic emails had been stuck for weeks with 109 thousand old tickets queued. Turning them back on as they were would have flooded everyone's inbox.",
    c6_built:
      "I cleared the old queue, set up a dedicated sender, kept only the notices that matter for the people involved and closed the 109 thousand old tickets without sending a single email.",
    c6_result:
      "Notifications came back with no flood, tickets close on their own after 3 days and satisfaction surveys go only to new tickets.",
    c7_tag:
      "T-SQL · WMS · Lock Diagnostics",
    c7_title:
      "Faster SQL Server & warehouse productivity",
    c7_pain:
      "Returnable boxes were counted twice when they made more than one trip, sales indicators needed several slow queries and nobody knew where order picking got stuck.",
    c7_built:
      "I removed the double counting (ROW_NUMBER), put the indicators in a single query, timed each picking and checking step and started recording who blocks whom in the database (locks).",
    c7_result:
      "Boxes counted right, indicators in one pass and picking bottlenecks measured together with the lock that causes them.",
    c8_tag:
      "Product Ownership · ERP · Rollouts",
    c8_title:
      "System rollouts as Product Owner",
    c8_pain:
      "Rolling out a new system to dozens of sites risked downtime and confusion, and requests from the business often arrived vague.",
    c8_built:
      "I wrote specs, kept the backlog in Kanban, ran user acceptance tests, wrote migration guides, switched over with the old system running in parallel, rolled out in waves and trained people hands-on.",
    c8_result:
      "Rollouts went out in waves, with the old system as plan B and teams trained from day one.",
    c9_tag:
      "Python · SQL Server · Chat Approvals",
    c9_title:
      "Temporary database access, automated",
    c9_pain:
      "Temporary database access for analysts and vendors was granted by hand, sometimes stayed open after hours, and it was hard to see who was connected.",
    c9_built:
      "A robot that records each request, creates the access with an end time and emails it, cuts it at the end of the workday, sends after-hours requests to a chat poll for approval and shows who is connected.",
    c9_result:
      "Every access has an owner, a time window and an automatic end. Extending it only moves the end time.",
    timeline_heading: "Career",
    tl1_period: "Aug 2021 - Present",
    tl1_title: "IT Administrator, DPO (LGPD) & Solutions Product Owner (PO)",
    tl1_body:
      "I lead system rollouts from start to finish, own the backlog as PO, manage access on Windows Server and Active Directory, handle level 2 remote support, write automations in Python, TypeScript and SQL, and run LGPD compliance across about 80 sites.",
    tl2_period: "Apr 2021 - Aug 2021",
    tl2_title: "Senior IT Assistant: Information Security, LGPD & Level 2 Support",
    tl2_body:
      "Started structuring information security and LGPD compliance, together with level 2 support for headquarters and branches, incident response, Active Directory controls and the first risk mapping.",
    tl3_period: "Sep 2019 - Apr 2021",
    tl3_title: "IT Assistant: Remote & Chat Support, Service Desk & ERP",
    tl3_body:
      "Level 1 and 2 support by remote access, chat and in person, computer and network maintenance, user and access routines in Active Directory and help with system rollouts.",
    tl4_period: "Feb 2016 - Dec 2016 · Municipal Data Processing",
    tl4_title: "IT Intern: Software Development & Technical Support",
    tl4_body:
      "Worked in the development team helping build and maintain internal systems, plus user support and computer and network maintenance.",
    stack_eyebrow: "TOOLBOX",
    stack_title: "Technologies",
    stack_desc:
      "From the server to the browser: Windows Server, Active Directory and databases, all the way to web interfaces, automated tests and privacy governance.",
    stack_g1: "Languages & scripting",
    stack_g2: "Web, APIs & desktop",
    stack_g3: "Windows Server, AD, databases & infra",
    stack_g4: "Privacy, security & product",
    contact_eyebrow: "NEXT STEP",
    contact_title: "Let's talk",
    contact_desc:
      "I'm open to remote roles, in Brazil or abroad, in IT automation, backend development, system rollouts (PO), DevOps and infrastructure, and privacy and security (DPO / AppSec).",
    contact_github: "Visit GitHub (@gavicoding)",
    contact_linkedin: "Connect on LinkedIn",
    contact_copy_email: "Copy Email (gavicoding@gmail.com)",
    footer_note: "Handmade with HTML, CSS & plain JavaScript · Hosted on GitHub Pages",
    toast_copied: "Email copied: gavicoding@gmail.com",
    toast_copy_fallback: "Email: gavicoding@gmail.com",
  },
  pt: {
    skip_link: "Pular para o conteúdo",
    nav_lab: "Laboratório",
    nav_demos: "Vídeos",
    nav_dpo: "Privacidade",
    nav_projects: "Projetos",
    nav_sql: "SQL",
    sql_eyebrow: "SQL SERVER EM PRODUÇÃO",
    sql_title: "Casos reais de SQL Server",
    sql_desc: "Sete problemas de SQL Server que resolvi no trabalho, refeitos com nomes genéricos e dados fictícios. Escolha um para ver o problema, a correção, o resultado e o código antes e depois. Todo script corrigido roda num SQL Server 2022 de verdade a cada mudança (CI).",
    nav_experience: "Experiência",
    nav_stack: "Tecnologias",
    nav_contact: "Contato",
    hero_badge: "REMOTO · BRASIL E EXTERIOR",
    hero_title:
      "Automatizo o trabalho de TI que ninguém deveria fazer à mão, sem descuidar da proteção dos dados.",
    hero_subtitle:
      "Sou Gabriel Souza. Cuido da TI de uma operação com cerca de 80 unidades: escrevo as automações (Python, TypeScript, SQL Server, C#), mantenho os servidores Windows e Linux funcionando, conduzo a implantação de sistemas novos como Product Owner e atuo como DPO, o encarregado de dados da LGPD. Aqui embaixo dá para testar simulações, assistir vídeos de 30 segundos e ler casos reais.",
    cta_lab: "Testar o laboratório",
    cta_github: "GitHub",
    cta_linkedin: "LinkedIn",
    cta_copy_email: "Copiar e-mail",
    term_status: "TERMINAL INTERATIVO",
    term_placeholder: "Digite 'help', 'projects', 'cases'...",
    term_run: "Rodar",
    metric_1_label:
      "Tempo de carregamento de um painel interno depois que troquei 85 consultas separadas ao banco por uma só",
    metric_2_label:
      "Unidades e computadores Windows que atendo, com Active Directory, Linux e suporte remoto",
    metric_3_label:
      "Repositórios públicos com testes automáticos a cada mudança, em Python, TypeScript, SQL, PowerShell e C#",
    metric_4_label:
      "Encarregado de dados (LGPD/GDPR) e 16 falhas de segurança web (OWASP Top 10) encontradas e mapeadas com plano de correção",
    lab_eyebrow: "RODA NO SEU NAVEGADOR",
    lab_title: "Laboratório interativo",
    lab_desc:
      "Três simulações de coisas que construí, rodando aqui mesmo com dados fictícios. Nada sai do seu navegador.",
    dlp_title: "Esconda dados pessoais antes de compartilhar",
    dlp_desc:
      "Edite o texto ou carregue um exemplo. CPF, CNPJ, e-mail, senhas, chaves de API e IPs internos são mascarados enquanto você digita, do mesmo jeito que a minha ferramenta pii-screenshot-guard limpa um log antes de ele ir para um chamado.",
    dlp_preset_ticket: "Exemplo: chamado",
    dlp_preset_ai: "Exemplo: pergunta para IA",
    dlp_preset_config: "Exemplo: log de servidor",
    dlp_input_label: "TEXTO ORIGINAL (DADOS FICTÍCIOS)",
    dlp_output_label: "PRONTO PARA COMPARTILHAR",
    dlp_stat_pii: "Dados pessoais (CPF/CNPJ/e-mail)",
    dlp_stat_secrets: "Senhas e chaves",
    dlp_stat_ips: "IPs internos",
    topo_title: "A fila está cheia ou travada?",
    topo_desc:
      "Fila grande nem sempre é problema. Troque os estados abaixo: o monitor só alerta quando os itens param de andar (STALLED), e não num horário de pico (HIGH_LOAD). É isso que impede a equipe de se acostumar a ignorar alertas.",
    topo_btn_healthy: "Normal",
    topo_btn_high: "Horário de pico (HIGH_LOAD)",
    topo_btn_stalled: "Travada (STALLED)",
    topo_btn_recover: "Recuperar",
    topo_stat_depth: "Itens na fila",
    topo_stat_trend: "Tendência",
    topo_stat_mtls: "Conexão segura (mTLS)",
    topo_stat_policy: "Alerta",
    recon_tag: "Caso real · Central de notas · Dados fictícios",
    recon_title: "Conferência diária de notas fiscais",
    recon_desc: "Cada quadrado é um dia. Para cada dia, o robô pede à plataforma fiscal só a lista de chaves das notas (é rápido), compara com o nosso banco e baixa apenas as notas que faltam. Clique em Conferir ou crie algumas falhas antes.",
    recon_btn_run: "Conferir",
    recon_btn_gaps: "Criar falhas",
    recon_btn_reset: "Recomeçar",
    recon_stat_days: "Dias conferidos",
    recon_stat_total: "Notas comparadas",
    recon_stat_missing: "Faltando",
    recon_stat_fixed: "Recuperadas",
    recon_see_case: "Ler o caso real",
    cmdk_hint: "Ctrl K",
    demos_eyebrow: "VÍDEOS DE 30 SEGUNDOS",
    demos_title: "Veja cada projeto funcionando",
    demos_desc:
      "Onze vídeos curtos, cada um mostrando o problema, o que eu construí e o resultado. Todos os dados são fictícios.",
    demo_synthetic_badge: "DEMO · DADOS FICTÍCIOS",
    demo_open_project: "Abrir projeto",
    demo_01_nav_title: "01 · Detector de dados pessoais e senhas",
    demo_02_nav_title: "02 · Monitor de filas: pico ou travamento?",
    demo_03_nav_title: "03 · Manual de operação de infra",
    demo_04_nav_title: "04 · Correções de SQL Server da produção",
    demo_05_nav_title: "05 · OtimizaPC: limpeza segura do Windows",
    demo_06_nav_title: "06 · Migrador Thunderbird ⇄ Outlook",
    demo_09_nav_title: "09 · Kit de ferramentas para NF-e",
    demo_07_nav_title: "07 · Privacidade e LGPD na prática",
    demo_08_nav_title: "08 · Central de entrada de notas fiscais",
    demo_10_nav_title: "10 · Auditoria de acessos do Active Directory",
    demo_11_nav_title: "11 · Auditor de IBS e CBS na nota fiscal",
    btn_watch_dpo_demo: "Ver o vídeo (32s)",
    btn_watch_demo: "Ver vídeo",
    dpo_eyebrow: "PROTEÇÃO DE DADOS E SEGURANÇA",
    dpo_title: "Privacidade e segurança na prática",
    dpo_desc:
      "Como DPO, ligo o que a lei exige ao que os sistemas fazem de verdade: mapeio onde estão os dados pessoais, documento a base legal e os riscos, atendo os pedidos dos titulares sem quebrar os bancos de dados, encontro e corrijo falhas de segurança e ajudo as equipes a usar IA sem vazar informação. Desde 2021 sou voluntário no Comitê de Segurança da APDADOS®.",
    dpo_step_1: "Mapear os dados",
    dpo_step_2: "Base legal e riscos",
    dpo_step_3: "Pedidos e anonimização",
    dpo_step_4: "Falhas e acessos",
    dpo_step_5: "IA segura e comunidade",
    cred_edu_tag: "FORMAÇÃO",
    cred_edu_title: "Formação e especialização em segurança",
    edu1_title: "Pós-graduação em Segurança Cibernética",
    edu1_meta: "UTFPR · Abr 2026 - Mar 2028",
    edu2_title: "MBA em Gestão de Processos",
    edu2_meta: "Estácio · 2023",
    edu3_title: "Pós-graduação em Segurança da Informação",
    edu3_meta: "Estácio · 2023",
    edu4_title: "Bacharelado em Ciência da Computação",
    edu4_meta: "Estácio · 2019 - 2022",
    cred_gov_tag: "COMITÊ E CERTIFICAÇÕES",
    cred_gov_title: "APDADOS®, certificações e controles",
    edu5_title: "Membro do Comitê de Segurança (Voluntário)",
    edu5_meta:
      "APDADOS® (Associação Nacional dos Profissionais de Privacidade de Dados) · Jul 2021 - Atual",
    cred_apdados_desc:
      "Contribuo com boas práticas de segurança, preparação para as exigências da ANPD, treinamentos de privacidade e orientações de resposta a incidentes.",
    certs_langs_title: "Certificações & Idiomas",
    certs_langs_body:
      "Minicurso LGPD (APDADOS®) · Curso LGPD 4.0 (Mariana Toledo) | Português (nativo) & inglês técnico (leitura e documentação)",
    dpo_pill_1: "RoPA & DPIA / RIPD",
    dpo_pill_2: "Contratos com fornecedores (DPA) e avisos",
    dpo_pill_3: "16 falhas OWASP mapeadas",
    dpo_pill_4: "AD logonHours & RBAC",
    projects_eyebrow: "CÓDIGO ABERTO, TESTADO A CADA MUDANÇA",
    projects_title: "Projetos de código aberto",
    projects_desc:
      "Onze repositórios públicos, cada um nascido de um problema real. Cada card conta o que o projeto faz e o que você ganha com ele. Todos têm testes automáticos e documentação em português e inglês.",
    filter_all: "Todos",
    filter_security: "Segurança e privacidade",
    filter_observability: "Monitoramento",
    filter_data: "Dados e SQL",
    filter_infra: "Infraestrutura",
    filter_desktop: "Apps para Windows",
    proj_pii_desc:
      "Procura CPF, CNPJ, cartão, e-mail, senhas, chaves de API e IPs internos em logs, arquivos, pull requests e prints, e mascara o que encontrar. Funciona como comando, como biblioteca Python ou como etapa do CI.",
    proj_watchdog_desc:
      "Acompanha filas de replicação e de processamento sem gravar nada no banco. Compara fotos da fila ao longo do tempo: se os itens continuam andando, é só horário de pico; se nada andou por um tempo, a fila travou. Avisa por webhook e mostra um painel ao vivo.",
    proj_sql_desc:
      "Sete problemas de SQL Server que resolvi, refeitos com dados fictícios: relatório lento, importação duplicada, resumo mensal pesado, descobrir quais procedures um sistema chama, usuário com permissão mínima e eliminação de dados pela LGPD. Cada script roda num SQL Server 2022 de verdade no CI.",
    proj_infra_desc:
      "Scripts e roteiros para o dia a dia com Windows, Active Directory, Linux e Docker: checagem de saúde, backup de PostgreSQL, agentes PowerShell assinados, reparo de permissões de pasta que funciona em qualquer idioma do Windows e 24 casos reais de solução de problemas, anonimizados.",
    proj_otimizapc_desc:
      "App para Windows que libera espaço e mostra a saúde do computador: limpeza de arquivos temporários de todos os usuários, arquivos duplicados achados pelo conteúdo, restos de programas desinstalados, saúde do disco (S.M.A.R.T.) e um mapa do que ocupa espaço.",
    proj_tb_desc:
      "Leva e-mails e contatos do Thunderbird para o Outlook e vice-versa, por uma janela simples ou pela linha de comando. Mantém as pastas, as datas originais, os remetentes e os anexos.",
    proj_nfe_desc:
      "Ferramenta de linha de comando e biblioteca Python para XMLs de nota fiscal eletrônica (NF-e/NFC-e): confere a chave de acesso, mostra o que tem dentro da chave ou do XML, organiza os arquivos em pastas por ano e mês e compara uma pasta com uma lista de chaves.",
    proj_adaudit_desc:
      "Lê o Active Directory sem alterar nada e mostra os acessos que ninguém está olhando: contas paradas, senhas que nunca expiram, contas desativadas que continuam em grupo de administrador e contas de fornecedor que entram a qualquer hora. Sai tudo num relatório HTML em ordem de gravidade, além de CSV e JSON.",
    proj_ibscbs_desc:
      "Confere os campos novos de IBS e CBS da reforma tributária em NF-e, NFC-e, CT-e, BP-e, NF3-e e NFS-e e mostra qual rejeição da SEFAZ cada erro vai causar, com a regra e a página da NT 2025.002-RTC. Roda no navegador sem mandar nada para fora da sua máquina, e também em Python, em SQL (SQL Server, PostgreSQL, MySQL e SQLite), como API local, programa .exe ou GitHub Action.",
    proj_amg_desc:
      "Auditor sem dependências e proteção SHA-256 contra rug pull para arquivos CLAUDE.md, .cursorrules, SKILL.md e mcp.json: detecta Unicode invisível, Trojan Source, tool poisoning, exfiltração de credenciais, pacotes npx/uvx sem versão fixa e alteração silenciosa de schemas. Exporta SARIF 2.1.0 e HTML, além de rodar 100% no navegador.",
    proj_wet_desc:
      "Triagem DFIR somente leitura de logs Windows (Security, System, PowerShell e Defender) em 18 regras mapeadas ao MITRE ATT&CK: força bruta seguida de logon aceito (4625 -> 4624), Kerberoasting (4769 RC4), dump de LSASS/NTDS, serviços suspeitos, exclusão de Shadow Copies, log apagado (1102) e DCSync (4662). Aceita .evtx, XML e roda direto no navegador.",
    gain_label: "O que você ganha:",
    proj_pii_name: "Detector de dados pessoais e senhas",
    proj_pii_gain: "O vazamento é barrado antes de o log ir para um chamado ou de a chave chegar ao GitHub. CPF, CNPJ e cartão são validados pelo dígito verificador, então quase não há alarme falso.",
    proj_watchdog_name: "Monitor de filas que separa pico de travamento",
    proj_watchdog_gain: "Alerta só quando há problema de verdade, então a equipe para de ignorar os avisos, e manda um aviso de recuperação quando tudo volta ao normal.",
    proj_sql_name: "Correções de SQL Server vindas da produção",
    proj_sql_gain: "Padrões prontos para adaptar, com o antes e o depois, comprovados por teste automático e não só descritos.",
    proj_infra_name: "Manual de operação de infraestrutura",
    proj_infra_gain: "Menos susto de madrugada: passos testados para as falhas mais comuns e simulação com WhatIf antes de mudar qualquer coisa.",
    proj_otimizapc_name: "OtimizaPC: limpeza segura do Windows",
    proj_otimizapc_gain: "Espaço de volta sem medo: sempre mostra antes o que vai apagar e cria um ponto de restauração com um clique.",
    proj_tb_name: "Migrador Thunderbird ⇄ Outlook",
    proj_tb_gain: "Trocar de programa de e-mail sem perder o histórico e sem ficar com todas as mensagens com a data de hoje.",
    proj_nfe_name: "Kit de ferramentas para XML de NF-e",
    proj_nfe_gain: "Saber em segundos quais notas estão faltando ou com chave errada. A organização nunca sobrescreve arquivo e começa só simulando. Não precisa instalar nada além do Python.",
    proj_adaudit_name: "Auditoria de acessos do Active Directory",
    proj_adaudit_gain: "A revisão de acessos do mês num comando só, com o motivo e a correção de cada item, pronta para mostrar ao gestor ou ao auditor. Também funciona a partir de um arquivo exportado, sem mexer no domínio.",
    proj_ibscbs_name: "Auditor de IBS e CBS na nota fiscal",
    proj_ibscbs_gain: "Você corrige a nota antes de a SEFAZ rejeitar, e não depois. As tabelas oficiais se atualizam sozinhas todo dia, então a conferência acompanha as regras.",
    proj_amg_name: "Auditor de agentes IA e servidores MCP",
    proj_amg_gain: "Você barra prompt injection, chaves vazadas e mudanças silenciosas no MCP antes de o agente rodar com as suas permissões, no CI ou direto no navegador.",
    proj_wet_name: "Triagem DFIR de logs do Windows",
    proj_wet_gain: "Linha do tempo do incidente e checklist de contenção sem alterar nada no servidor e sem subir logs .evtx sensíveis para terceiros.",
    link_repo: "Repositório",
    link_docs: "Documentação",
    link_open: "Abrir",
    exp_eyebrow: "PROJETOS REAIS EM PRODUÇÃO",
    impact_title: "Casos reais e trajetória",
    impact_desc:
      "Coisas que construí e que estão rodando hoje, contadas como o problema, o que eu fiz e o resultado. Deixei de fora nomes, sistemas e dados de propósito; os números são reais.",
    case_pain: "O PROBLEMA",
    case_solution: "O QUE EU FIZ",
    case_result: "RESULTADO",
    c0_tag:
      "Python · SQL Server · API OData · IMAP · Desktop 24/7",
    c0_badge:
      "EM PRODUÇÃO",
    c0_title:
      "Central de entrada de notas fiscais e conferência diária",
    c0_pain:
      "Os XMLs das notas dos fornecedores chegavam por e-mail, algumas notas travavam na importação do sistema de gestão e uma ferramenta antiga obrigava alguém a escolher datas e reprocessar mais de 40 mil notas por mês. Nota faltando só aparecia na rodada manual seguinte.",
    c0_built:
      "Um programa que fica ligado o dia todo: lê os XMLs do e-mail, destrava as notas paradas na importação, puxa as notas novas da plataforma fiscal a cada 10 minutos, confere todo dia se falta alguma, avisa antes de o certificado digital vencer e reinicia sozinho qualquer etapa que travar.",
    c0_result:
      "A varredura manual do mês virou ciclos automáticos a cada 10 minutos, de uns 4 segundos cada, e uma conferência diária que cobre todos os dias desde uma data inicial (cerca de 12 segundos por dia) e baixa só o que falta. No caminho, corrigi um erro de fuso de 3 horas e um campo que a ferramenta antiga sempre deixava vazio.",
    c1_tag:
      "Next.js · SQL · SVG · Observabilidade",
    c1_title:
      "Painel de operação e mapa da infraestrutura ao vivo",
    c1_pain:
      "O painel fazia 85 consultas ao banco toda vez que abria (uma por unidade) e levava 6,8 segundos para carregar. Ao mesmo tempo, chegavam mais de 80 e-mails de alerta por dia.",
    c1_built:
      "Troquei as 85 consultas por uma só, que já traz tudo somado, montei um mapa animado mostrando qual serviço depende de qual e juntei os alertas num resumo por hora.",
    c1_result:
      "O painel passou a responder em 0,1 segundo (antes eram 6,8) e os 80 e-mails por dia viraram um resumo por hora.",
    c2_tag:
      "Web · Leaflet/OSM · WCAG",
    c2_title:
      "Site novo com localizador de unidades",
    c2_pain:
      "Quem visitava o site não achava fácil a unidade mais próxima nem o que ela oferece, e várias páginas quebravam no celular ou tinham texto difícil de ler.",
    c2_built:
      "Um site de 7 páginas com mapa (Leaflet + OpenStreetMap) filtrado por cidade e serviço, pensado primeiro para o celular e testado em tela de 390px.",
    c2_result:
      "Nenhuma falha de contraste na auditoria automática de acessibilidade (WCAG) e um localizador que funciona em qualquer tela.",
    c3_tag:
      "Windows · WebSockets + mTLS · PowerShell",
    c3_title:
      "Controle central dos computadores Windows e reparo automático de permissões",
    c3_pain:
      "Centenas de computadores Windows em cerca de 80 unidades precisavam receber comandos à distância. Depois de reiniciar, o agente demorava uns 60 segundos para voltar, e uma permissão de pasta errada podia deixá-lo sem acesso.",
    c3_built:
      "Um agente que roda como serviço do Windows, ligado por um canal seguro (WebSockets + mTLS), implantado em ondas, com botão para desligar tudo, atualização automática com assinatura digital e um reparo de permissões que funciona em qualquer idioma do Windows.",
    c3_result:
      "A reconexão depois de reiniciar caiu de 60 para 3 a 7 segundos, e o agente só instala atualização com assinatura válida.",
    c4_tag:
      "Automação · Retentativas · Chamados",
    c4_title:
      "Reenvio automático de notas emitidas em contingência",
    c4_pain:
      "Quando o caixa perdia a conexão e emitia notas em contingência, alguém tinha que reenviá-las à mão e abrir um chamado no fornecedor para cada falha.",
    c4_built:
      "Um robô que reenvia sem parar, com limite de tentativas, uma página de status e abertura automática de chamado no fornecedor em horário comercial.",
    c4_result:
      "As notas pendentes se resolvem sem trabalho manual, e as falhas chegam ao fornecedor como chamado, sozinhas.",
    c5_tag:
      "Python · API de ITSM · NVR/DVR",
    c5_title:
      "Robô para pedidos de imagens das câmeras",
    c5_pain:
      "Cada pedido de imagem das câmeras exigia alguém entrar à mão no gravador certo, entre 83 aparelhos de marcas diferentes.",
    c5_built:
      "Um robô que lê o pedido no help desk, conecta no gravador certo, baixa as imagens, tenta de novo se falhar e atualiza o chamado para o solicitante saber.",
    c5_result:
      "Os pedidos andam do começo ao fim sem ninguém entrar nos gravadores, e aparelho com senha errada é sinalizado para correção.",
    c6_tag:
      "ITSM · E-mail · Limpeza de Dados",
    c6_title:
      "E-mails do help desk de volta (109 mil chamados)",
    c6_pain:
      "Os e-mails automáticos do help desk estavam parados havia semanas, com 109 mil chamados antigos na fila. Religar do jeito que estava mandaria uma enxurrada de e-mails para todo mundo.",
    c6_built:
      "Limpei a fila antiga, criei um remetente próprio, deixei só os avisos que importam para as pessoas envolvidas e encerrei os 109 mil chamados antigos sem disparar nenhum e-mail.",
    c6_result:
      "Os avisos voltaram sem enxurrada, os chamados fecham sozinhos depois de 3 dias e a pesquisa de satisfação vai só para os chamados novos.",
    c7_tag:
      "T-SQL · WMS · Diagnóstico de Locks",
    c7_title:
      "SQL Server mais rápido e produtividade do depósito",
    c7_pain:
      "Caixas retornáveis eram contadas em dobro quando faziam mais de uma viagem, os indicadores de venda precisavam de várias consultas lentas e ninguém sabia onde a separação de pedidos travava.",
    c7_built:
      "Tirei a contagem dupla (ROW_NUMBER), juntei os indicadores numa consulta só, medi o tempo de cada etapa da separação e da conferência e passei a registrar quem bloqueia quem no banco (locks).",
    c7_result:
      "Caixas contadas certo, indicadores numa passada só e os gargalos da separação medidos junto com o bloqueio que os causa.",
    c8_tag:
      "Product Ownership · ERP · Rollouts",
    c8_title:
      "Implantação de sistemas como Product Owner",
    c8_pain:
      "Implantar um sistema novo em dezenas de unidades arriscava parada e confusão, e os pedidos das áreas muitas vezes chegavam vagos.",
    c8_built:
      "Escrevi as especificações, organizei o backlog no Kanban, fiz a homologação com os usuários, escrevi os roteiros de migração, fiz a virada com o sistema antigo em paralelo, implantei em ondas e treinei as equipes na prática.",
    c8_result:
      "As implantações saíram em ondas, com o sistema antigo como plano B e as equipes treinadas desde o primeiro dia.",
    c9_tag:
      "Python · SQL Server · Aprovação via Chat",
    c9_title:
      "Acesso temporário ao banco de dados, automático",
    c9_pain:
      "O acesso temporário ao banco para analistas e fornecedores era liberado à mão, às vezes ficava aberto depois do expediente e não dava para ver com facilidade quem estava conectado.",
    c9_built:
      "Um robô que registra cada pedido, cria o acesso com horário para acabar e manda por e-mail, corta no fim do expediente, leva os pedidos fora de hora para aprovação numa enquete no chat e mostra quem está conectado.",
    c9_result:
      "Todo acesso tem dono, horário e fim automático. Prorrogar só muda o horário de término.",
    timeline_heading: "Trajetória",
    tl1_period: "Ago 2021 - Atual",
    tl1_title: "Administrador de TI, DPO (LGPD) e Product Owner de soluções",
    tl1_body:
      "Conduzo a implantação de sistemas do começo ao fim, cuido do backlog como PO, dos acessos no Windows Server e no Active Directory, do suporte N2 remoto, das automações em Python, TypeScript e SQL e da adequação à LGPD em cerca de 80 unidades.",
    tl2_period: "Abr 2021 - Ago 2021",
    tl2_title: "Auxiliar de TI Sênior: segurança da informação, LGPD e suporte N2",
    tl2_body:
      "Comecei a estruturar a segurança da informação e a adequação à LGPD, junto com o suporte N2 para matriz e filiais, resposta a incidentes, controles no Active Directory e o primeiro mapeamento de riscos.",
    tl3_period: "Set 2019 - Abr 2021",
    tl3_title: "Auxiliar de TI: suporte remoto, service desk e sistemas",
    tl3_body:
      "Suporte N1 e N2 por acesso remoto, chat e presencial, manutenção de computadores e rede, rotinas de usuários e acessos no Active Directory e apoio na implantação de sistemas.",
    tl4_period: "Fev 2016 - Dez 2016 · Processamento de dados municipal",
    tl4_title: "Estagiário de TI: desenvolvimento de sistemas e suporte",
    tl4_body:
      "Trabalhei na equipe de desenvolvimento ajudando a criar e manter sistemas internos, além de dar suporte aos usuários e fazer manutenção de computadores e rede.",
    stack_eyebrow: "FERRAMENTAS",
    stack_title: "Tecnologias",
    stack_desc:
      "Do servidor ao navegador: Windows Server, Active Directory e bancos de dados, até interfaces web, testes automáticos e governança de privacidade.",
    stack_g1: "Linguagens e scripts",
    stack_g2: "Web, APIs e desktop",
    stack_g3: "Windows Server, AD, bancos e infra",
    stack_g4: "Privacidade, segurança e produto",
    contact_eyebrow: "PRÓXIMO PASSO",
    contact_title: "Vamos conversar",
    contact_desc:
      "Estou aberto a vagas remotas, no Brasil ou fora, em automação de TI, desenvolvimento backend, implantação de sistemas (PO), DevOps e infraestrutura, e privacidade e segurança (DPO / AppSec).",
    contact_github: "Ver o GitHub (@gavicoding)",
    contact_linkedin: "Conectar no LinkedIn",
    contact_copy_email: "Copiar E-mail (gavicoding@gmail.com)",
    footer_note: "Feito à mão com HTML, CSS e JavaScript puro · Hospedado no GitHub Pages",
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
      "1. pii-screenshot-guard   (Python)     finds CPF, passwords & keys before you share",
      "2. queue-health-watchdog  (TypeScript) tells a busy queue from a stuck one",
      "3. tsql-retail-ops        (T-SQL)      7 SQL Server fixes from production, tested",
      "4. infra-ops-playbook     (PS/Bash)    Windows/Linux scripts & 24 real cases",
      "5. OtimizaPC              (C#/.NET 8)  safe Windows cleanup with restore point",
      "6. Thunderbird-Outlook    (Python)     moves mail & contacts, keeps the dates",
      "7. nfe-toolkit            (Python)     checks, sorts & reconciles NF-e XMLs",
      "8. ad-access-audit        (PowerShell) read-only AD review: idle, admins, passwords",
      "9. auditor-ibs-cbs        (Python/JS)  checks IBS/CBS in e-invoices before SEFAZ",
      "10. agent-mcp-guard       (Python/JS)  audits AI agent rules & MCP rug pulls (SARIF)",
      "11. win-event-triage      (PS/Python)  read-only Windows event DFIR (MITRE ATT&CK)",
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
      "1. pii-screenshot-guard   (Python)     acha CPF, senhas e chaves antes de compartilhar",
      "2. queue-health-watchdog  (TypeScript) separa fila em pico de fila travada",
      "3. tsql-retail-ops        (T-SQL)      7 correções de SQL Server da produção, testadas",
      "4. infra-ops-playbook     (PS/Bash)    scripts Windows/Linux e 24 casos reais",
      "5. OtimizaPC              (C#/.NET 8)  limpeza segura do Windows com restauração",
      "6. Thunderbird-Outlook    (Python)     migra e-mails e contatos mantendo as datas",
      "7. nfe-toolkit            (Python)     confere, organiza e concilia XMLs de NF-e",
      "8. ad-access-audit        (PowerShell) revisa os acessos do AD sem alterar nada",
      "9. auditor-ibs-cbs        (Python/JS)  confere IBS/CBS na nota antes da SEFAZ",
      "10. agent-mcp-guard       (Python/JS)  audita agentes IA, MCP e rug pulls (SARIF)",
      "11. win-event-triage      (PS/Python)  triagem DFIR de logs Windows (MITRE ATT&CK)",
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
      "$ ./conferir --diario --dados-ficticios",
      "Indo para o Laboratório e rodando a conferência diária...",
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
      title: "01. Find out where personal data lives (RoPA)",
      summary:
        "Before protecting data you need to know where it is. I map every place personal and sensitive data passes through: checkout systems, the business system, back office, web portals, integrations and paper archives.",
      deliverables: [
        "A record of processing (RoPA) linking each process to its tables, owner and how long data is kept.",
        "Sensitive data kept apart from regular customer records.",
        "Paper archive audit, with a documented and certified disposal process.",
      ],
    },
    {
      tag: "LGPD Arts. 7 & 11 · Accountability",
      title: "02. Legal basis, vendor contracts and risk reports (DPIA/RIPD)",
      summary:
        "Every use of personal data needs a legal reason, a risk assessment and clear contracts with the vendors that handle it.",
      deliverables: [
        "Impact reports (DPIA/RIPD) describing the risks and the technical safeguards in place.",
        "Privacy notices and vendor contract clauses (DPA) saying who is controller and who is processor.",
        "Ready for what the ANPD asks, with privacy thought in from the start (Privacy by Design).",
      ],
    },
    {
      tag: "LGPD Art. 18 · Data integrity",
      title: "03. People's requests and irreversible anonymization",
      summary:
        "When someone asks to see, fix or delete their data, it has to happen without breaking the database or erasing invoices the law requires us to keep.",
      deliverables: [
        "A request flow from the DPO's triage to a technical step that leaves an audit trail.",
        "Irreversible anonymization that keeps totals, reports and history working.",
        "Fake data instead of real customer data in test environments.",
        "Tested T-SQL on SQL Server 2022: see case 07 in the SQL Casebook.",
      ],
    },
    {
      tag: "OWASP Top 10 · Least privilege",
      title: "04. Fixing security flaws and tightening access",
      summary:
        "Privacy only holds if the systems are secure. This is where DPO work meets infrastructure: testing web systems like an attacker would, controlled vendor access and email protection.",
      deliverables: [
        "Web security tests that found 16 critical and medium flaws (OWASP Top 10), each with a fix plan.",
        "Vendor access tied to a ticket, limited by schedule (AD logonHours), with forced logoff and VPN.",
        "Minimum permissions per role, email authentication (DKIM/SPF/DMARC), antivirus and digital forensics.",
      ],
    },
    {
      tag: "Safe AI · APDADOS® since 2021",
      title: "05. Using AI without leaking data, and giving back to the community",
      summary:
        "Teams want to use AI tools. My job is to make that safe, and to share what I learn with other privacy professionals.",
      deliverables: [
        "Filters that block CPF/CNPJ, keys and internal IPs before anything is sent to an external AI tool.",
        "Short trainings on privacy, safe disposal and responsible use of AI.",
        "Volunteer member of the APDADOS® Security Committee since July 2021.",
      ],
    },
  ],
  pt: [
    {
      tag: "LGPD Arts. 37 e 50 · GDPR Art. 30",
      title: "01. Descobrir onde estão os dados pessoais (RoPA)",
      summary:
        "Antes de proteger os dados é preciso saber onde eles estão. Mapeio todos os lugares por onde passam dados pessoais e sensíveis: caixas, sistema de gestão, retaguarda, portais web, integrações e arquivos em papel.",
      deliverables: [
        "Registro das operações de tratamento (RoPA) ligando cada processo às suas tabelas, ao responsável e ao prazo de guarda.",
        "Dados sensíveis separados dos cadastros comuns.",
        "Auditoria do arquivo em papel, com processo de descarte documentado e certificado.",
      ],
    },
    {
      tag: "LGPD Arts. 7 e 11 · Prestação de contas",
      title: "02. Base legal, contratos com fornecedores e relatório de impacto (RIPD)",
      summary:
        "Todo uso de dado pessoal precisa de um motivo previsto em lei, de uma avaliação de risco e de contratos claros com os fornecedores que lidam com esses dados.",
      deliverables: [
        "Relatórios de impacto (RIPD/DPIA) descrevendo os riscos e as proteções técnicas adotadas.",
        "Avisos de privacidade e cláusulas de contrato (DPA) deixando claro quem é controlador e quem é operador.",
        "Preparado para o que a ANPD pede, com a privacidade pensada desde o início (Privacy by Design).",
      ],
    },
    {
      tag: "LGPD Art. 18 · Integridade dos dados",
      title: "03. Pedidos dos titulares e anonimização irreversível",
      summary:
        "Quando alguém pede para ver, corrigir ou apagar seus dados, isso precisa acontecer sem quebrar o banco e sem apagar as notas que a lei manda guardar.",
      deliverables: [
        "Fluxo do pedido desde a triagem do DPO até a execução técnica, com registro para auditoria.",
        "Anonimização irreversível que mantém totais, relatórios e histórico funcionando.",
        "Dados fictícios no lugar de dados reais de clientes nos ambientes de teste.",
        "T-SQL testado em SQL Server 2022: veja o caso 07 nos casos de SQL.",
      ],
    },
    {
      tag: "OWASP Top 10 · Permissão mínima",
      title: "04. Corrigir falhas de segurança e apertar os acessos",
      summary:
        "Privacidade só se sustenta se os sistemas forem seguros. Aqui o trabalho de DPO encontra a infraestrutura: testar os sistemas web como um atacante faria, controlar o acesso de fornecedores e proteger o e-mail.",
      deliverables: [
        "Testes de segurança web que encontraram 16 falhas críticas e médias (OWASP Top 10), cada uma com plano de correção.",
        "Acesso de fornecedor ligado a um chamado, limitado por horário (AD logonHours), com logoff forçado e VPN.",
        "Permissão mínima por função, autenticação de e-mail (DKIM/SPF/DMARC), antivírus e perícia digital.",
      ],
    },
    {
      tag: "IA segura · APDADOS® desde 2021",
      title: "05. Usar IA sem vazar dados e contribuir com a comunidade",
      summary:
        "As equipes querem usar ferramentas de IA. Meu papel é tornar isso seguro e dividir o que aprendo com outros profissionais de privacidade.",
      deliverables: [
        "Filtros que barram CPF/CNPJ, chaves e IPs internos antes de qualquer envio para uma ferramenta de IA externa.",
        "Treinamentos curtos sobre privacidade, descarte seguro e uso responsável de IA.",
        "Membro voluntário do Comitê de Segurança da APDADOS® desde julho de 2021.",
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
      tag: "pii-screenshot-guard · Python · OCR",
      title: "Personal data & secrets scanner",
      desc: "Finds CPF, CNPJ, cards, keys and internal IPs in text and screenshots, masks them and blocks a pull request that would leak them.",
    },
    pt: {
      tag: "pii-screenshot-guard · Python · OCR",
      title: "Detector de dados pessoais e senhas",
      desc: "Acha CPF, CNPJ, cartão, chaves e IPs internos em textos e prints, mascara tudo e bloqueia o pull request que iria vazar esses dados.",
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
      tag: "queue-health-watchdog · TypeScript",
      title: "Queue monitor: busy or stuck?",
      desc: "Watches the queues without touching the database and only alerts when items really stop moving, not during a busy hour.",
    },
    pt: {
      tag: "queue-health-watchdog · TypeScript",
      title: "Monitor de filas: pico ou travamento?",
      desc: "Acompanha as filas sem mexer no banco e só alerta quando os itens param de andar de verdade, e não num horário de pico.",
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
      tag: "infra-ops-playbook · PowerShell · Bash",
      title: "Infrastructure operations playbook",
      desc: "About 400 Windows computers across 80 sites: signed agents, folder permission repair in any language and automatic backups.",
    },
    pt: {
      tag: "infra-ops-playbook · PowerShell · Bash",
      title: "Manual de operação de infraestrutura",
      desc: "Cerca de 400 computadores Windows em 80 unidades: agentes assinados, reparo de permissões em qualquer idioma e backup automático.",
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
      tag: "tsql-retail-ops-analytics · T-SQL",
      title: "SQL Server fixes from production",
      desc: "Removing double counts, indicators in a single query, seeing who blocks whom and users with only the access they need.",
    },
    pt: {
      tag: "tsql-retail-ops-analytics · T-SQL",
      title: "Correções de SQL Server da produção",
      desc: "Fim da contagem dupla, indicadores numa consulta só, quem bloqueia quem no banco e usuário só com o acesso necessário.",
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
      tag: "OtimizaPC · C# · .NET 8",
      title: "OtimizaPC: safe Windows cleanup",
      desc: "Frees disk space showing everything before deleting, finds duplicates, checks disk health and creates a restore point in one click.",
    },
    pt: {
      tag: "OtimizaPC · C# · .NET 8",
      title: "OtimizaPC: limpeza segura do Windows",
      desc: "Libera espaço mostrando tudo antes de apagar, acha duplicados, confere a saúde do disco e cria ponto de restauração com um clique.",
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
      tag: "Thunderbird-Outlook · Python",
      title: "Thunderbird ⇄ Outlook migrator",
      desc: "Moves email and contacts in either direction keeping folders, original dates and attachments.",
    },
    pt: {
      tag: "Thunderbird-Outlook · Python",
      title: "Migrador Thunderbird ⇄ Outlook",
      desc: "Leva e-mails e contatos nos dois sentidos mantendo as pastas, as datas originais e os anexos.",
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
      title: "Privacy & security in practice",
      desc: "Mapping personal data, risk reports, irreversible anonymization, 16 security flaws mapped, controlled access and safe use of AI.",
    },
    pt: {
      tag: "LGPD / GDPR · OWASP · APDADOS®",
      title: "Privacidade e segurança na prática",
      desc: "Mapeamento de dados, relatório de impacto, anonimização irreversível, 16 falhas mapeadas, acessos controlados e uso seguro de IA.",
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
      tag: "Python · OData API · daily check",
      title: "Invoice intake hub",
      desc: "Reads invoices from email, unsticks the import queue, syncs every 10 minutes and checks daily for missing invoices, downloading only those.",
    },
    pt: {
      tag: "Python · API OData · conferência diária",
      title: "Central de entrada de notas fiscais",
      desc: "Lê as notas do e-mail, destrava a fila de importação, sincroniza a cada 10 minutos e confere todo dia o que falta, baixando só isso.",
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
      tag: "nfe-toolkit · Python · CLI",
      title: "Toolkit for Brazilian e-invoices (NF-e)",
      desc: "Checks access keys, sorts XML files by year and month without overwriting anything and finds which invoices are missing from a folder.",
    },
    pt: {
      tag: "nfe-toolkit · Python · CLI",
      title: "Kit de ferramentas para XML de NF-e",
      desc: "Confere a chave de acesso, organiza os XMLs por ano e mês sem sobrescrever nada e mostra quais notas faltam numa pasta.",
    },
  },
  {
    id: "10",
    mp4: "assets/videos/10-ad-access-audit.mp4",
    poster: "assets/videos/posters/10-ad-access-audit.jpg",
    duration: "0:30",
    href: "https://github.com/gavicoding/ad-access-audit",
    external: true,
    en: {
      tag: "ad-access-audit · PowerShell · read-only",
      title: "Active Directory access review",
      desc: "One command reads the domain without changing anything and lists idle accounts, admins to review and risky passwords in a single report sorted by severity.",
    },
    pt: {
      tag: "ad-access-audit · PowerShell · só leitura",
      title: "Auditoria de acessos do Active Directory",
      desc: "Um comando lê o domínio sem alterar nada e lista contas paradas, administradores para revisar e senhas de risco num relatório só, em ordem de gravidade.",
    },
  },
  {
    id: "11",
    mp4: "assets/videos/11-auditor-ibs-cbs.mp4",
    poster: "assets/videos/posters/11-auditor-ibs-cbs.jpg",
    duration: "0:30",
    href: "https://gavicoding.github.io/auditor-ibs-cbs/",
    external: true,
    en: {
      tag: "auditor-ibs-cbs · Python · JavaScript · SQL",
      title: "IBS/CBS e-invoice checker",
      desc: "Reads the invoice XMLs before they go to SEFAZ and shows each IBS/CBS mistake with the rejection code, the rule and the page of the technical note, plus how to fix it.",
    },
    pt: {
      tag: "auditor-ibs-cbs · Python · JavaScript · SQL",
      title: "Auditor de IBS e CBS na nota fiscal",
      desc: "Lê os XMLs antes de irem para a SEFAZ e mostra cada erro de IBS e CBS com o código de rejeição, a regra e a página da nota técnica, além de como corrigir.",
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
    running: "CONFERINDO",
    synced: "EM DIA",
    recovered: (n) => `${n} RECUPERADAS`,
    intro: "[início] Um mês de notas fictícias carregado, com algumas falhas. Clique em Conferir.",
    start: (days) => `[conferindo] Listando as chaves de ${days} dias e comparando com o banco...`,
    ok: (dd, total) => `[ok]    dia ${dd}: ${total} chaves na plataforma, todas no banco`,
    gap: (dd, total, missing) => `[falta]  dia ${dd}: ${total} na plataforma, ${missing} faltando no banco`,
    fetch: (missing) => `[busca] baixando só essas ${missing} notas pela chave... gravadas`,
    done: (days, missing, fixed) =>
      missing
        ? `[fim]   ${days} dias conferidos, ${fixed} de ${missing} notas faltantes recuperadas.`
        : `[fim]   ${days} dias conferidos, nada faltando. Banco em dia.`,
    gaps: (n) => `[início] ${n} dias novos com notas faltando. Clique em Conferir.`,
    reset: "[início] Mês novo carregado. Clique em Conferir.",
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
      sim: "Run the invoice check",
      demos: "Go to Video Demos",
      dpo: "Go to Privacy (DPO)",
      projects: "Go to Projects",
      sql: "Go to SQL Casebook",
      cases: "Go to Real Cases",
      stack: "Go to Technologies",
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
      lab: "Ir para o Laboratório",
      sim: "Rodar a conferência de notas",
      demos: "Ir para os Vídeos",
      dpo: "Ir para Privacidade (DPO)",
      projects: "Ir para os Projetos",
      sql: "Ir para os Casos de SQL",
      cases: "Ir para os Casos reais",
      stack: "Ir para as Tecnologias",
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
