# 🌐 gavicoding.github.io

[![CI](https://github.com/gavicoding/gavicoding.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/gavicoding/gavicoding.github.io/actions/workflows/ci.yml)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](assets/styles.css)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](assets/app.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Live Portfolio & Interactive Resume:** **[https://gavicoding.github.io](https://gavicoding.github.io)**

Official bilingual (`EN` / `PT-BR`) portfolio website of **Gabriel Souza (`@gavicoding`)**, built with zero runtime frameworks — pure semantic **HTML5**, responsive mobile-first **CSS3** (`prefers-reduced-motion` aware), and **Vanilla JavaScript**.

---

## Highlights

- **Instant Bilingual Switcher (`🇺🇸 EN` ↔ `🇧🇷 PT-BR`):** 100% key-parity translation dictionary persisted in `localStorage`.
- **Interactive Project Showcase:** Filterable cards across all 6 flagship open-source repositories (`Security & AI`, `Observability`, `Data / T-SQL`, `Infra / DevOps`, `Desktop`).
- **Sanitized Production Case Studies:** Before → After operational metrics covering Next.js dashboards (`6.8s → 0.1s` TTFB), interactive Leaflet/OSM store locators, WebSocket + mTLS fleet management, fiscal/ITSM recovery, and T-SQL performance tuning.
- **LGPD & GDPR Governance Showcase:** Highlights DPIA/RIPD assessments, relational anonymization, Zero-Trust AI DLP boundaries, time-boxed access governance, and corporate training programs.
- **Automated CI Verification:** Validates HTML structure, CSS accessibility guardrails, JS syntax (`node --check`), 100% EN/PT translation key parity, and sanitization rules on every push.

---

## Local Preview & Tests

```bash
# Run automated validation
node --check assets/app.js
python -m unittest discover -s tests -v

# Preview locally
python -m http.server 8000
```

## License

[MIT License](LICENSE)
