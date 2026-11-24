"""Ortak sayfa iskeletini (head betiği, nav, mobil menü, footer) tüm sayfalara uygular.

Kullanım:  python tools/shell.py index.html hakkimda.html ...
Her sayfanın <body data-page-name="..." data-page-name-en="..."> değerleri korunur.
Sayfa içeriği (<main>) ve sayfaya özel CSS/JS dokunulmaz.
"""
import re
import sys

HEAD_SCRIPT = """  <script>
    (function () {
      var d = document.documentElement, t = null, l = null;
      try { t = localStorage.getItem("theme"); l = localStorage.getItem("lang"); } catch (e) {}
      if (t === "dark" || (!t && matchMedia("(prefers-color-scheme: dark)").matches)) d.setAttribute("data-theme", "dark");
      if (l === "en") { d.lang = "en"; d.classList.add("lang-pending"); }
      try {
        if (!matchMedia("(prefers-reduced-motion: reduce)").matches &&
            (!sessionStorage.getItem("doodle-visited") || sessionStorage.getItem("doodle-transition") === "1")) d.classList.add("doodle-cover");
      } catch (e) {}
    })();
  </script>"""

PAGES = [
    ("index.html", "nav.home", "Ana Sayfa", "ana sayfa", "home"),
    ("hakkimda.html", "nav.about", "Hakkımda", "hakkımda", "about"),
    ("projeler.html", "nav.work", "Projeler", "projeler", "projects"),
    ("blog.html", "nav.blog", "Blog", "blog", "blog"),
    ("galeri.html", "nav.gallery", "Galeri", "galeri", "gallery"),
    ("iletisim.html", "nav.contact", "İletişim", "iletişim", "contact"),
]


def nav_links():
    return "\n".join(
        f'          <li><a class="nav__link" href="{href}" data-page-name="{pn}" data-page-name-en="{en}" data-i18n="{key}">{label}</a></li>'
        for href, key, label, pn, en in PAGES
    )


def mobile_links():
    return "\n".join(
        f'    <a href="{href}" data-page-name="{pn}" data-page-name-en="{en}"><small>0{i}</small><span data-i18n="{key}">{label}</span></a>'
        for i, (href, key, label, pn, en) in enumerate(PAGES, 1)
    )


HEADER = f"""  <a class="skip-link" href="#main" data-i18n="a11y.skip">İçeriğe geç</a>

  <header class="nav">
    <div class="container nav__inner">
      <a href="index.html" class="nav__logo" aria-label="Ad Soyad">
        <span class="doodle" data-doodle="sparkle"></span>ad.soyad
      </a>
      <nav aria-label="Ana menü" data-i18n-attr="aria-label:nav.menuLabel">
        <ul class="nav__links">
{nav_links()}
        </ul>
      </nav>
      <div class="nav__actions">
        <button class="icon-btn lang-toggle" type="button" aria-label="Switch to English">
          <span class="lang-toggle__label">EN</span>
        </button>
        <button class="icon-btn theme-toggle" type="button" aria-label="Temayı değiştir">
          <span class="doodle doodle--moon" data-doodle="moon"></span>
          <span class="doodle doodle--sun" data-doodle="sun"></span>
        </button>
        <button class="icon-btn burger" type="button" aria-label="Menüyü aç" aria-expanded="false" aria-controls="mobileMenu">
          <span class="burger__lines"><span></span><span></span><span></span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
{mobile_links()}
  </div>
"""

FOOTER = """  <footer class="footer">
    <svg class="footer__wave" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true" data-draw="scrub" data-start="top 95%" data-end="top 50%">
      <path d="M0 30 C 100 5, 200 55, 300 30 S 500 5, 600 30 S 800 55, 900 30 S 1100 5, 1200 30"/>
    </svg>
    <div class="container">
      <p class="footer__big"><a href="iletisim.html" data-page-name="iletişim" data-page-name-en="contact" data-i18n="footer.big">Hadi <span class="scribble-u">konuşalım</span>!</a></p>
      <div class="footer__row">
        <div class="footer__socials">
          <a href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub" data-bind-href="{github}"><span class="doodle" data-doodle="github" style="--size:26px"></span></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn" data-bind-href="{linkedin}"><span class="doodle" data-doodle="linkedin" style="--size:26px"></span></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" data-bind-href="{instagram}"><span class="doodle" data-doodle="instagram" style="--size:26px"></span></a>
          <a href="mailto:ornek@mail.com" aria-label="E-posta" data-bind-href="mailto:{email}"><span class="doodle" data-doodle="mail" style="--size:26px"></span></a>
        </div>
        <p class="footer__copy" data-i18n="footer.copy">© <span data-year>2026</span> Ad Soyad — kalemle, kahveyle ve biraz JavaScript'le çizildi.</p>
        <a class="footer__admin" href="admin.html" data-i18n="footer.admin">yönetim</a>
      </div>
    </div>
  </footer>"""


def apply(path):
    s = open(path, encoding="utf-8").read()
    s = re.sub(r"  <script>\n    \(function \(\) \{\n.*?  </script>", lambda m: HEAD_SCRIPT, s, count=1, flags=re.S)
    s = re.sub(r'  <a class="skip-link".*?</div>\n(?=\n  <main)', lambda m: HEADER, s, count=1, flags=re.S)
    s = re.sub(r"  <footer class=\"footer\">.*?</footer>", lambda m: FOOTER, s, count=1, flags=re.S)
    open(path, "w", encoding="utf-8").write(s)
    ok = all(x in s for x in ['lang-pending', 'lang-toggle', 'galeri.html', 'footer__admin'])
    print(("OK   " if ok else "HATA ") + path)


if __name__ == "__main__":
    for p in sys.argv[1:]:
        apply(p)
