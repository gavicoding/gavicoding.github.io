"""Checks for the terminal experience: prompts, avatar, video budget, SEO and accessibility basics."""

import json
import re
import struct
import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HTML = (ROOT / "index.html").read_text(encoding="utf-8")
CSS = (ROOT / "assets" / "styles.css").read_text(encoding="utf-8")
JS = (ROOT / "assets" / "app.js").read_text(encoding="utf-8")

SITE_FILES = [
    ROOT / "index.html",
    ROOT / "assets" / "styles.css",
    ROOT / "assets" / "app.js",
    ROOT / "assets" / "sql-casebook.js",
    ROOT / "README.md",
    ROOT / "tools" / "make_avatar.py",
    ROOT / "tools" / "encode_videos.py",
]

SECTION_COMMANDS = {
    "top": "whoami",
    "projects": "ls -la ~/projects",
    "experience": "cat ~/experience.log",
    "lab": "./lab.sh --fake-data",
    "sql": "sqlcmd -i casebook.sql",
    "dpo": "sudo lgpd-audit --as dpo",
    "stack": "grep -ri skills ~/",
    "contact": "./contact.sh",
}


class Collector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.ld_json = []
        self._in_ld = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        self.tags.append((tag, a))
        if tag == "script" and a.get("type") == "application/ld+json":
            self._in_ld = True
            self.ld_json.append("")

    def handle_endtag(self, tag):
        if tag == "script":
            self._in_ld = False

    def handle_data(self, data):
        if self._in_ld:
            self.ld_json[-1] += data


PARSED = Collector()
PARSED.feed(HTML)


def tags(tag_name, **attrs):
    out = []
    for tag, a in PARSED.tags:
        if tag == tag_name and all(a.get(k) == v for k, v in attrs.items()):
            out.append(a)
    return out


def png_size(path: Path) -> tuple[int, int]:
    data = path.read_bytes()[:24]
    assert data[:8] == b"\x89PNG\r\n\x1a\n", f"{path.name} is not a PNG"
    return struct.unpack(">II", data[16:24])


class TestSectionsAsCommands(unittest.TestCase):
    def test_every_section_is_a_shell_command(self):
        for sid, cmd in SECTION_COMMANDS.items():
            sec = [a for t, a in PARSED.tags if t == "section" and a.get("id") == sid]
            self.assertEqual(len(sec), 1, f"section #{sid} missing")
            self.assertEqual(sec[0].get("data-buddy-cmd"), cmd)

    def test_prompt_lines_reserve_their_width(self):
        prompts = re.findall(r'<span class="cmd" style="--n:(\d+)">([^<]+)</span>', HTML)
        self.assertGreaterEqual(len(prompts), 9)
        for n, text in prompts:
            visible = text.replace("&amp;", "&")
            self.assertEqual(int(n), len(visible), f"--n does not match the command length: {visible}")

    def test_typing_effect_respects_reduced_motion(self):
        reduced = CSS[CSS.rindex("prefers-reduced-motion"):]
        for selector in (".prompt-line .cmd", "[data-buddy=\"typing\"] .sprite"):
            self.assertIn(selector, CSS)
        self.assertIn("animation: none", reduced)
        self.assertIn("prefersReduced", JS)
        self.assertIn('promptLines.forEach((el) => el.classList.add("is-typed"))', JS)

    def test_content_visible_without_javascript(self):
        self.assertIn('document.documentElement.classList.add("js")', HTML)
        self.assertIn(".js .prompt-line .cmd", CSS)
        self.assertIn("html:not(.js) .reveal", CSS)


