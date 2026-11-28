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

- **The whole page is a terminal session:** every section is a shell command (`whoami && neofetch`, `ls -la ~/projects`, `cat ~/experience.log`, `./lab.sh --fake-data`, `sqlcmd -i casebook.sql`, `sudo lgpd-audit --as dpo`, `grep -ri skills ~/`, `./contact.sh`) typed once as it scrolls into view. With `prefers-reduced-motion` the commands appear at once.
- **Pixel-art companion:** a 56x56 avatar (6 frames: idle, blink, smile, typing A/B, glasses glint) follows the scroll, changes pose for each section and shows the current command. Built with Pillow by `tools/make_avatar.py`; only the derived sprite and an ASCII portrait are committed.
- **Every project with its demo video:** cards show a lazy WebP thumbnail; the video only downloads when the player opens (native `<dialog>`, keyboard friendly, focus returns to the card). Phones get the vertical 9:16 version, wide screens the 16:9 one. All MP4s are H.264, 30 fps, no audio, under 1 MB (`tools/encode_videos.py`).
- **Interactive CLI hero:** `whoami`, `cases`, `projects`, `sim`, `dpo`, `infra`, `stack` and `site`, plus Tab completion and Up/Down history.
- **Command palette (`Ctrl+K` / `Cmd+K`):** keyboard-first navigation and actions (sections, theme, language, email), built as an accessible combobox dialog.
- **Live Lab with three simulations (fictional data):** DLP masking of CPF/CNPJ, emails, tokens and internal IPs; queue health that tells a busy hour (HIGH_LOAD) from a real stall (STALLED); a daily invoice check that finds gaps and fetches only what is missing.
- **Production case studies told as Pain -> What I Built -> Result**, an SQL casebook, DPO & LGPD governance, education and career timeline.
- **Recruiter-friendly SEO:** bilingual title, description, Open Graph and a JSON-LD `Person` with native EN and PT-BR terms (IT automation, DevOps, Analista de Infraestrutura, Encarregado de Dados).
- **Fast and accessible:** no web fonts (system monospace), deferred scripts, no video bytes before a click, dark / light themes, EN / PT-BR with 100% key parity.
- **CI on every push:** HTML structure, asset references, JS syntax (`node --check`), EN/PT key parity, video size budget, SEO metadata, zero em-dashes and a forbidden-terms check.

## Local Preview & Tests

```bash
# Run automated validation
node --check assets/app.js
python -m unittest discover -s tests -v

# Optional browser checks (390px and 1440px)
pip install playwright && python -m playwright install chromium
PORTFOLIO_E2E=1 python -m unittest tests.test_browser -v

# Preview locally
python -m http.server 8000
```

## License

[MIT License](LICENSE)
