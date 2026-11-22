"use strict";

const EMAIL_ADDRESS = "gavicoding@gmail.com";

const TRANSLATIONS = {
  en: {
    skip_link: "Skip to main content",
    nav_projects: "Projects",
    nav_impact: "Impact",
    nav_privacy: "Privacy & LGPD",
    nav_stack: "Stack",
    nav_contact: "Contact",
    hero_badge: "Remote · Async-First · Brazil & International",
    hero_title: "Building resilient automation, observable backends, and privacy-safe systems.",
    hero_subtitle:
      "I'm Gabriel Souza — an IT Automation & Software Engineer working across Python, TypeScript, Next.js, T-SQL, C# (.NET), and hybrid Linux/Windows infrastructure, pairing practical engineering with Applied AI and LGPD/GDPR governance.",
    cta_projects: "Explore Open-Source Projects",
    cta_github: "GitHub Profile",
    cta_copy_email: "Copy Email",
    metric_1_label: "Next.js dashboard TTFB after replacing 85 parallel queries with a single aggregation",
    metric_2_label: "Multi-branch stores & Windows endpoints supported across hybrid Linux + AD ops",
    metric_3_label: "Open-source repositories spanning Python, TypeScript, T-SQL, Bash/PS & C#",
    metric_4_label: "DPIA/RIPD assessments, Zero-Trust DLP, anonymization & access governance",
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
      "Read-only replication & job queue monitor using snapshot trend heuristics to distinguish active HIGH_LOAD from STALLED queues — preventing alert fatigue with cooldowns, webhooks, and a live HTML dashboard.",
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
    impact_title: "Sanitized Production Case Studies (Before → After)",
    impact_desc:
      "Measurable architecture, web engineering, and reliability improvements delivered across distributed retail, warehouse, and IT operations.",
    imp1_tag: "Next.js · SVG Topology · Observability",
    imp1_title: "Operational Dashboard & Live Infrastructure Map",
    imp1_body:
      "Replaced 85 parallel per-store queries with single-query aggregations, dynamic Server Components, animated SVG dependency topology, and hourly batched HTML alerts — cutting TTFB from 6.8s to 0.1s and email noise from 80+/day to digests.",
    imp2_tag: "Web · Leaflet/OSM · WCAG Accessibility",
    imp2_title: "Corporate Site Rebuild & Interactive Store Locator",
    imp2_body:
      "Rebuilt a 7-page institutional website with a city/service-filtered Leaflet + OpenStreetMap locator, ResizeObserver iframe sizing, mobile-first breakpoints (tested at 390px), and automated contrast audits achieving 0 WCAG failures.",
    imp3_tag: "Windows Fleet · WebSockets + mTLS · PowerShell",
    imp3_title: "Endpoint Fleet Control Plane & ACL Self-Healing",
    imp3_body:
      "Deployed an NSSM Windows agent over WebSockets + mTLS with wave rollouts, kill-switch recovery, RSA-signed auto-updates, and language-agnostic SID ACL repair — cutting post-restart reconnection from 60s to 3–7s.",
    imp4_tag: "Sync Recovery · ITSM · Automation",
    imp4_title: "Sales & Fiscal Retransmission + ITSM Backlog Recovery",
    imp4_body:
      "Automated contingency fiscal/sales retransmission with retry safeguards and vendor ticketing, automated CCTV evidence retrieval across 83 NVRs/DVRs, and recovered a stalled 109k-ticket ITSM notification queue without email storms.",
    imp5_tag: "T-SQL · WMS Picking · Lock Diagnostics",
    imp5_title: "SQL Server Optimization & Warehouse Throughput Analytics",
    imp5_body:
      "Eliminated multi-trip returnable container duplicates via ROW_NUMBER(), unified strategic sales KPIs in one pass, instrumented WMS picking/checkout stage bottlenecks, and captured sys.dm_tran_locks wait snapshots asynchronously.",
    imp6_tag: "Product Ownership · UI Extensions · Email HTML",
    imp6_title: "Cross-Team Rollouts, CSP Plugins & Outlook-Safe Templates",
    imp6_body:
      "Led requirements, Kanban workflows, and cross-department rollouts; built a full ~13 KB CSS theme and user KPI dashboard plugin respecting strict CSP; and authored table-based HTML email & SVG→PNG alert templates.",
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
    priv4_title: "Third-Party DPAs, Biometrics & Zero-Trust AI",
    priv4_body:
      "Authored Privacy Notices, vendor DPAs, and Portaria MTE 671/2021 biometric time-tracking controls, backed by Zero-Trust DLP boundaries and automated Vision checks barring PII from external AI platforms.",
    priv5_title: "Time-Boxed Access & Hardening",
    priv5_body:
      "Designed ticket-validated temporary vendor access (AD logonHours, expiration alerts, RDS logoff, encrypted VPN DB tunnels, least-privilege RBAC) alongside Privacy by Design, DKIM/SPF/DMARC, and ClamAV.",
    priv6_title: "LGPD Technical Authoring & Training",
    priv6_body:
      "Authored a 12-page practical technical chapter on real-world LGPD implementation, retail risk management, and regulatory audit readiness, alongside modular corporate awareness tracks on privacy, secure disposal, and responsible AI adoption.",
    stack_title: "Technical Stack",
    stack_desc:
      "End-to-end versatility from database internals and Linux/Windows administration to modern web interfaces and privacy tooling.",
    stack_g1: "Languages & Scripting",
    stack_g2: "Web, APIs & Desktop",
    stack_g3: "Databases & Hybrid Infra",
    stack_g4: "Governance, Security & Operations",
    contact_title: "Let's Work Together",
    contact_desc:
      "Open to remote opportunities in Brazil and internationally (US, Canada, Europe) across IT Automation, Software/Backend Engineering, Observability, and Privacy Engineering.",
    contact_github: "Visit GitHub (@gavicoding)",
    contact_copy_email: "Copy Email (gavicoding@gmail.com)",
    footer_note: "Built with semantic HTML5, CSS3 & Vanilla JS · Hosted on GitHub Pages",
    toast_copied: "Email copied: gavicoding@gmail.com",
    toast_copy_fallback: "Email: gavicoding@gmail.com",
  },
  pt: {
    skip_link: "Ir para o conteúdo principal",
    nav_projects: "Projetos",
    nav_impact: "Impacto",
    nav_privacy: "Privacidade & LGPD",
    nav_stack: "Tecnologias",
    nav_contact: "Contato",
    hero_badge: "Remoto · Async-First · Brasil & Exterior",
    hero_title: "Construindo automações resilientes, backends observáveis e sistemas seguros com privacidade.",
    hero_subtitle:
      "Sou Gabriel Souza — Engenheiro de Automação de TI e Software atuando com Python, TypeScript, Next.js, T-SQL, C# (.NET) e infraestrutura híbrida Linux/Windows, unindo engenharia prática com IA Aplicada e governança LGPD/GDPR.",
    cta_projects: "Ver Projetos Open-Source",
    cta_github: "Perfil no GitHub",
    cta_copy_email: "Copiar E-mail",
    metric_1_label: "TTFB do dashboard Next.js após trocar 85 consultas paralelas por uma única agregação",
    metric_2_label: "Filiais & estações Windows atendidas em operação híbrida Linux + Active Directory",
    metric_3_label: "Repositórios open-source testados no CI em Python, TypeScript, T-SQL, Bash/PS e C#",
    metric_4_label: "Relatórios DPIA/RIPD, DLP Zero-Trust, anonimização e governança de acessos",
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
      "Monitor somente leitura de filas e replicação usando heurística de tendência por snapshots para diferenciar HIGH_LOAD de STALLED — evitando fadiga de alertas com cooldowns, webhooks e painel web ao vivo.",
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
    impact_title: "Casos de Produção Sanitizados (Antes → Depois)",
    impact_desc:
      "Melhorias mensuráveis de arquitetura, engenharia web e confiabilidade entregues em operações distribuídas de varejo, CD e TI.",
    imp1_tag: "Next.js · Topologia SVG · Observabilidade",
    imp1_title: "Dashboard Operacional & Mapa de Infraestrutura",
    imp1_body:
      "Substituiu 85 consultas paralelas por agregação única, Server Components dinâmicos, mapa de topologia animado em SVG e alertas HTML consolidados por hora — reduzindo TTFB de 6,8s para 0,1s e e-mails de 80+/dia para resumos.",
    imp2_tag: "Web · Leaflet/OSM · Acessibilidade WCAG",
    imp2_title: "Reconstrução de Site & Localizador Interativo de Lojas",
    imp2_body:
      "Reconstruiu site institucional de 7 páginas com localizador Leaflet + OpenStreetMap filtrável por cidade/serviço, ajuste de iframe com ResizeObserver, responsividade mobile (390px) e auditoria de contraste com 0 falhas WCAG.",
    imp3_tag: "Frota Windows · WebSockets + mTLS · PowerShell",
    imp3_title: "Painel de Controle de Frota & Auto-Cura de ACLs",
    imp3_body:
      "Implantou agente Windows (NSSM) via WebSockets + mTLS com rollout em ondas, kill switch, auto-update assinado em RSA e reparo de ACLs por SID independente de idioma — reduzindo reconexão pós-restart de 60s para 3–7s.",
    imp4_tag: "Retransmissão · ITSM · Automação",
    imp4_title: "Retransmissão de Vendas/Fiscal & Fila de 109k Chamados",
    imp4_body:
      "Automatizou retransmissão fiscal e de vendas em contingência com salvaguardas e abertura de chamados, coleta de imagens em 83 DVRs/NVRs e normalização de fila de 109 mil notificações ITSM sem disparo em massa.",
    imp5_tag: "T-SQL · Separação WMS · Diagnóstico de Locks",
    imp5_title: "Otimização SQL Server & Produtividade de Separação",
    imp5_body:
      "Eliminou duplicidade em rastreamento de caixas retornáveis via ROW_NUMBER(), unificou vendas estratégicas em passada única, mediu gargalos de separação/conferência WMS e registrou snapshots assíncronos de sys.dm_tran_locks.",
    imp6_tag: "Product Ownership · Plugins CSP · E-mails HTML",
    imp6_title: "Implantações Multi-Área, Extensões CSP & Templates Outlook",
    imp6_body:
      "Conduziu requisitos, fluxos Kanban e implantações entre áreas; desenvolveu tema (~13 KB CSS) e plugin de dashboard respeitando CSP estrita; e criou e-mails HTML em tabela compatíveis com Outlook + banners SVG→PNG.",
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
    priv4_title: "DPAs, Biometria & IA Zero-Trust",
    priv4_body:
      "Redação de Avisos de Privacidade, cláusulas DPA com fornecedores e conformidade trabalhista/biométrica (Portaria MTE 671/2021), somados a diretrizes DLP e checagem por Visão barrando PII em plataformas de IA.",
    priv5_title: "Acessos Temporários & Hardening",
    priv5_body:
      "Fluxos de acesso temporário por chamado (AD logonHours, expiração, logoff RDS, túneis VPN para bancos, RBAC), Privacy by Design, autenticação de e-mail (DKIM/SPF/DMARC) e proteção ClamAV.",
    priv6_title: "Capítulo Técnico de LGPD & Capacitação",
    priv6_body:
      "Redação de capítulo técnico-prático de 12 páginas sobre implementação real da LGPD, gestão de riscos no varejo e preparação regulatória, além de trilhas modulares de conscientização corporativa sobre privacidade, descarte seguro e uso responsável de IA.",
    stack_title: "Stack Técnica",
    stack_desc:
      "Versatilidade ponta a ponta — de internals de banco de dados e administração Linux/Windows até interfaces web modernas e privacidade.",
    stack_g1: "Linguagens & Scripting",
    stack_g2: "Web, APIs & Desktop",
    stack_g3: "Bancos de Dados & Infra Híbrida",
    stack_g4: "Governança, Segurança & Operações",
    contact_title: "Vamos Trabalhar Juntos",
    contact_desc:
      "Aberto a oportunidades remotas no Brasil e no exterior (EUA, Canadá, Europa) em Automação de TI, Engenharia de Software/Backend, Observabilidade e Engenharia de Privacidade.",
    contact_github: "Visitar GitHub (@gavicoding)",
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