class TestAvatar(unittest.TestCase):
    def test_sprite_has_six_square_frames_and_is_small(self):
        sprite = ROOT / "assets" / "images" / "avatar-sprite.png"
        self.assertTrue(sprite.is_file())
        w, h = png_size(sprite)
        self.assertEqual(w, h * 6, "sprite must have 6 frames side by side")
        self.assertLessEqual(h, 64, "avatar is pixel art, not a photo")
        self.assertLess(sprite.stat().st_size, 30_000)

    def test_only_derived_artwork_is_committed(self):
        images = {p.name.lower() for p in (ROOT / "assets" / "images").iterdir()}
        for name in images:
            self.assertNotRegex(name, r"foto|photo|profile|perfil|linkedin|headshot")
        ascii_art = (ROOT / "assets" / "images" / "avatar-ascii.txt").read_text(encoding="utf-8")
        self.assertIn(ascii_art.strip().splitlines()[5].strip(), HTML)

    def test_avatar_states_for_every_section(self):
        moods = re.search(r"const BUDDY_MOODS = \{(.*?)\};", JS, re.S).group(1)
        for sid in SECTION_COMMANDS:
            self.assertRegex(moods, rf"\b{sid}: \"(idle|smile|glint|typing)\"")
        for lang in ("en", "pt"):
            block = re.search(rf"const BUDDY_STATUS = \{{.*?{lang}: \{{(.*?)\}}", JS, re.S).group(1)
            for sid in SECTION_COMMANDS:
                self.assertIn(f"{sid}:", block)
        for mood in ("smile", "glint", "typing"):
            self.assertIn(f'[data-buddy="{mood}"] .sprite', CSS)

    def test_companion_is_decorative(self):
        buddy = tags("aside", id="buddy")
        self.assertEqual(len(buddy), 1)
        self.assertEqual(buddy[0].get("aria-hidden"), "true")


class TestVideos(unittest.TestCase):
    def test_every_mp4_fits_the_budget(self):
        mp4s = list((ROOT / "assets" / "videos").rglob("*.mp4"))
        self.assertGreaterEqual(len(mp4s), 23)
        for mp4 in mp4s:
            self.assertLess(mp4.stat().st_size, 1_500_000, f"{mp4.name} is too heavy for the web")

    def test_vertical_versions_exist_and_are_referenced(self):
        refs = re.findall(r'"(assets/videos/vertical/[a-z0-9-]+\.(?:mp4|webp))"', JS)
        self.assertGreaterEqual(len(set(refs)), 20)
        for rel in set(refs):
            self.assertTrue((ROOT / rel).is_file(), f"missing {rel}")

    def test_every_project_card_has_a_lazy_video_thumbnail(self):
        cards = re.findall(r'<article class="card project-card.*?</article>', HTML, re.S)
        self.assertEqual(len(cards), 13)
        demo_ids = set(re.findall(r'id: "(\d\d)"', JS))
        for card in cards:
            m = re.search(r'class="proj-media[^"]*" data-open-demo="(\d\d)"', card)
            self.assertIsNotNone(m, "card without demo video")
            self.assertIn(m.group(1), demo_ids)
            img = re.search(r'<img src="([^"]+)"[^>]*>', card)
            self.assertIn('loading="lazy"', img.group(0))
            self.assertIn('width="', img.group(0))
            self.assertTrue((ROOT / img.group(1)).is_file(), img.group(1))

    def test_player_loads_nothing_until_opened(self):
        video = tags("video", id="demo-player")
        self.assertEqual(len(video), 1)
        self.assertEqual(video[0].get("preload"), "none")
        self.assertNotIn("src", video[0])
        self.assertNotIn("autoplay", video[0])
        self.assertEqual(len(tags("dialog", id="demo-theater")), 1)
        self.assertIn("theater.showModal()", JS)


