# 🌐 gavicoding.github.io

[![CI](https://github.com/gavicoding/gavicoding.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/gavicoding/gavicoding.github.io/actions/workflows/ci.yml)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](assets/styles.css)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](assets/app.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Live Portfolio & Interactive Resume:** **[https://gavicoding.github.io](https://gavicoding.github.io)**

Official bilingual (`EN` / `PT-BR`) portfolio website of **Gabriel Souza (`@gavicoding`)**, built with zero runtime frameworks: pure semantic **HTML5**, responsive mobile-first **CSS3** (`prefers-reduced-motion` aware), and **Vanilla JavaScript** with no build step.

---

## Highlights

- **Interactive CLI hero:** a typed terminal with `whoami`, `cases`, `projects`, `sim`, `dpo`, `infra`, `stack` and `site`, plus Tab completion and Up/Down history.
- **Command palette (`Ctrl+K` / `Cmd+K`):** keyboard-first navigation and actions (sections, theme, language, email), built as an accessible combobox dialog.
- **Live Lab with three simulations (fictional data):**
  - Zero-Trust DLP redaction of CPF/CNPJ, emails, tokens and internal IPs as you type.
  - Queue health heuristics that tell a draining burst (HIGH_LOAD) from a real stall (STALLED).
  - Daily invoice reconciliation pass: lists keys per day, finds gaps and fetches only what is missing.
- **Production case studies told as Pain -> What I Built -> Result:** ten production projects with real numbers; names, systems and data are left out.
- **Open-source showcase:** filterable cards and 30s video demos for six public repositories.
- **DPO & LGPD governance, education and career timeline.**
- **Bilingual EN / PT-BR** with 100% key parity, **dark / light themes**, mobile-first layout and `prefers-reduced-motion` support.
- **CI on every push:** HTML structure, asset references, JS syntax (`node --check`), EN/PT key parity, zero em-dashes and a forbidden-terms check that keeps confidential names out.

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
