/* =========================================================
   HAKKIMDA — "Bir öğrencinin defterinden"
   Bağımlılık: core.js (window.Doodle)
   ========================================================= */
(function () {
  "use strict";

  const D = window.Doodle;
  if (!D) return;

  /* ---------------------------------------------------------
     İngilizce sözlük (senkron, onReady'den önce)
     --------------------------------------------------------- */
  D.i18n.add({
    "about.meta.title": "About | Ad Soyad",
    "about.meta.desc": "About Ad Soyad: ID photo, résumé (education, internship, certificates, languages), weekly class timetable, skills, interests and a first animation snippet.",

    "about.hero.hi": "Hi, I'm",
    "about.hero.bio": "I'm a second-year <span data-bind=\"department\">Computer Engineering</span> student at <span data-bind=\"university\">Örnek University</span>, living in <span data-bind=\"city\">Istanbul</span>. By day I'm <span class=\"marker\">solving algorithms</span>; by night I build <span class=\"marker pink\">interfaces that look hand-drawn</span> with <abbr title=\"HyperText Markup Language\">HTML</abbr>, <abbr title=\"Cascading Style Sheets\">CSS</abbr> and <abbr title=\"JavaScript\">JS</abbr>.",
    "about.hero.chipsLabel": "Quick facts",
    "about.hero.chip2": "frontend developer",
    "about.hero.chip4": "open to internships",
    "about.hero.cue": "scroll down, let the notebook fill itself in",
    "about.photo.alt": "ID photo of Ad Soyad",
    "about.photo.caption": "me · ID photo mode",
    "about.notes.label": "Notes scribbled in the margin",
    "about.notes.a": "that's me!",
    "about.notes.b": "coffee addict",
    "about.notes.c": "night owl",
    "about.notes.d": "in love with CSS",

    "about.cv.title": "Résumé",
    "about.cv.lead": "Education, internship and certificates on a single road. Follow the paper plane: the path draws itself as you scroll, and every stop stamps a new line onto my résumé.",
    "about.cv.s1": "start",
    "about.cv.s2": "accepted!",
    "about.cv.s3": "certified",
    "about.cv.s4": "intern",
    "about.cv.s5": "next",
    "about.cv.tagEdu": "education",
    "about.cv.tagCert": "certificate",
    "about.cv.tagJob": "experience",
    "about.cv.tagNext": "coming soon",
    "about.cv.now": "present",
    "about.cv.summer": "summer",
    "about.cv.m1.t": "Örnek Anatolian High School",
    "about.cv.m1.p": "Science track, graduated with 89/100. I built my first web page in IT class; at the robotics club I watched code move real things, and it got serious.",
    "about.cv.m1.n": "where it all started",
    "about.cv.m2.p": "B.Sc., 2nd year. <abbr title=\"Grade Point Average\">GPA</abbr> 3.24 / 4.00. Through data structures, algorithms and web design I'm learning the difference between \"it works\" and \"it works well\".",
    "about.cv.m2.n": "still in progress ✎",
    "about.cv.m3.t": "Frontend Web Development",
    "about.cv.m3.p": "A 120-hour online programme: modern CSS, accessibility and JavaScript across 12 small projects. My favourite: a to-do list that draws itself.",
    "about.cv.m3.n": "finished at 3 a.m.",
    "about.cv.m4.t": "Frontend intern · Örnek Teknoloji Inc.",
    "about.cv.m4.p": "A mandatory 20-workday summer internship. Code reviews, Git flow and design-to-code processes, plus how fast your heart beats when you ship to production.",
    "about.cv.m4.n": "my first PR got merged!",
    "about.cv.m5.t": "Next page: maybe with you",
    "about.cv.m5.p": "A new internship, open-source contributions or a project we sketch together. This page of the notebook is still blank.",
    "about.cv.m5.a": "let's write it together →",

    "about.cert.title": "Certificates",
    "about.cert.ok": "verified",
    "about.cert.c1": "Frontend Web Development",
    "about.cert.c1b": "online programme · 120 hours",
    "about.cert.c2": "Responsive Web Design",
    "about.cert.c2b": "online course · 300 hours",
    "about.cert.c3": "Version Control with Git and GitHub",
    "about.cert.c3b": "university club workshop",
    "about.cert.c4": "Introduction to Web Accessibility",
    "about.cert.c4b": "online course · <abbr title=\"Web Content Accessibility Guidelines\">WCAG</abbr> 2.2",
    "about.lang.title": "Languages",
    "about.lang.tr": "Turkish",
    "about.lang.trL": "native",
    "about.lang.en": "English",
    "about.lang.enL": "B2 · fluent in technical docs",
    "about.lang.de": "German",
    "about.lang.deL": "A1 · stops at \"Guten Tag\"",
    "about.lang.note": "levels per <abbr title=\"Common European Framework of Reference for Languages\">CEFR</abbr>",

    "about.tt.title": "My weekly timetable",
    "about.tt.lead": "Computer Engineering, 2nd year, fall term. Pencilled into my graph-paper notebook; the highlighter colour tells you what kind of course it is.",
    "about.tt.legendLabel": "Colour key",
    "about.tt.lg.cs": "department course",
    "about.tt.lg.math": "mathematics",
    "about.tt.lg.web": "web and design",
    "about.tt.lg.lang": "language",
    "about.tt.swipe": "swipe the table sideways",
    "about.tt.caption": "2025–2026 fall term · weekly class timetable",
    "about.tt.time": "Time",
    "about.tt.d1": "Monday",
    "about.tt.d2": "Tuesday",
    "about.tt.d3": "Wednesday",
    "about.tt.d4": "Thursday",
    "about.tt.d5": "Friday",
    "about.tt.ds": "Data Structures",
    "about.tt.alg": "Algorithms",
    "about.tt.de": "Differential Equations",
    "about.tt.la": "Linear Algebra",
    "about.tt.prob": "Probability and Statistics",
    "about.tt.dsl": "Data Structures (lab)",
    "about.tt.web": "Web Design",
    "about.tt.webp": "Web Design (practice)",
    "about.tt.ga": "Graphic Animation 1",
    "about.tt.eng": "Academic English",
    "about.tt.fav": "my favourite!",
    "about.tt.lunch": "lunch break · cafeteria queue · one more coffee",
    "about.tt.f1": "free · library",
    "about.tt.f2": "club meeting",
    "about.tt.f3": "free · basketball",
    "about.tt.f4": "weekend mode",
    "about.tt.total": "Total",
    "about.tt.sum": "8 courses · 15 blocks a week · 30 <abbr title=\"European Credit Transfer and Accumulation System\">ECTS</abbr>",
    "about.tt.today": "today!",
    "about.tt.nowIn": "Right now ({d}, {t}) I'm probably in {c}.",
    "about.tt.nowFree": "Right now ({d}, {t}): no class, most likely in the coffee queue.",
    "about.tt.off": "Right now ({d}, {t}): classes are over, it's side-project time.",
    "about.tt.weekend": "Weekend: notebook closed, pencils resting.",

    "about.sk.title": "Skills",
    "about.sk.lead": "Each bar shows how much the pencil has scribbled on that topic. Denser hatching, more practice. The percentages draw themselves as you scroll.",
    "about.sk.memo": "<strong>note:</strong> these percentages were calculated with rigorous science, i.e. by asking myself at midnight.",
    "about.sk.q1": "in love with semantic tags",
    "about.sk.q2": "at peace with flexbox",
    "about.sk.q3": "<code>console.log</code> master",
    "about.sk.q4": "no longer scared of a <code>merge conflict</code>",
    "about.sk.q5": "automation scripts",
    "about.sk.q6": "on good terms with <code>JOIN</code>s",
    "about.abbr.html": "HyperText Markup Language",
    "about.abbr.css": "Cascading Style Sheets",
    "about.abbr.sql": "Structured Query Language",

    "about.likes.title": "My interests",
    "about.likes.lead": "One ranked, one delightfully messy: my favourite tech gets the podium, everything else is scribbled on a post-it.",
    "about.likes.padTitle": "In and out of code",
    "about.likes.l1": "web animation and micro-interactions",
    "about.likes.l2": "interface and type design",
    "about.likes.l3": "the accessible web",
    "about.likes.l4": "tiny game prototypes",
    "about.likes.l5": "sketching and caricature",
    "about.likes.l6": "basketball",
    "about.likes.l7": "science-fiction novels",
    "about.likes.l8": "brewing filter coffee",
    "about.top.title": "My top 5 technologies",
    "about.top.1": "every day is a holiday since <code>:has()</code> landed",
    "about.top.2": "the part that brings a page to life",
    "about.top.3": "responsible for every bounce on this page",
    "about.top.4": "sketch first, code later",
    "about.top.5": "a time machine for code",

    "about.code.title": "My first animation code",
    "about.code.lead": "The first animation I wrote in my notebook, back in 2019: a ball bouncing with a single <code>@keyframes</code> rule and the <code>animation</code> property. I still use the same secret today: <mark>squash first, then stretch</mark>.",
    "about.code.c1": "/* 2019 · my first animation: a bouncing ball */",
    "about.code.c2": "/* squash */",
    "about.code.c3": "/* stretch */",
    "about.code.cap": "bounce.css · 12 lines · notebook page 3",
    "about.code.count": "bounces",
    "about.code.tip": "Press the button, or focus it and hit <kbd>Enter</kbd>: the code above really runs.",
    "about.code.run": "run it",
    "about.code.stop": "stop",
    "about.code.squash": "squash",
    "about.code.release": "release",

    "about.tools.title": "My toolbox",
    "about.tools.hint": "psst… arrange the stickers however you like!",
    "about.tools.reset": "tidy up",
    "about.tools.label": "Tools I use",
    "about.tools.t1": "my code nest",
    "about.tools.t2": "sketch first",
    "about.tools.t3": "time machine",
    "about.tools.t4": "showcase",
    "about.tools.t5": "detective mode",
    "about.tools.t6": "black screen, no white lies",
    "about.tools.t7": "my second brain",
    "about.tools.t8": "no lo-fi, no work",
    "about.tools.n9": "Coffee",
    "about.tools.t9": "the most important tool",
    "about.tools.n10": "Sketchbook",
    "about.tools.t10": "where everything begins",

    "about.facts.title": "Did you know?",
    "about.facts.lead": "Tap the post-its (or focus one and press <kbd>Enter</kbd>): little confessions hide on the back.",
    "about.facts.hint": "flip ↻",
    "about.facts.q1": "Coffees a day?",
    "about.facts.a1": "Three. The fourth is always the \"last\" one.",
    "about.facts.q2": "My first code?",
    "about.facts.a2": "A scrolling \"Welcome\" made with <code>&lt;marquee&gt;</code>. 2019. Zero regrets.",
    "about.facts.q3": "Favourite shortcut?",
    "about.facts.a3": "<kbd>Ctrl</kbd> + <kbd>Z</kbd>. If only it worked in real life.",
    "about.facts.q4": "Night or day?",
    "about.facts.a4": "Night. The best CSS gets written after 2 a.m.",
    "about.facts.q5": "Tabs or spaces?",
    "about.facts.a5": "Two spaces. This topic is closed for debate.",
    "about.facts.q6": "Outside of code?",
    "about.facts.a6": "Sketchbook, basketball and a never-ending watchlist.",
    "about.facts.answer": "Answer:",
    "about.facts.closed": "card flipped back.",

    "about.outro.title": "Final word",
    "about.outro.cite": "Sketchbook, page 1",
    "about.outro.work": "See my projects",
    "about.outro.contact": "Get in touch",
    "about.quote": "Every great project starts with a scribble.",
  });

  const gsap = D.gsap;
  const ST = D.ScrollTrigger;
  const RM = D.reducedMotion || !gsap || !ST;

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const clamp = (min, max, v) => Math.min(max, Math.max(min, v));
  const fmt = (str, map) => str.replace(/\{(\w)\}/g, (m, k) => (map[k] != null ? map[k] : m));
  const DESKTOP_POINTER = "(min-width: 768px) and (hover: hover) and (pointer: fine)";
  const PEN_SVG =
    '<svg viewBox="0 0 90 22" aria-hidden="true"><path d="M2 5 L62 5 L62 17 L2 17 Z" fill="var(--c)" stroke="#161714" stroke-width="2"/><path d="M2 5 L-6 5 L-6 17 L2 17" fill="#e07a4a" stroke="#161714" stroke-width="2"/><path d="M62 5 L84 11 L62 17 Z" fill="#f3d9b1" stroke="#161714" stroke-width="2" stroke-linejoin="round"/><path d="M76 9 L84 11 L76 13 Z" fill="#161714"/></svg>';

  /* ---------------------------------------------------------
     0. Öğeler + başlangıç durumları (perde kalkmadan önce)
     --------------------------------------------------------- */
  const hero = {
    stage: $(".about-hero__stage"),
    drop: $(".about-hero__drop"),
    tilt: $(".about-hero__tilt"),
    name: $(".about-hero__name"),
    swoosh: $(".about-hero__swoosh"),
    doodles: $(".about-polaroid__doodles"),
    notes: $$(".about-note"),
  };
  const story = {
    track: $(".about-story__track"),
    svg: $(".about-story__svg"),
    path: $(".about-story__path"),
    ghost: $(".about-story__ghost"),
    rider: $(".about-story__rider"),
    miles: $$(".about-mile"),
  };
  const meters = $$(".about-meter");
  const certs = $$(".about-cert");
  const langs = $$(".about-lang");
  const tt = {
    sheet: $(".about-tt__sheet"),
    table: $(".about-tt__table"),
    heads: $$(".about-tt__table thead th"),
    rowHeads: $$(".about-tt__table tbody th[scope='row']"),
    cells: $$(".about-tt__table tbody td"),
    foot: $(".about-tt__table tfoot"),
    now: $(".about-tt__now"),
  };
  const top5 = { list: $(".about-top5__list"), items: $$(".about-top5__item") };
  const likes = { wrap: $(".about-likes__pad-wrap"), items: $$(".about-likes__list li") };
  const code = {
    pre: $(".about-code__pre"),
    lines: $$(".about-code__ln"),
    stage: $(".about-code__stage"),
    ball: $(".about-code__ball"),
    floor: $(".about-code__floor"),
    run: $(".about-code__run"),
    runLabel: $(".about-code__runLabel"),
    n: $(".about-code__n"),
  };
  const tools = {
    section: $(".about-tools"),
    board: $(".about-tools__board"),
    list: $(".about-tools__list"),
    stickers: $$(".about-sticker"),
    reset: $(".about-tools__reset"),
  };
  const facts = $$(".about-fact");
  const quote = $(".about-quote p");
  const QUOTE_TR = quote ? quote.textContent.trim() : "";

  // metre kalemleri (dekor; JS yokken gerek yok)
  $$(".about-meter__pen").forEach((p) => (p.innerHTML = PEN_SVG));

  let quoteWords = splitQuote(quote, QUOTE_TR);
  let todayTh = null;

  // ders programı: doldurma sırası (gün gün, yukarıdan aşağı; öğle arası en sonda)
  const ttOrder = tt.cells
    .map((td, k) => ({ td, k, day: +td.dataset.day || 6, row: td.parentElement.sectionRowIndex }))
    .sort((a, b) => a.day - b.day || a.row - b.row || a.k - b.k)
    .map((o) => o.td);

  if (!RM) {
    // Hero
    if (hero.drop) gsap.set(hero.drop, { autoAlpha: 0, y: -180, rotation: -16 });
    if (hero.name) gsap.set(hero.name, { clipPath: "inset(-30% 100% -30% -5%)" });
    if (hero.swoosh) D.prepDraw(hero.swoosh);
    if (hero.doodles) D.prepDraw(hero.doodles);
    hero.notes.forEach((n) => {
      gsap.set($(".about-note__text", n), { autoAlpha: 0, scale: 0.3, y: 10 });
      D.prepDraw($("svg", n));
    });
    // Özgeçmiş yolu
    story.miles.forEach((m) => {
      const right = m.classList.contains("about-mile--right");
      gsap.set($(".about-mile__stamp", m), { autoAlpha: 0, scale: 2.6, rotation: -35 });
      gsap.set($(".about-mile__card", m), { autoAlpha: 0, x: right ? 70 : -70, rotation: right ? 4 : -4 });
    });
    if (story.path) story.path.style.opacity = "0";
    gsap.set($$(".about-cert__stamp"), { autoAlpha: 0, scale: 2.6, rotation: -45 });
    gsap.set(certs, { autoAlpha: 0, x: -30 });
    gsap.set($$(".about-lang__dots i"), { scale: 0 });
    // Ders programı
    gsap.set(tt.heads, { autoAlpha: 0, y: -14, rotation: -6 });
    gsap.set(tt.rowHeads, { autoAlpha: 0, x: -14 });
    tt.cells.forEach((td) => {
      if (td.dataset.type) {
        gsap.set(td, { "--hl": 0 });
        gsap.set(Array.from($(".about-tt__in", td).children), { autoAlpha: 0, y: 8, rotation: -6 });
      } else {
        gsap.set($(".about-tt__in", td), { autoAlpha: 0, scale: 0.85 });
      }
    });
    if (tt.foot) gsap.set(tt.foot, { autoAlpha: 0 });
    // Metre
    meters.forEach((m) => {
      gsap.set($(".about-meter__fill", m), { xPercent: -100 });
      gsap.set($(".about-meter__hatch", m), { xPercent: 100 });
      gsap.set($(".about-meter__pen", m), { xPercent: -100, autoAlpha: 0 });
      D.prepDraw($(".about-meter__frame", m));
      $(".about-meter__num", m).textContent = "0";
    });
    // İlgi alanları
    gsap.set(top5.items, { autoAlpha: 0, x: -50, rotation: -4 });
    if (top5.list) top5.list.classList.add("is-waiting");
    if (likes.wrap) gsap.set(likes.wrap, { autoAlpha: 0, y: -90, rotation: -10 });
    gsap.set(likes.items, { clipPath: "inset(0% 100% 0% 0%)" });
    // Kod: satır numaraları görünür, metin yazılmayı bekler
    gsap.set(code.lines, { clipPath: "inset(0px 100% 0px -90px)" });
    // Çıkartmalar + post-it'ler
    gsap.set(tools.stickers, { autoAlpha: 0, scale: 0.2 });
    gsap.set(facts, { autoAlpha: 0, y: -160 });
  } else {
    quoteWords.forEach((w) => w.classList.add("is-lit"));
  }

  // Animasyondan bağımsız etkileşimler: her durumda çalışır
  initFlips();
  initRunner();
  initTimetableLive();
  initCrosshair();

  /* ---------------------------------------------------------
     1. HERO
     --------------------------------------------------------- */
  function initHero(mm) {
    const tl = gsap.timeline({ delay: 0.15 });
    if (hero.name) {
      tl.to(hero.name, { clipPath: "inset(-30% -10% -30% -5%)", duration: 0.95, ease: "power2.inOut" }, 0.25);
    }
    if (hero.swoosh) {
      tl.to(D.prepDraw(hero.swoosh), { strokeDashoffset: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" }, 1);
    }
    tl.to(hero.drop, { autoAlpha: 1, y: 0, rotation: 0, duration: 1.1, ease: "back.out(1.5)" }, 0.35);
    if (hero.doodles) {
      tl.to(D.prepDraw(hero.doodles), { strokeDashoffset: 0, duration: 0.45, stagger: 0.14, ease: "power2.out" }, "-=0.35");
    }
    hero.notes.forEach((n, i) => {
      const at = i === 0 ? "-=0.6" : "-=0.25";
      tl.to(D.prepDraw($("svg", n)), { strokeDashoffset: 0, duration: 0.45, stagger: 0.12, ease: "power2.inOut" }, at);
      tl.to($(".about-note__text", n), { autoAlpha: 1, scale: 1, y: 0, duration: 0.55, ease: "back.out(2.6)" }, "-=0.35");
    });

    gsap.to(hero.stage, {
      yPercent: -10,
      rotation: -3,
      ease: "none",
      scrollTrigger: { trigger: ".about-hero", start: "top top", end: "bottom top", scrub: true },
    });

    mm.add(DESKTOP_POINTER, () => {
      const rx = gsap.quickTo(hero.tilt, "rotationX", { duration: 0.6, ease: "power3.out" });
      const ry = gsap.quickTo(hero.tilt, "rotationY", { duration: 0.6, ease: "power3.out" });
      const area = $(".about-hero");
      const onMove = (e) => {
        const r = hero.stage.getBoundingClientRect();
        ry(clamp(-1, 1, (e.clientX - (r.left + r.width / 2)) / (r.width / 1.2)) * 16);
        rx(-clamp(-1, 1, (e.clientY - (r.top + r.height / 2)) / (r.height / 1.2)) * 12);
      };
      const onLeave = () => {
        rx(0);
        ry(0);
      };
      area.addEventListener("pointermove", onMove);
      area.addEventListener("pointerleave", onLeave);
      return () => {
        area.removeEventListener("pointermove", onMove);
        area.removeEventListener("pointerleave", onLeave);
        gsap.set(hero.tilt, { rotationX: 0, rotationY: 0 });
      };
    });
  }

  /* ---------------------------------------------------------
     2. ÖZGEÇMİŞ YOLU — tek uzun SVG yol (scrub), kağıt uçak ucunda
     --------------------------------------------------------- */
  const geo = { L: 0, N: 0, lens: null, us: null, stampU: [] };

  function buildPath() {
    const { track, svg, path, ghost } = story;
    if (!track || !path) return false;
    const W = track.clientWidth;
    const H = track.clientHeight;
    if (!W || !H) return false;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const tr = track.getBoundingClientRect();
    const pts = story.miles.map((m) => {
      const r = $(".about-mile__stamp", m).getBoundingClientRect();
      return { x: r.left + r.width / 2 - tr.left, y: r.top + r.height / 2 - tr.top };
    });
    const px = mobile ? pts[0].x : W / 2;
    let d = `M${px} 0`;
    let prev = { x: px, y: 0 };
    const f = (n) => n.toFixed(1);
    pts.forEach((p, i) => {
      const dy = p.y - prev.y;
      if (mobile) {
        const w = (i % 2 ? 1 : -1) * Math.min(22, W * 0.05);
        d += ` C${f(prev.x + w)} ${f(prev.y + dy * 0.4)} ${f(p.x + w)} ${f(p.y - dy * 0.4)} ${f(p.x)} ${f(p.y)}`;
      } else if (i === 2 && W >= 980) {
        const M = { x: (prev.x + p.x) / 2, y: (prev.y + p.y) / 2 + 10 };
        const dir = Math.sign(p.x - prev.x) || 1;
        const r = clamp(34, 62, W * 0.05);
        const hx = W * 0.14;
        d += ` C${f(prev.x)} ${f(prev.y + dy * 0.38)} ${f(M.x - dir * hx)} ${f(M.y)} ${f(M.x)} ${f(M.y)}`;
        d += ` C${f(M.x + dir * r * 1.7)} ${f(M.y)} ${f(M.x + dir * r * 1.3)} ${f(M.y - r * 2.1)} ${f(M.x)} ${f(M.y - r * 2.1)}`;
        d += ` C${f(M.x - dir * r * 1.3)} ${f(M.y - r * 2.1)} ${f(M.x - dir * r * 1.7)} ${f(M.y)} ${f(M.x)} ${f(M.y)}`;
        d += ` C${f(M.x + dir * hx)} ${f(M.y)} ${f(p.x)} ${f(p.y - dy * 0.38)} ${f(p.x)} ${f(p.y)}`;
      } else {
        d += ` C${f(prev.x)} ${f(prev.y + dy * 0.5)} ${f(p.x)} ${f(p.y - dy * 0.5)} ${f(p.x)} ${f(p.y)}`;
      }
      prev = p;
    });
    const end = { x: mobile ? px : W / 2, y: H };
    const dy = end.y - prev.y;
    d += ` C${f(prev.x)} ${f(prev.y + dy * 0.6)} ${f(end.x)} ${f(end.y - dy * 0.5)} ${f(end.x)} ${f(end.y)}`;

    path.setAttribute("d", d);
    ghost.setAttribute("d", d);

    const L = path.getTotalLength();
    const N = Math.min(1400, Math.max(200, Math.ceil(L / 3)));
    const lens = new Float32Array(N + 1);
    const ys = new Float32Array(N + 1);
    const xs = new Float32Array(N + 1);
    let ymax = 0;
    for (let i = 0; i <= N; i++) {
      const l = (L * i) / N;
      const pt = path.getPointAtLength(l);
      lens[i] = l;
      xs[i] = pt.x;
      ymax = Math.max(ymax, pt.y);
      ys[i] = ymax;
    }
    const us = new Float32Array(N + 1);
    for (let i = 0; i <= N; i++) us[i] = 0.5 * (lens[i] / L) + 0.5 * (ys[i] / ymax);
    geo.stampU = pts.map((p) => {
      let best = 0;
      let bd = Infinity;
      for (let i = 0; i <= N; i++) {
        const pt = path.getPointAtLength(lens[i]);
        const dd = (pt.x - p.x) * (pt.x - p.x) + (pt.y - p.y) * (pt.y - p.y);
        if (dd < bd) {
          bd = dd;
          best = i;
        }
      }
      return us[best];
    });
    Object.assign(geo, { L, N, lens, us });
    path.style.strokeDasharray = `${L} ${L}`;
    return true;
  }

  function lengthAt(s) {
    const { us, lens, N } = geo;
    if (s <= 0) return 0;
    if (s >= 1) return geo.L;
    let lo = 0;
    let hi = N;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (us[mid] < s) lo = mid + 1;
      else hi = mid;
    }
    if (lo === 0) return 0;
    const u0 = us[lo - 1];
    const u1 = us[lo];
    const t = u1 > u0 ? (s - u0) / (u1 - u0) : 0;
    return lens[lo - 1] + (lens[lo] - lens[lo - 1]) * t;
  }

  function buildStoryStatic() {
    if (!buildPath()) return;
    story.path.style.strokeDashoffset = "0";
    placeRider(geo.L);
    window.addEventListener(
      "resize",
      debounce(() => {
        if (buildPath()) {
          story.path.style.strokeDashoffset = "0";
          placeRider(geo.L);
        }
      }, 200)
    );
  }

  function placeRider(len) {
    const p = story.path;
    const a = p.getPointAtLength(len);
    const ahead = len + 2 <= geo.L;
    const b = p.getPointAtLength(ahead ? len + 2 : Math.max(0, len - 2));
    const ang = ahead ? Math.atan2(b.y - a.y, b.x - a.x) : Math.atan2(a.y - b.y, a.x - b.x);
    if (RM) {
      story.rider.style.transform = `translate(${a.x}px, ${a.y}px) rotate(${(ang * 180) / Math.PI}deg)`;
    } else {
      gsap.set(story.rider, { x: a.x, y: a.y, rotation: (ang * 180) / Math.PI });
    }
  }

  function initStory() {
    if (!story.track || !buildPath()) return;
    const state = { s: 0 };
    const stamped = story.miles.map(() => false);
    const stampTls = story.miles.map((m) => {
      const stamp = $(".about-mile__stamp", m);
      const burst = $(".about-mile__burst", m);
      const card = $(".about-mile__card", m);
      const tl = gsap.timeline({ paused: true });
      tl.to(stamp, { autoAlpha: 1, scale: 0.9, rotation: 0, duration: 0.3, ease: "power3.in" })
        .to(stamp, { scale: 1, duration: 0.6, ease: "elastic.out(1.2, 0.4)" })
        .fromTo(burst, { autoAlpha: 1, scale: 0.6 }, { autoAlpha: 0, scale: 1.4, duration: 0.6, ease: "power2.out" }, 0.28)
        .to(card, { autoAlpha: 1, x: 0, rotation: 0, duration: 0.9, ease: "expo.out" }, 0.22);
      return tl;
    });
    story.path.style.opacity = "1";

    const render = () => {
      const len = lengthAt(state.s);
      story.path.style.strokeDashoffset = String(geo.L - len);
      placeRider(len);
      geo.stampU.forEach((u, k) => {
        if (!stamped[k] && state.s >= u - 0.004) {
          stamped[k] = true;
          stampTls[k].timeScale(1).play();
        } else if (stamped[k] && state.s < u - 0.06) {
          stamped[k] = false;
          stampTls[k].timeScale(2.2).reverse();
        }
      });
    };

    gsap.to(state, {
      s: 1,
      ease: "none",
      onUpdate: render,
      scrollTrigger: { trigger: story.track, start: "top 62%", end: "bottom 62%", scrub: 0.8 },
    });
    render();
    ST.addEventListener("refresh", () => {
      if (buildPath()) render();
    });
  }

  /* sertifika damgaları + dil noktaları */
  function initCvExtras() {
    const list = $(".about-certs");
    if (list) {
      ST.create({
        trigger: list,
        start: "top 78%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();
          certs.forEach((li, i) => {
            const stamp = $(".about-cert__stamp", li);
            const at = i * 0.32;
            tl.to(li, { autoAlpha: 1, x: 0, duration: 0.5, ease: "expo.out" }, at);
            tl.to(stamp, {
              autoAlpha: 0.85,
              scale: 1,
              rotation: -12,
              duration: 0.32,
              ease: "power4.in",
              onComplete: () => {
                const r = stamp.getBoundingClientRect();
                D.juice.burst(r.left + r.width / 2, r.top + r.height / 2, {
                  count: 9,
                  power: 0.7,
                  colors: [getComputedStyle(stamp).color],
                });
                D.juice.shake(li, 0.4);
              },
            }, at + 0.25);
          });
        },
      });
    }
    langs.forEach((row, r) => {
      ST.create({
        trigger: row,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to($$(".about-lang__dots i", row), {
            scale: 1,
            duration: 0.45,
            ease: "back.out(3)",
            stagger: 0.08,
            delay: r * 0.12,
          });
        },
      });
    });
  }

  /* ---------------------------------------------------------
     3. DERS PROGRAMI — hücreler sırayla "doldurulur"
     --------------------------------------------------------- */
  function initTimetable() {
    if (!tt.table) return;
    ST.create({
      trigger: tt.table,
      start: "top 72%",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(tt.heads, { autoAlpha: 1, y: 0, rotation: 0, duration: 0.5, stagger: 0.06, ease: "back.out(2.4)" }, 0);
        tl.to(tt.rowHeads, { autoAlpha: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power3.out" }, 0.15);
        ttOrder.forEach((td, i) => {
          const at = 0.45 + i * 0.075;
          const box = $(".about-tt__in", td);
          if (td.dataset.type) {
            tl.to(td, { "--hl": 1, duration: 0.34, ease: "power2.out" }, at);
            tl.to(Array.from(box.children), { autoAlpha: 1, y: 0, rotation: 0, duration: 0.38, stagger: 0.06, ease: "back.out(2.5)" }, at + 0.12);
            if (td.classList.contains("about-tt__fav")) {
              tl.add(() => {
                const r = td.getBoundingClientRect();
                D.juice.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 16, power: 1.2 });
                D.juice.squash(box, 1.1);
              }, at + 0.4);
            }
          } else {
            tl.to(box, { autoAlpha: 1, scale: 1, duration: 0.45, ease: "back.out(2.2)" }, at);
          }
        });
        if (tt.foot) tl.to(tt.foot, { autoAlpha: 1, duration: 0.5 }, ">-0.1");
        tl.add(drawToday, ">");
      },
    });
  }

  // bugünün sütunu: elle çizilmiş daire + not

  function markToday() {
    const dow = new Date().getDay();
    todayTh = $(`.about-tt__table thead th[data-day="${dow}"]`);
    if (!todayTh) return;
    todayTh.classList.add("is-today");
    $$(`.about-tt__table tbody td[data-day="${dow}"]`).forEach((td) => td.classList.add("is-today"));
    todayTh.insertAdjacentHTML(
      "beforeend",
      '<svg class="about-tt__circle" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true"><path d="M110 8 C60 2 10 18 8 50 C6 82 60 96 110 92 C160 88 196 70 192 44 C188 18 140 4 80 12"/></svg><span class="about-tt__todayTag hand-note" aria-hidden="true"></span>'
    );
    $(".about-tt__todayTag", todayTh).textContent = D.t("about.tt.today", "bugün!");
    if (!RM) {
      D.prepDraw($(".about-tt__circle", todayTh));
      gsap.set($(".about-tt__todayTag", todayTh), { autoAlpha: 0, scale: 0.4 });
    }
  }
  function drawToday() {
    if (!todayTh) return;
    gsap.to(D.prepDraw($(".about-tt__circle", todayTh)), { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" });
    gsap.to($(".about-tt__todayTag", todayTh), { autoAlpha: 1, scale: 1, duration: 0.5, delay: 0.5, ease: "back.out(3)" });
  }

  // "şu an neredeyim?" satırı — gerçek saate göre
  function cellAt(day, rowIdx) {
    const rows = $$(".about-tt__table tbody tr");
    for (let r = rowIdx; r >= 0; r--) {
      const td = $(`td[data-day="${day}"]`, rows[r]);
      if (td && r + (td.rowSpan || 1) > rowIdx) return td;
    }
    return null;
  }
  function updateNow() {
    if (!tt.now) return;
    $$(".about-tt__table td.is-now").forEach((td) => td.classList.remove("is-now"));
    const now = new Date();
    const dow = now.getDay();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const hm = `${hh}:${mm}`;
    const th = $(`.about-tt__table thead th[data-day="${dow}"] span[data-i18n]`);
    if (!th) {
      tt.now.textContent = D.t("about.tt.weekend", "Hafta sonu: defter kapalı, kalemler dinleniyor.");
      return;
    }
    const map = { d: th.textContent.trim(), t: hm };
    const rows = $$(".about-tt__table tbody tr");
    const rowIdx = rows.findIndex((tr) => tr.dataset.start <= hm && hm < tr.dataset.end);
    if (rowIdx < 0) {
      tt.now.textContent = fmt(D.t("about.tt.off", "Şu an ({d}, {t}): dersler bitti, kendi projelerimin saati."), map);
      return;
    }
    const td = cellAt(dow, rowIdx);
    if (!td || td.classList.contains("is-free")) {
      tt.now.textContent = fmt(D.t("about.tt.nowFree", "Şu an ({d}, {t}): dersim yok, büyük ihtimalle kahve sırasındayım."), map);
      return;
    }
    td.classList.add("is-now");
    map.c = $("b", td).textContent.trim();
    tt.now.textContent = fmt(D.t("about.tt.nowIn", "Şu an ({d}, {t}) muhtemelen {c} dersindeyim."), map);
  }
  function initTimetableLive() {
    if (!tt.table) return;
    markToday();
    updateNow();
    setInterval(() => {
      if (!document.hidden) updateNow();
    }, 60000);
    document.addEventListener("doodle:lang", () => {
      updateNow();
      const tag = todayTh && $(".about-tt__todayTag", todayTh);
      if (tag) tag.textContent = D.t("about.tt.today", "bugün!");
    });
  }

  // fareyle hücre üstüne gelince satır + gün başlığı vurgulanır
  function initCrosshair() {
    if (!tt.table) return;
    let hot = [];
    const clear = () => {
      hot.forEach((el) => el.classList.remove("is-hot"));
      hot = [];
    };
    tt.table.addEventListener("pointerover", (e) => {
      const td = e.target.closest("tbody td[data-day]");
      if (!td || hot[0] === td) return;
      clear();
      hot = [td, td.parentElement];
      const th = $(`thead th[data-day="${td.dataset.day}"]`, tt.table);
      if (th) hot.push(th);
      hot.forEach((el) => el.classList.add("is-hot"));
    });
    tt.table.addEventListener("pointerleave", clear);
  }

  /* ---------------------------------------------------------
     4. KARALAMA-METRE
     --------------------------------------------------------- */
  function initMeters() {
    meters.forEach((m, i) => {
      const lvl = parseFloat(getComputedStyle(m).getPropertyValue("--lvl")) || 50;
      const fill = $(".about-meter__fill", m);
      const hatch = $(".about-meter__hatch", m);
      const pen = $(".about-meter__pen", m);
      const num = $(".about-meter__num", m);
      const frame = $(".about-meter__frame path", m);
      const counter = { v: 0 };
      const dur = 0.5 + (1.4 * lvl) / 100;
      ST.create({
        trigger: m,
        start: "top 86%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ delay: (i % 2) * 0.12 });
          tl.to(frame, {
            strokeDashoffset: 0,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => (frame.style.strokeDasharray = "none"),
          })
            .to(pen, { autoAlpha: 1, duration: 0.2 }, 0.25)
            .to([fill, hatch, pen], { xPercent: 0, duration: dur, ease: "power2.inOut" }, 0.35)
            .to(counter, {
              v: lvl,
              duration: dur,
              ease: "power2.inOut",
              onUpdate: () => (num.textContent = Math.round(counter.v)),
            }, 0.35)
            .to(pen, { y: -3, duration: 0.07, repeat: Math.round(dur / 0.07), yoyo: true, ease: "sine.inOut" }, 0.35)
            .to(pen, { y: 0, duration: 0.2 })
            .fromTo(num.parentElement, { scale: 1 }, { scale: 1.35, duration: 0.16, yoyo: true, repeat: 1, ease: "power2.out" }, "-=0.2");
        },
      });
    });
  }

  /* ---------------------------------------------------------
     5. İLGİ ALANLARI — geri sayımla kürsü + yazılan post-it
     --------------------------------------------------------- */
  function initLikes() {
    if (top5.list) {
      ST.create({
        trigger: top5.list,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(top5.items, {
            autoAlpha: 1,
            x: 0,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(2.2)",
            stagger: { each: 0.24, from: "end" },
            onComplete: () => {
              const first = top5.items[0];
              if (!first) return;
              top5.list.classList.remove("is-waiting");
              const r = first.getBoundingClientRect();
              D.juice.burst(r.left + 40, r.top + 30, { count: 20, power: 1.4 });
              D.juice.squash(first, 1);
            },
          });
        },
      });
    }
    if (likes.wrap) {
      ST.create({
        trigger: likes.wrap,
        start: "top 78%",
        once: true,
        onEnter: () => {
          gsap.timeline()
            .to(likes.wrap, { autoAlpha: 1, y: 0, rotation: 0, duration: 0.9, ease: "elastic.out(1, 0.55)" })
            .to(likes.items, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.45, stagger: 0.14, ease: "power1.inOut" }, "-=0.45");
        },
      });
    }
  }

  /* ---------------------------------------------------------
     6. İLK ANİMASYON KODU — satır satır yazılır + gerçekten çalışır
     --------------------------------------------------------- */
  function initCodeTyping() {
    if (!code.pre) return;
    ST.create({
      trigger: code.pre,
      start: "top 75%",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline({ onComplete: () => code.pre.classList.add("is-done") });
        code.lines.forEach((ln) => {
          const n = Math.max(1, ln.textContent.length);
          tl.to(ln, {
            clipPath: "inset(0px 0% 0px -90px)",
            duration: Math.min(0.9, 0.04 + n * 0.022),
            ease: `steps(${Math.min(60, n)})`,
          });
        });
      },
    });
  }

  function initRunner() {
    if (!code.run || !code.stage) return;
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let on = false;
    let count = 0;
    const label = () => {
      if (!code.runLabel) return;
      code.runLabel.textContent = motionOk
        ? on ? D.t("about.code.stop", "durdur") : D.t("about.code.run", "çalıştır")
        : on ? D.t("about.code.release", "bırak") : D.t("about.code.squash", "ez");
    };
    label();
    document.addEventListener("doodle:lang", label);
    code.run.addEventListener("click", () => {
      on = !on;
      code.run.setAttribute("aria-pressed", String(on));
      code.stage.classList.toggle(motionOk ? "is-running" : "is-squashed", on);
      label();
    });
    if (!motionOk || !code.ball) return;
    // alternate: çift sayılı tekrarlar yerde biter → zıplama say + toz bulutu
    code.ball.addEventListener("animationiteration", (e) => {
      if (e.animationName !== "about-bounce") return;
      const k = Math.round(e.elapsedTime / 0.8);
      if (k % 2 !== 0) return;
      count += 1;
      if (code.n) code.n.textContent = String(count);
      if (!RM && code.floor) {
        const r = code.floor.getBoundingClientRect();
        D.juice.burst(r.left + r.width / 2, r.top, { count: 6, power: 0.55, colors: [getComputedStyle(code.floor).backgroundColor] });
      }
    });
  }

  /* ---------------------------------------------------------
     7. ALET ÇANTASI — yapıştır + sürükle
     --------------------------------------------------------- */
  function initTools(mm) {
    if (!tools.board) return;
    ST.create({
      trigger: tools.board,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          tools.stickers,
          { autoAlpha: 0, scale: 0.2, rotation: () => gsap.utils.random(-120, 120), y: -40 },
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            y: 0,
            duration: 0.75,
            ease: "back.out(2.6)",
            stagger: { each: 0.09, from: "random" },
          }
        );
      },
    });

    mm.add(DESKTOP_POINTER, () => {
      tools.section.classList.add("is-draggable");
      tools.stickers.forEach((s) => s.setAttribute("data-cursor", "hover"));
      let z = 10;
      let drag = null;

      const onDown = (e) => {
        if (e.button !== 0) return;
        const el = e.target.closest(".about-sticker");
        if (!el) return;
        e.preventDefault();
        const br = tools.board.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const sx = gsap.getProperty(el, "x");
        const sy = gsap.getProperty(el, "y");
        const pad = 10;
        drag = {
          el,
          px: e.clientX,
          py: e.clientY,
          sx,
          sy,
          lx: e.clientX,
          minX: sx + (br.left + pad - r.left),
          maxX: sx + (br.right - pad - r.right),
          minY: sy + (br.top + pad - r.top),
          maxY: sy + (br.bottom - pad - r.bottom),
          rot: gsap.quickTo(el, "rotation", { duration: 0.35, ease: "power3.out" }),
        };
        try {
          el.setPointerCapture(e.pointerId);
        } catch (err) {
          /* yoksay */
        }
        el.style.zIndex = String(++z);
        el.classList.add("is-dragging");
      };
      const onMove = (e) => {
        if (!drag) return;
        const x = clamp(drag.minX, drag.maxX, drag.sx + e.clientX - drag.px);
        const y = clamp(drag.minY, drag.maxY, drag.sy + e.clientY - drag.py);
        gsap.set(drag.el, { x, y });
        drag.rot(clamp(-14, 14, (e.clientX - drag.lx) * 1.2));
        drag.lx = e.clientX;
      };
      const onUp = () => {
        if (!drag) return;
        const el = drag.el;
        el.classList.remove("is-dragging");
        gsap.to(el, { rotation: 0, duration: 0.8, ease: "elastic.out(1.1, 0.35)" });
        gsap.fromTo(el, { scale: 1.06 }, { scale: 1, duration: 0.4, ease: "back.out(3)" });
        drag = null;
        tools.reset.hidden = false;
      };
      const onReset = () => {
        gsap.to(tools.stickers, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.9,
          ease: "elastic.out(1, 0.5)",
          stagger: { each: 0.04, from: "random" },
        });
        tools.reset.hidden = true;
      };

      tools.list.addEventListener("pointerdown", onDown);
      tools.list.addEventListener("pointermove", onMove);
      tools.list.addEventListener("pointerup", onUp);
      tools.list.addEventListener("pointercancel", onUp);
      tools.list.addEventListener("lostpointercapture", onUp);
      tools.reset.addEventListener("click", onReset);

      return () => {
        tools.section.classList.remove("is-draggable");
        tools.list.removeEventListener("pointerdown", onDown);
        tools.list.removeEventListener("pointermove", onMove);
        tools.list.removeEventListener("pointerup", onUp);
        tools.list.removeEventListener("pointercancel", onUp);
        tools.list.removeEventListener("lostpointercapture", onUp);
        tools.reset.removeEventListener("click", onReset);
        tools.reset.hidden = true;
        gsap.set(tools.stickers, { x: 0, y: 0, rotation: 0 });
        tools.stickers.forEach((s) => (s.style.zIndex = ""));
      };
    });
  }

  /* ---------------------------------------------------------
     8. EĞLENCELİ BİLGİLER — post-it yağmuru + flip
     --------------------------------------------------------- */
  function initFactsRain() {
    const grid = $(".about-facts__grid");
    if (!grid) return;
    ST.create({
      trigger: grid,
      start: "top 78%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          facts,
          { autoAlpha: 0, y: -160, rotation: () => gsap.utils.random(-25, 25) },
          { autoAlpha: 1, y: 0, rotation: 0, duration: 1.1, ease: "bounce.out", stagger: 0.1, clearProps: "transform" }
        );
      },
    });
  }

  function initFlips() {
    const live = $("#aboutFactsLive");
    $$(".about-flip").forEach((btn) => {
      const back = $(".about-flip__face--back", btn);
      btn.addEventListener("click", () => {
        const on = btn.getAttribute("aria-pressed") !== "true";
        const q = $(".about-flip__q", btn).textContent.trim();
        const a = $(".about-flip__a", btn).textContent.trim();
        btn.setAttribute("aria-pressed", String(on));
        back.setAttribute("aria-hidden", String(!on));
        if (live) {
          live.textContent = on
            ? `${q} ${D.t("about.facts.answer", "Cevap:")} ${a}`
            : `${q}: ${D.t("about.facts.closed", "kart tekrar kapandı.")}`;
        }
        if (!RM) {
          gsap.fromTo(btn.parentElement, { y: 0 }, { y: -16, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out", overwrite: "auto" });
        }
      });
    });
  }

  /* ---------------------------------------------------------
     9. KAPANIŞ — kelime kelime fosforlama (scrub), dil değişince yeniden kurulur
     --------------------------------------------------------- */
  function splitQuote(p, text) {
    if (!p) return [];
    const words = text.trim().split(/\s+/);
    p.textContent = "";
    return words.map((w, i) => {
      const span = document.createElement("span");
      span.className = "about-quote__w";
      span.textContent = w;
      const hl = document.createElement("span");
      hl.className = "about-quote__hl";
      hl.setAttribute("aria-hidden", "true");
      span.appendChild(hl);
      p.appendChild(span);
      if (i < words.length - 1) p.appendChild(document.createTextNode(" "));
      return span;
    });
  }

  let quoteTl = null;
  function buildQuoteTl() {
    if (!quoteWords.length) return;
    const step = 0.8;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: quote, start: "top 82%", end: "bottom 42%", scrub: 0.6 },
      onUpdate: () => {
        const t = tl.time();
        quoteWords.forEach((w, i) => w.classList.toggle("is-lit", t >= i * step + 0.95));
      },
    });
    quoteWords.forEach((w, i) => {
      tl.fromTo(w, { opacity: 0.22, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: "none" }, i * step);
      tl.fromTo($(".about-quote__hl", w), { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "none" }, i * step + 0.1);
    });
    quoteTl = tl;
  }

  function initQuote() {
    buildQuoteTl();
    gsap.from(".about-outro__mark", {
      scale: 0.3,
      rotation: -40,
      autoAlpha: 0,
      duration: 0.9,
      ease: "back.out(2)",
      scrollTrigger: { trigger: quote, start: "top 85%", once: true },
    });
  }

  document.addEventListener("doodle:lang", () => {
    if (!quote) return;
    const next = D.t("about.quote", QUOTE_TR);
    quoteWords = splitQuote(quote, next);
    if (RM) {
      quoteWords.forEach((w) => w.classList.add("is-lit"));
      return;
    }
    if (quoteTl) {
      if (quoteTl.scrollTrigger) quoteTl.scrollTrigger.kill();
      quoteTl.kill();
      quoteTl = null;
      buildQuoteTl();
    }
  });

  function debounce(fn, ms) {
    let t;
    return () => {
      clearTimeout(t);
      t = setTimeout(fn, ms);
    };
  }

  /* ---------------------------------------------------------
     Başlat
     --------------------------------------------------------- */
  D.onReady(() => {
    if (RM) {
      buildStoryStatic();
      return;
    }
    const mm = gsap.matchMedia();
    initHero(mm);
    initStory();
    initCvExtras();
    initTimetable();
    initMeters();
    initLikes();
    initCodeTyping();
    initTools(mm);
    initFactsRain();
    initQuote();
  });
})();