class TestSeo(unittest.TestCase):
    def test_bilingual_keywords_in_title_description_and_og(self):
        title = re.search(r"<title>(.*?)</title>", HTML).group(1)
        desc = tags("meta", name="description")[0]["content"]
        og_desc = tags("meta", property="og:description")[0]["content"]
        for text in (title, desc):
            self.assertIn("IT Automation" if text is title else "IT automation", text)
        self.assertIn("Automação de TI", title)
        for term in ("DevOps", "SQL Server", "Active Directory", "LGPD", "infraestrutura", "proteção de dados"):
            self.assertIn(term, desc)
        self.assertIn("Automação de TI", og_desc)
        self.assertEqual(tags("meta", property="og:locale:alternate")[0]["content"], "pt_BR")
        self.assertTrue(tags("meta", name="twitter:title"))
        self.assertTrue(tags("link", rel="canonical"))

    def test_json_ld_person(self):
        self.assertEqual(len(PARSED.ld_json), 1)
        data = json.loads(PARSED.ld_json[0])
        self.assertEqual(data["@type"], "Person")
        self.assertEqual(data["name"], "Gabriel Souza")
        self.assertIn("https://github.com/gavicoding", data["sameAs"])
        self.assertIn("https://www.linkedin.com/in/gabrielvsouza/", data["sameAs"])
        about = " ".join(data["knowsAbout"])
        for term in ("IT automation", "Automação de TI", "Encarregado de dados", "Data Protection Officer", "SQL Server"):
            self.assertIn(term, about)

    def test_recruiter_roles_in_both_languages(self):
        for role in ("IT Automation Engineer", "DevOps Engineer", "Data Protection Officer (DPO)",
                     "Analista de Infraestrutura", "Encarregado de Dados (DPO)", "Suporte Técnico N2"):
            self.assertIn(role.replace("&", "&amp;"), HTML)
        self.assertIn('lang="pt-BR"', HTML)


class TestPerformanceAndA11y(unittest.TestCase):
    def test_no_render_blocking_web_fonts(self):
        self.assertNotIn("fonts.googleapis.com", HTML)
        self.assertNotIn("@import", CSS)
        self.assertIn("ui-monospace", CSS)

    def test_scripts_are_deferred(self):
        for s in tags("script"):
            if s.get("src"):
                self.assertIn("defer", s, f"{s['src']} should be deferred")

    def test_images_have_dimensions_and_alt(self):
        for img in tags("img"):
            self.assertIn("alt", img)
            self.assertIn("width", img)
            self.assertIn("height", img)

    def test_media_buttons_have_accessible_names(self):
        buttons = [a for t, a in PARSED.tags if t == "button" and "proj-media" in a.get("class", "")]
        self.assertEqual(len(buttons), 13)
        for b in buttons:
            self.assertTrue(b.get("aria-label", "").startswith("Play demo video:"))
        self.assertIn("media_play_aria", JS)

    def test_terminal_input_has_a_label(self):
        self.assertRegex(HTML, r'<label for="terminal-input"[^>]*>.*?class="sr-only"', )
        self.assertIn(".sr-only", CSS)


class TestPublishingRules(unittest.TestCase):
    def test_no_tool_or_vendor_names(self):
        names = ["cla" + "ude", "anth" + "ropic", "gem" + "ini", "open" + "ai", "chat" + "gpt", "co" + "pilot",
                 "co-" + "authored", "generated " + "with"]
        rx = re.compile("|".join(names), re.I)
        for path in SITE_FILES + list((ROOT / "tests").glob("*.py")):
            self.assertIsNone(rx.search(path.read_text(encoding="utf-8")), f"forbidden name in {path.name}")

    def test_no_em_dash_in_new_files(self):
        for path in SITE_FILES + list((ROOT / "tests").glob("*.py")):
            self.assertNotIn(chr(0x2014), path.read_text(encoding="utf-8"), path.name)

    def test_no_sector_words_in_site_copy(self):
        rx = re.compile(r"\bvarejo\b|rede de lojas|farm[aá]cia", re.I)
        for path in SITE_FILES[:4]:
            text = path.read_text(encoding="utf-8")
            self.assertIsNone(rx.search(text), path.name)
            self.assertIsNone(re.search(r"\bPOS\b", text), path.name)


if __name__ == "__main__":
    unittest.main()
