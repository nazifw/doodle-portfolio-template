<div align="center">

**[🇹🇷 Türkçe](README.md) · 🇬🇧 English**

# ✏️ Doodle Portfolio Template

**A sketchbook-themed personal website template that draws itself as you scroll.**
White notebook / black notebook · Turkish / English · 6 pages + blog + admin panel · no build step, just double-click.

[![Live Demo](https://img.shields.io/badge/Live_Demo-open-c4501f?style=for-the-badge)](https://nazifw.github.io/doodle-portfolio-template/)
[![Use this template](https://img.shields.io/badge/Use_this-template-6b7a3a?style=for-the-badge&logo=github)](https://github.com/nazifw/doodle-portfolio-template/generate)

![HTML5](https://img.shields.io/badge/HTML5-161714?logo=html5&logoColor=e2c27c)
![CSS3](https://img.shields.io/badge/CSS3-161714?logo=css&logoColor=e2c27c)
![JavaScript](https://img.shields.io/badge/JavaScript-161714?logo=javascript&logoColor=e2c27c)
![GSAP](https://img.shields.io/badge/GSAP_3.13-161714?logo=greensock&logoColor=e2c27c)
![License](https://img.shields.io/badge/license-MIT-d4a84f)

<img src="docs/banner.jpg" alt="The home page's light (white notebook) and dark (black notebook) themes side by side, split by a diagonal line" width="100%">

</div>

---

## 🎬 What happens when you scroll?

<div align="center">
<img src="docs/demo.gif" alt="Scrolling the home page from top to bottom: the name typed letter by letter, a self-inking manifesto, a horizontal sketchbook strip, projects fanning out, the gallery and counters" width="90%">
</div>

- **Headings that bounce in letter by letter**, arrows and scribbles that draw themselves, highlighter marks that paint as you scroll
- **Pinned sections**: a manifesto that inks word by word, a sketchbook strip that slides sideways, a project deck that fans out
- **Juice**: buttons squash and stretch when pressed, clicks burst into ink particles, hover makes them wiggle
- **Pencil cursor**: leaves an ink trail and wraps buttons in a hand-drawn frame
- **Page transitions**: a yellow notebook-page curtain, with a "hello!" on the first visit

## 📄 Pages

| | |
|---|---|
| <img src="docs/projects.jpg" alt="Projects: pinned work cards on a corkboard with a category filter"> | <img src="docs/flipbook.jpg" alt="Projects: a flipbook whose pages turn as you scroll, with onion-skin frames"> |
| **Projects** — a corkboard, a FLIP-animated filter, a detail panel that grows out of the card | **Flipbook** — a bouncing ball whose frames flip as you scroll, onion skin, a timeline |
| <img src="docs/gallery.jpg" alt="Gallery: photos hung with pegs on a line in a darkroom"> | <img src="docs/about.jpg" alt="About: a taped ID-photo polaroid with handwritten notes"> |
| **Gallery** — a "darkroom": photos on a line that sway with the cursor, plus a lightbox | **About** — an ID-photo polaroid, a résumé path, skill percentages |
| <img src="docs/schedule.jpg" alt="About: a colour-coded weekly class schedule table on a notebook page"> | <img src="docs/blog.jpg" alt="Blog post: table of contents, reading progress and a copyable code block"> |
| **Class schedule** — a real `<table>`; cells fill in with highlighter, "today" is circled | **Blog** — 3 sample posts, table of contents, reading progress, code blocks, screenshots |
| <img src="docs/contact.jpg" alt="Contact: a fill-in-the-blanks letter form on lined paper"> | <img src="docs/admin.jpg" alt="Admin panel: a message summary and a chart of the last 7 days"> |
| **Contact** — a fill-in-the-blanks letter form that folds into a paper plane and flies off when sent | **Admin panel** — incoming messages, profile editing, backups (runs in the browser) |

## 📱 On a phone

<div align="center">
<img src="docs/mobile.jpg" alt="Three phone screens: the home page in the dark theme, the projects board in the light theme, and the contact form in English" width="90%">
</div>

Mobile first: no horizontal overflow from 360 px up to wide screens, and every touch target is at least 44 px.

## ✨ Features

- **6 pages + blog**: Home, About, Projects, Blog (+3 posts), Gallery, Contact
- **Two languages**: an in-page TR/EN toggle — text, titles, meta descriptions and alt text switch instantly
- **Two themes**: white notebook with black ink / black notebook with white ink; accents in khaki · sand · rust
- **Accessible**: a single `h1`, a sensible heading order, full keyboard support, focus-trapped dialogs, `prefers-reduced-motion` support
- **SEO + GEO**: a separate title/description on every page, JSON-LD (Person, Blog, ImageGallery, ContactPage…), `sitemap.xml`, `robots.txt`, `llms.txt`
- **Fast**: critical font preloading, animations that are set up only when they enter the screen, lazy images, a photo optimisation script
- **Works offline**: GSAP, Lenis and the fonts are bundled; no internet needed
- **Admin panel** (`admin.html`): messages from the contact form, profile details, backup and restore

## 🚀 Quick start

```bash
# 1) Create your own repo from the template ("Use this template") or clone it
git clone https://github.com/nazifw/doodle-portfolio-template.git
cd doodle-portfolio-template

# 2) Open it — no build step
start index.html        # Windows   (macOS: open index.html)
```

To try it with a local server: `python -m http.server` → <http://localhost:8000>

## 🛠️ Make it yours

1. **Your details**: replace "Ad Soyad" (Name Surname), `ornek@mail.com`, the phone number and the address in the HTML. (Or use `admin.html` → Profile; that only shows up in that browser.)
2. **Your photos**: replace them using the same file names, then shrink them:
   ```
   img/profil/vesikalik.jpg      img/galeri/galeri-01..12.jpg      img/projeler/ga-01..08.jpg
   ```
   ```bash
   python tools/optimize_images.py   # size + aspect ratio + EXIF cleanup (requires Pillow)
   ```
3. **Your domain**: replace `ornek-alanadi.com` in `sitemap.xml` and `robots.txt`.
4. **Shared menu/footer**: `python tools/shell.py *.html` (don't edit the nav by hand).
5. **Submission package** (for coursework): `python tools/teslim.py STUDENT_NO` → `STUDENT_NO-WEB.PDF`

The admin panel's default password is **`vize2026`** — change it under Settings. The panel is for demo purposes: data lives in the browser (localStorage) and it provides no real security.

> The site's own text is in Turkish by default (page and file names too: *hakkimda* = about, *projeler* = projects, *galeri* = gallery, *iletisim* = contact). The English version of every string lives in the dictionaries in `js/pages/*.js`.

## 📁 Structure

```
├── index.html, hakkimda.html, projeler.html, galeri.html, iletisim.html, admin.html
├── blog.html, blog-*.html          # blog + 3 posts
├── css/
│   ├── core.css                    # design system (tokens, components, themes)
│   └── pages/*.css                 # page-specific styles
├── js/
│   ├── core.js                     # engine: cursor, juice, i18n, scroll animations, transitions
│   ├── pages/*.js                  # page-specific effects + English dictionaries
│   └── vendor/                     # GSAP, ScrollTrigger, Lenis (bundled)
├── fonts/                          # Caveat + Kalam (woff2, with Turkish characters)
├── img/                            # placeholder images
├── tools/                          # shell.py, optimize_images.py, placeholders.py, teslim.py
├── DESIGN.md                       # design system and rules (in Turkish)
└── kaynak.txt                      # credits and sources
```

The design system, declarative animation attributes such as `data-reveal` / `data-split` / `data-draw`, and the `window.Doodle` API are documented in **[DESIGN.md](DESIGN.md)** (Turkish).

## 📜 License and credits

The template's code is licensed under **MIT** — see [LICENSE](LICENSE).
Bundled third-party components keep their own licenses:
[GSAP](https://gsap.com/standard-license) (GreenSock Standard License) ·
[Lenis](https://github.com/darkroomengineering/lenis) (MIT) ·
[Caveat](https://fonts.google.com/specimen/Caveat) and [Kalam](https://fonts.google.com/specimen/Kalam) (SIL Open Font License).
Details: [kaynak.txt](kaynak.txt).

<div align="center"><sub>Drawn with a pencil, coffee and a little JavaScript. ✏️</sub></div>
