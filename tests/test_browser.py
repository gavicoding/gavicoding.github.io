"""Browser checks with Playwright at 390px and 1440px.

Skipped unless PORTFOLIO_E2E=1 and Playwright (with Chromium) is installed:
    pip install playwright && python -m playwright install chromium
    PORTFOLIO_E2E=1 python -m unittest tests.test_browser -v
"""

import functools
import http.server
import os
import threading
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

try:
    from playwright.sync_api import sync_playwright
except ImportError:  # pragma: no cover
    sync_playwright = None

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


ENABLED = os.environ.get("PORTFOLIO_E2E") == "1" and sync_playwright is not None


@unittest.skipUnless(ENABLED, "set PORTFOLIO_E2E=1 and install Playwright to run browser checks")
class TestBrowser(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        handler = functools.partial(QuietHandler, directory=str(ROOT))
        cls.server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
        cls.url = f"http://127.0.0.1:{cls.server.server_address[1]}/"
        threading.Thread(target=cls.server.serve_forever, daemon=True).start()
        cls.pw = sync_playwright().start()
        cls.browser = cls.pw.chromium.launch()

    @classmethod
    def tearDownClass(cls):
        cls.browser.close()
        cls.pw.stop()
        cls.server.shutdown()

    def open(self, width, height=900, **extra):
        ctx = self.browser.new_context(viewport={"width": width, "height": height}, **extra)
        page = ctx.new_page()
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
        requests = []
        page.on("request", lambda r: requests.append(r.url))
        page.goto(self.url, wait_until="networkidle")
        self.addCleanup(ctx.close)
        return page, errors, requests

    def test_no_errors_and_no_horizontal_scroll(self):
        for width in (390, 1440):
            page, errors, requests = self.open(width)
            overflow = page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
            self.assertLessEqual(overflow, 0, f"horizontal scroll at {width}px")
            self.assertEqual(errors, [], f"console errors at {width}px")
            self.assertFalse([u for u in requests if u.endswith(".mp4")], "video downloaded before a click")
            self.assertFalse([u for u in requests if "fonts.g" in u], "external font requested")

    def test_theater_by_keyboard_returns_focus(self):
        page, errors, _ = self.open(1440)
        page.locator(".proj-media").first.focus()
        page.keyboard.press("Enter")
        page.wait_for_function("document.getElementById('demo-theater').open")
        src = page.evaluate("document.getElementById('demo-player').getAttribute('src')")
        self.assertTrue(src.endswith(".mp4"))
        page.keyboard.press("Escape")
        page.wait_for_function("!document.getElementById('demo-theater').open")
        self.assertIn("proj-media", page.evaluate("document.activeElement.className"))
        self.assertEqual(errors, [])

    def test_vertical_video_on_phones(self):
        page, _, _ = self.open(390, 844)
        page.locator(".proj-media").first.click()
        page.wait_for_function("document.getElementById('demo-theater').open")
        src = page.evaluate("document.getElementById('demo-player').getAttribute('src')")
        self.assertIn("/vertical/", src)

    def test_avatar_follows_the_scroll(self):
        page, _, _ = self.open(1440)
        self.assertEqual(page.evaluate("document.documentElement.dataset.buddy"), "smile")
        self.assertTrue(page.locator("#buddy").is_visible())
        page.evaluate("document.getElementById('projects').scrollIntoView()")
        page.wait_for_function("document.documentElement.dataset.buddy === 'typing'")
        self.assertEqual(page.inner_text("#buddy-cmd"), "ls -la ~/projects")
        page.evaluate("document.getElementById('dpo').scrollIntoView()")
        page.wait_for_function("document.documentElement.dataset.buddy === 'glint'")

    def test_reduced_motion_shows_commands_at_once(self):
        page, _, _ = self.open(1440, reduced_motion="reduce")
        typed = page.evaluate("[...document.querySelectorAll('[data-prompt]')].every(e => e.classList.contains('is-typed'))")
        self.assertTrue(typed)

    def test_skip_link_is_first_tab_stop(self):
        page, _, _ = self.open(1440)
        page.keyboard.press("Tab")
        self.assertIn("skip-link", page.evaluate("document.activeElement.className"))


if __name__ == "__main__":
    unittest.main()
