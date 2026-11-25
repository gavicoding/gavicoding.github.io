import re
import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

FORBIDDEN_TERMS = [
    "ret" + "iro",
    "proc" + "fit",
    "farma" + "one",
    "nex" + "us",
    "ekle" + "sia",
    "ed" + "oc",
    "port" + "aria",
    "671/" + "2021",
]


class PortfolioHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta_names = set()
        self.hrefs = []
        self.srcs = []
        self.ids = set()
        self.i18n_keys = set()

    def handle_starttag(self, tag, attrs):
        attr_map = dict(attrs)
        if tag == "meta" and "name" in attr_map:
            self.meta_names.add(attr_map["name"].lower())
        if "href" in attr_map:
            self.hrefs.append(attr_map["href"])
        if "src" in attr_map:
            self.srcs.append(attr_map["src"])
        if "id" in attr_map:
            self.ids.add(attr_map["id"])
        if "data-i18n" in attr_map:
            self.i18n_keys.add(attr_map["data-i18n"])


def extract_translation_keys(js_text: str) -> tuple[set[str], set[str]]:
    en_match = re.search(r"\ben:\s*\{(.*?)\n  \},\s*\n  pt:\s*\{(.*?)\n  \},", js_text, re.S)
    if not en_match:
        raise AssertionError("Could not locate en/pt blocks inside TRANSLATIONS")
    key_rx = re.compile(r"^\s{4}([a-z0-9_]+):", re.M)
    return set(key_rx.findall(en_match.group(1))), set(key_rx.findall(en_match.group(2)))


class TestPortfolioSite(unittest.TestCase):
    def test_html_structure_assets_and_repo_links(self):
        html_text = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertTrue(html_text.lower().lstrip().startswith("<!doctype html>"))
        self.assertRegex(html_text, r"<title>Gabriel Souza [^<]*gavicoding</title>")

        parser = PortfolioHTMLParser()
        parser.feed(html_text)

        self.assertIn("viewport", parser.meta_names)
        self.assertIn("description", parser.meta_names)

        expected_assets = (
            "assets/favicon.svg",
            "assets/styles.css",
            "assets/app.js",
        )
        for local_ref in expected_assets:
            self.assertTrue((ROOT / local_ref).is_file(), f"Missing referenced asset: {local_ref}")
            self.assertTrue(
                local_ref in parser.hrefs or local_ref in parser.srcs,
                f"Unreferenced asset: {local_ref}",
            )

        self.assertTrue((ROOT / "assets" / "images" / "og-portfolio.png").is_file())
        self.assertIn("https://gavicoding.github.io/assets/images/og-portfolio.png", html_text)
        self.assertIn("https://www.linkedin.com/in/gabrielvsouza/", parser.hrefs)

        required_ids = (
            "hero-terminal",
            "dlp-input",
            "dlp-output",
            "topo-svg",
            "video-showcase",
            "demo-player",
            "dpo-stepper",
            "theme-toggle",
            "sql-casebook",
        )
        for element_id in required_ids:
            self.assertIn(element_id, parser.ids, f"Missing interactive element #{element_id}")

        demo_slugs = (
            "01-pii-screenshot-guard",
            "02-queue-health-watchdog",
            "03-infra-ops-playbook",
            "04-tsql-retail-ops-analytics",
            "05-otimizapc",
            "06-thunderbird-outlook",
            "07-governanca-dpo",
            "08-nfe-intake-hub",
            "09-nfe-toolkit",
            "10-ad-access-audit",
        )
        js_text = (ROOT / "assets" / "app.js").read_text(encoding="utf-8")
        for slug in demo_slugs:
            mp4_rel = f"assets/videos/{slug}.mp4"
            jpg_rel = f"assets/videos/posters/{slug}.jpg"
            self.assertTrue((ROOT / mp4_rel).is_file(), f"Missing demo MP4: {mp4_rel}")
            self.assertTrue((ROOT / jpg_rel).is_file(), f"Missing demo poster: {jpg_rel}")
            self.assertTrue(mp4_rel in html_text or mp4_rel in js_text, f"Unreferenced MP4: {mp4_rel}")
            self.assertIn(jpg_rel, html_text, f"Unreferenced poster in HTML: {jpg_rel}")

        expected_repos = (
            "pii-screenshot-guard",
            "queue-health-watchdog",
            "tsql-retail-ops-analytics",
            "infra-ops-playbook",
            "OtimizaPC",
            "Thunderbird-Outlook",
            "nfe-toolkit",
            "ad-access-audit",
        )
        all_hrefs = "\n".join(parser.hrefs)
        for repo in expected_repos:
            self.assertIn(f"https://github.com/gavicoding/{repo}", all_hrefs)

    def test_css_variables_themes_responsive_and_reduced_motion(self):
        css_text = (ROOT / "assets" / "styles.css").read_text(encoding="utf-8")
        self.assertIn(":root", css_text)
        self.assertIn('[data-theme="light"]', css_text)
        self.assertIn("@media (max-width:", css_text)
        self.assertIn("prefers-reduced-motion", css_text)

    def test_i18n_key_parity_between_html_en_and_pt(self):
        html_text = (ROOT / "index.html").read_text(encoding="utf-8")
        js_text = (ROOT / "assets" / "app.js").read_text(encoding="utf-8")

        parser = PortfolioHTMLParser()
        parser.feed(html_text)

        en_keys, pt_keys = extract_translation_keys(js_text)
        self.assertEqual(en_keys, pt_keys, f"EN/PT key mismatch: {en_keys ^ pt_keys}")

        missing_en = parser.i18n_keys - en_keys
        missing_pt = parser.i18n_keys - pt_keys
        self.assertEqual(missing_en, set(), f"HTML keys missing in EN: {missing_en}")
        self.assertEqual(missing_pt, set(), f"HTML keys missing in PT: {missing_pt}")

    def test_zero_confidential_or_removed_terms(self):
        files_to_scan = [
            ROOT / "index.html",
            ROOT / "assets" / "styles.css",
            ROOT / "assets" / "app.js",
            ROOT / "assets" / "sql-casebook.js",
            ROOT / "README.md",
        ]
        for path in files_to_scan:
            content = path.read_text(encoding="utf-8").lower()
            for term in FORBIDDEN_TERMS:
                self.assertNotIn(term, content, f"Forbidden term '{term}' detected in {path.name}")

    def test_zero_em_dashes(self):
        files_to_scan = [
            ROOT / "index.html",
            ROOT / "assets" / "styles.css",
            ROOT / "assets" / "app.js",
            ROOT / "assets" / "sql-casebook.js",
            ROOT / "README.md",
        ]
        for path in files_to_scan:
            content = path.read_text(encoding="utf-8")
            self.assertNotIn("\u2014", content, f"Em-dash detected in {path.name}")


if __name__ == "__main__":
    unittest.main()
