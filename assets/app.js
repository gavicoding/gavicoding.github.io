"use strict";

const EMAIL_ADDRESS = "gavicoding@gmail.com";

const TRANSLATIONS = {
  en: {
    skip_link: "Skip to main content",
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_impact: "Impact",
    nav_privacy: "Privacy & AppSec",
    nav_stack: "Stack",
    nav_contact: "Contact",
    hero_badge: "Remote · Async-First · Brazil & International",
    hero_title: "Building resilient automation, hybrid infrastructure, and privacy-safe systems.",
    hero_subtitle:
      "I'm Gabriel Souza: an IT Automation & Software Engineer, Solutions Product Owner (PO), and DPO (LGPD/GDPR). Across Python, TypeScript, Next.js, T-SQL, C# (.NET), Windows Server, and Active Directory, I lead end-to-end ERP/system deployments, cybersecurity hardening, and scalable automation.",
    cta_projects: "Explore Projects",
    cta_github: "GitHub Profile",
    cta_linkedin: "LinkedIn",
    cta_copy_email: "Copy Email",
    hero_chip_1: "UTFPR Cybersecurity",
    hero_chip_2: "APDADOS® Security Committee",
    hero_chip_3: "Windows Server · AD · Linux",
    hero_chip_4: "Python · TS · T-SQL · PO",
    metric_1_label: "Next.js dashboard TTFB after replacing 85 parallel queries with a single aggregation",
    metric_2_label: "Multi-branch stores & Windows endpoints supported across hybrid Linux + AD ops",
    metric_3_label: "Open-source repositories spanning Python, TypeScript, T-SQL, Bash/PS & C#",
    metric_4_label: "DPO governance, 16 OWASP Top 10 flaws mapped + hardening & Zero-Trust DLP",
    about_title: "About Me, Education & Credentials",
    about_desc:
      "From L1/L2 remote support and Windows Server administration to full-stack automation, Solutions PO, and DPO governance.",
    about_bio_title: "Who I Am",
    about_lead:
      "I hold a B.Sc. in Computer Science, an MBA in Process Management, a Postgraduate degree in Information Security, and I am pursuing a Postgraduate specialization in Cybersecurity at UTFPR. Since 2021, I also serve as a volunteer Security Committee Member at APDADOS® (Brazilian National Association of Data Privacy Professionals).",
    about_story:
      "My day-to-day work connects hands-on infrastructure (Windows Server, Active Directory access governance, Linux/Docker, remote and chat-based L2 troubleshooting) with software automation, ERP/system deployments as Product Owner (PO), and practical LGPD/GDPR and OWASP Top 10 security remediation.",
    about_hl1: "5+ yrs IT Admin & DPO",
    about_hl2: "UTFPR Cybersecurity",
    about_hl3: "APDADOS® Security Committee",
    about_hl4: "Hybrid Infra & Remote Support",
    edu_card_title: "Education & Volunteering",
    edu1_title: "Postgraduate Specialization in Cybersecurity",
    edu1_meta: "UTFPR · Apr 2026 - Mar 2028",
    edu2_title: "MBA in Process Management",
    edu2_meta: "Estácio · 2023",
    edu3_title: "Postgraduate Degree in Information Security",
    edu3_meta: "Estácio · 2023",
    edu4_title: "B.Sc. in Computer Science",
    edu4_meta: "Estácio · 2019 - 2022",
    edu5_title: "Security Committee Member (Volunteer)",
    edu5_meta: "APDADOS® · Jul 2021 - Present",
    certs_langs_title: "Certifications & Languages",
    certs_langs_body:
      "Minicurso LGPD (APDADOS®) & Curso LGPD 4.0 (Mariana Toledo) | Portuguese (Native) & Technical English (Reading, Docs & Async)",
    exp_title: "What I Do & Career Journey",
    exp_desc:
      "Three core engineering pillars backed by nearly a decade of real-world IT operations, software development, and security governance.",
    pil1_tag: "Windows Server · AD · Remote & Chat Support",
    pil1_title: "Hybrid Infrastructure, Access Control & L2 Ops",
    pil1_body:
      "Administration of Windows Server, Active Directory (GPOs, RBAC access control, SID ACL healing, AD logonHours), Linux/Docker, Nginx mTLS, VPNs, SQL Server, Level 2 Service Desk, remote desktop and chat-based support, and GLPI ITSM across ~80 branches.",
    pil2_tag: "DPO (LGPD/GDPR) · OWASP AppSec · AI DLP",
    pil2_title: "Privacy Governance & Offensive Security",
    pil2_body:
      "Practical LGPD/GDPR DPO programs (RoPA, DPIA/RIPD, legal bases, Art. 18 rights, vendor DPAs, irreversible anonymization, certified disposal), OWASP Top 10 pentesting (16 critical/medium flaws mapped with remediation & hardening plans), digital forensics, and Zero-Trust AI DLP.",
    pil3_tag: "Python / TS / Next.js · PO · ERP Rollouts",
    pil3_title: "Software Engineering, PO & System Deployments",
    pil3_body:
      "Production automation and dashboards in Python, TypeScript, Next.js, Node.js, T-SQL, C# (.NET), and Playwright, combined with Solutions Product Ownership (PO), Kanban specs, UAT sign-off, migration runbooks, parallel cutovers, wave rollouts, and hands-on team training.",
    timeline_heading: "Sanitized Career Progression",
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
    projects_title: "Featured Open-Source Projects",
    projects_desc:
      "Every project below ships with automated tests or linters in GitHub Actions, bilingual documentation, and zero proprietary data.",
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
    impact_title: "Sanitized Production Case Studies (Before -> After)",
    impact_desc:
      "Measurable architecture, web engineering, and reliability improvements delivered across distributed retail, warehouse, and IT operations.",
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
      "Acted as Solutions Product Owner translating business needs into specs, Kanban pipelines, UAT sign-off, migration runbooks, parallel cutovers, wave rollouts, and hands-on team training, plus CSP-safe UI plugins (~13 KB theme) and Outlook-safe HTML/SVG alert templates.",
    privacy_title: "Data Privacy (LGPD / GDPR), DPO & AppSec",
    privacy_desc:
      "Practical DPO governance, offensive security remediation, relational anonymization, and AI safety bridging regulation and engineering.",
    priv1_title: "DPO Governance, RoPA & DPIA / RIPD",
    priv1_body:
      "Structured LGPD (Law 13.709/2018) & GDPR compliance programs: RoPA inventories, Arts. 7 & 11 legal bases, Art. 18 Data Subject Rights workflows, and full DPIA / RIPD across retail, back-office, and physical archives.",
    priv2_title: "OWASP AppSec & Digital Forensics",
    priv2_body:
      "Executed web penetration tests mapping 16 critical and medium vulnerabilities across OWASP Top 10 (injections, broken auth, data exposure) with code remediation & server-hardening plans, alongside network traffic inspection and OS/media digital forensics.",
    priv3_title: "Irreversible Anonymization & Disposal",
    priv3_body:
      "Defined irreversible anonymization patterns in relational schemas when hard deletion would break referential integrity or audit trails, paired with sanitized test datasets and certified physical document destruction.",
    priv4_title: "Third-Party DPAs & Zero-Trust AI",
    priv4_body:
      "Authored Privacy Notices and vendor DPAs, backed by Zero-Trust DLP boundaries and automated Vision checks barring PII and internal secrets from external AI platforms.",
    priv5_title: "Time-Boxed Access & Hardening",
    priv5_body:
      "Designed ticket-validated temporary vendor access (AD logonHours, expiration alerts, RDS logoff, encrypted VPN DB tunnels, least-privilege RBAC) alongside Privacy by Design, DKIM/SPF/DMARC, and ClamAV.",
    priv6_title: "APDADOS® Committee & Corporate Training",
    priv6_body:
      "Active Security Committee Member at APDADOS® contributing to cybersecurity, ANPD regulatory readiness, and LGPD guidance, alongside modular corporate awareness tracks on data governance, secure disposal, and responsible AI adoption.",
    stack_title: "Technical Stack",
    stack_desc:
      "End-to-end versatility from Windows Server, Active Directory, and database internals to modern web interfaces and privacy tooling.",
    stack_g1: "Languages & Scripting",
    stack_g2: "Web, APIs & Desktop",
    stack_g3: "Windows Server, AD, Databases & Infra",
    stack_g4: "Governance, Security & Operations",
    contact_title: "Let's Work Together",
    contact_desc:
      "Open to remote opportunities in Brazil and internationally across IT Automation, Software/Backend Engineering, Systems Implementation (PO), Hybrid Infrastructure, and Privacy/AppSec.",
    contact_github: "Visit GitHub (@gavicoding)",
    contact_linkedin: "Connect on LinkedIn",
    contact_copy_email: "Copy Email (gavicoding@gmail.com)",
    footer_note: "Built with semantic HTML5, CSS3 & Vanilla JS · Hosted on GitHub Pages",
    toast_copied: "Email copied: gavicoding@gmail.com",
    toast_copy_fallback: "Email: gavicoding@gmail.com",
  },
  pt: {
    skip_link: "Ir para o conteúdo principal",
    nav_about: "Sobre",
    nav_experience: "Atuação",
    nav_projects: "Projetos",
    nav_impact: "Impacto",
    nav_privacy: "Privacidade & AppSec",
    nav_stack: "Tecnologias",
    nav_contact: "Contato",
    hero_badge: "Remoto · Async-First · Brasil & Exterior",
    hero_title: "Construindo automações resilientes, infraestrutura híbrida e sistemas seguros com privacidade.",
    hero_subtitle:
      "Sou Gabriel Souza: Engenheiro de Automação de TI e Software, Product Owner (PO) de Soluções e DPO (LGPD/GDPR). Unindo Python, TypeScript, Next.js, T-SQL, C# (.NET), Windows Server e Active Directory, conduzo implantações completas de ERPs/sistemas, segurança cibernética e automações em produção.",
    cta_projects: "Ver Projetos",
    cta_github: "Perfil no GitHub",
    cta_linkedin: "LinkedIn",
    cta_copy_email: "Copiar E-mail",
    hero_chip_1: "Pós Segurança Cibernética UTFPR",
    hero_chip_2: "Comitê Segurança APDADOS®",
    hero_chip_3: "Windows Server · AD · Linux",
    hero_chip_4: "Python · TS · T-SQL · PO",
    metric_1_label: "TTFB do dashboard Next.js após trocar 85 consultas paralelas por uma única agregação",
    metric_2_label: "Filiais & estações Windows atendidas em operação híbrida Linux + Active Directory",
    metric_3_label: "Repositórios open-source testados no CI em Python, TypeScript, T-SQL, Bash/PS e C#",
    metric_4_label: "Governança DPO, 16 falhas OWASP Top 10 mapeadas + hardening e DLP Zero-Trust",
    about_title: "Sobre Mim, Formação & Credenciais",
    about_desc:
      "Do suporte remoto N1/N2 e administração Windows Server à automação full-stack, Product Ownership (PO) e governança de privacidade como DPO.",
    about_bio_title: "Quem Sou Eu",
    about_lead:
      "Sou Bacharel em Ciência da Computação, MBA em Gestão de Processos, Pós-graduado em Segurança da Informação e pós-graduando em Segurança Cibernética pela UTFPR. Desde 2021, também atuo como Membro voluntário do Comitê de Segurança da APDADOS® (Associação Nacional dos Profissionais de Privacidade de Dados).",
    about_story:
      "Minha rotina une infraestrutura prática (Windows Server, Active Directory e controle de acessos, Linux/Docker, atendimento remoto e via chat em nível N2) com desenvolvimento de automações, implantações de ERPs e sistemas como Product Owner (PO), além de conformidade LGPD/GDPR e remediação de falhas OWASP Top 10.",
    about_hl1: "5+ anos Adm. TI & DPO",
    about_hl2: "Segurança Cibernética UTFPR",
    about_hl3: "Comitê APDADOS®",
    about_hl4: "Infra Híbrida & Atendimento Remoto",
    edu_card_title: "Formação Acadêmica & Voluntariado",
    edu1_title: "Pós-graduação em Segurança Cibernética",
    edu1_meta: "UTFPR · Abr 2026 - Mar 2028",
    edu2_title: "MBA em Gestão de Processos",
    edu2_meta: "Estácio · 2023",
    edu3_title: "Pós-graduação em Segurança da Informação",
    edu3_meta: "Estácio · 2023",
    edu4_title: "Bacharelado em Ciência da Computação",
    edu4_meta: "Estácio · 2019 - 2022",
    edu5_title: "Membro do Comitê de Segurança (Voluntário)",
    edu5_meta: "APDADOS® · Jul 2021 - Atual",
    certs_langs_title: "Certificações & Idiomas",
    certs_langs_body:
      "Minicurso LGPD (APDADOS®) & Curso LGPD 4.0 (Mariana Toledo) | Português (Nativo) & Inglês Básico/Técnico (Leitura e Documentação)",
    exp_title: "Atuação Prática & Trajetória",
    exp_desc:
      "Três pilares técnicos sustentados por quase uma década de operação real de TI, desenvolvimento de software e governança de segurança.",
    pil1_tag: "Windows Server · AD · Atendimento Remoto & Chat",
    pil1_title: "Infraestrutura Híbrida, Controle de Acessos & Suporte N2",
    pil1_body:
      "Administração de Windows Server, Active Directory (GPOs, controle de acessos RBAC, reparo de ACL por SID, logonHours), Linux/Docker, Nginx mTLS, VPNs, SQL Server, Service Desk N2, atendimento remoto e via chat, e governança ITSM/GLPI em ~80 filiais.",
    pil2_tag: "DPO (LGPD/GDPR) · OWASP AppSec · IA DLP",
    pil2_title: "Governança de Privacidade & Segurança Ofensiva",
    pil2_body:
      "Programas práticos de DPO (RoPA, DPIA/RIPD, bases legais, direitos do Art. 18, DPAs com fornecedores, anonimização irreversível e descarte certificado), pentests web OWASP Top 10 (16 falhas críticas/médias com remediação e hardening), forense digital e DLP Zero-Trust.",
    pil3_tag: "Python / TS / Next.js · PO · Implantações",
    pil3_title: "Engenharia de Software, PO & Implantação de Sistemas",
    pil3_body:
      "Automações e painéis em produção com Python, TypeScript, Next.js, Node.js, T-SQL, C# (.NET) e Playwright, combinados com Product Ownership (PO), especificações Kanban, homologação (UAT), runbooks de migração, viradas em paralelo, rollouts em ondas e treinamentos.",
    timeline_heading: "Trajetória Profissional (Sanitizada)",
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
    projects_title: "Projetos Open-Source em Destaque",
    projects_desc:
      "Todos os projetos abaixo possuem testes automatizados ou linters no GitHub Actions, documentação bilíngue e zero dados proprietários.",
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
    impact_title: "Casos de Produção Sanitizados (Antes -> Depois)",
    impact_desc:
      "Melhorias mensuráveis de arquitetura, engenharia web e confiabilidade entregues em operações distribuídas de varejo, CD e TI.",
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
    privacy_title: "Privacidade de Dados (LGPD / GDPR), DPO & AppSec",
    privacy_desc:
      "Governança prática de DPO, remediação ofensiva (OWASP), anonimização relacional e segurança em IA conectando regulação e engenharia.",
    priv1_title: "Governança DPO, RoPA & DPIA / RIPD",
    priv1_body:
      "Programas de conformidade LGPD (Lei 13.709/2018) e GDPR: inventários RoPA, bases legais (Arts. 7º e 11º), fluxos de Direitos dos Titulares (Art. 18) e DPIA / RIPD em sistemas de varejo, retaguarda e arquivo físico.",
    priv2_title: "OWASP AppSec & Forense Digital",
    priv2_body:
      "Testes de intrusão em aplicações web mapeando 16 vulnerabilidades críticas e médias (OWASP Top 10: injeções, falhas de autenticação, exposição de dados) com planos de remediação de código e hardening, além de análise de tráfego e perícia forense digital.",
    priv3_title: "Anonimização Irreversível & Descarte",
    priv3_body:
      "Estratégias de anonimização irreversível em bancos relacionais sem quebrar integridade referencial/auditoria, além de massas de testes sanitizadas e fluxos certificados de descarte físico.",
    priv4_title: "DPAs & IA Zero-Trust",
    priv4_body:
      "Redação de Avisos de Privacidade e cláusulas DPA com fornecedores, somados a diretrizes DLP Zero-Trust e checagem por Visão barrando PII e segredos internos em plataformas de IA.",
    priv5_title: "Acessos Temporários & Hardening",
    priv5_body:
      "Fluxos de acesso temporário por chamado (AD logonHours, expiração, logoff RDS, túneis VPN para bancos, RBAC), Privacy by Design, autenticação de e-mail (DKIM/SPF/DMARC) e proteção ClamAV.",
    priv6_title: "Comitê APDADOS® & Capacitação Corporativa",
    priv6_body:
      "Atuação ativa no Comitê de Segurança da APDADOS® contribuindo em cibersegurança, diretrizes regulatórias (ANPD) e LGPD, somada a trilhas modulares de conscientização sobre governança de dados, descarte seguro e uso responsável de IA.",
    stack_title: "Stack Técnica",
    stack_desc:
      "Versatilidade ponta a ponta: de Windows Server, Active Directory e internals de banco de dados até interfaces web modernas e privacidade.",
    stack_g1: "Linguagens & Scripting",
    stack_g2: "Web, APIs & Desktop",
    stack_g3: "Windows Server, AD, Bancos & Infra",
    stack_g4: "Governança, Segurança & Operações",
    contact_title: "Vamos Trabalhar Juntos",
    contact_desc:
      "Aberto a oportunidades remotas no Brasil e no exterior em Automação de TI, Engenharia de Software/Backend, Implantação de Sistemas (PO), Infraestrutura Híbrida e Privacidade/AppSec.",
    contact_github: "Visitar GitHub (@gavicoding)",
    contact_linkedin: "Conectar no LinkedIn",
    contact_copy_email: "Copiar E-mail (gavicoding@gmail.com)",
    footer_note: "Construído com HTML5 semântico, CSS3 & JS puro · Hospedado no GitHub Pages",
    toast_copied: "E-mail copiado: gavicoding@gmail.com",
    toast_copy_fallback: "E-mail: gavicoding@gmail.com",
  },
};

function getInitialLang() {
  try {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "en" || saved === "pt") {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions.
  }
  return "en";
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
      el.textContent = dict[key];
    }
  });

  const langLabel = document.getElementById("lang-label");
  if (langLabel) {
    langLabel.textContent = lang === "en" ? "🇧🇷 PT-BR" : "🇺🇸 EN";
  }

  try {
    localStorage.setItem("portfolio_lang", lang);
  } catch {
    // Ignore storage access restrictions.
  }
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
  let currentLang = getInitialLang();
  applyLanguage(currentLang);

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "pt" : "en";
      applyLanguage(currentLang);
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

  const revealEls = document.querySelectorAll(".reveal");
  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced || typeof IntersectionObserver === "undefined") {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    revealEls.forEach((el) => observer.observe(el));
  }
});
