/* =========================================================
   ANA SAYFA — home.js  ("Defterin kapağı açılıyor")
   Bağımlılık: core.js (window.Doodle)
   ========================================================= */
(function () {
  "use strict";

  const D = window.Doodle;
  if (!D) return;

  /* ---------------------------------------------------------
     0. İngilizce sözlük (senkron, onReady'den önce)
     --------------------------------------------------------- */
  const KEY_O = '<svg class="home-key__o" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true"><path d="M110 8 C60 2 10 18 8 50 C6 82 60 96 110 92 C160 88 196 70 192 44 C188 18 140 4 80 12"/></svg>';
  const KEY_U = '<svg class="home-key__u" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12 C40 5 90 4 130 8 C160 11 185 9 197 6 M18 16 C70 11 120 12 182 14"/></svg>';
  const KEY_M = '<span class="home-key__mk" aria-hidden="true"></span>';

  D.i18n.add({
    "home.meta.title": "Home | Ad Soyad",
    "home.meta.desc": "Ad Soyad — Computer Engineering student and frontend developer. A hand-drawn sketchbook with a short intro, Graphic Animation projects and photos from the gallery.",
    "home.meta.ogTitle": "Ad Soyad — sketchbook",
    "home.meta.ogDesc": "Personal site of Computer Engineering student Ad Soyad: about, projects, gallery.",

    "home.hero.hello": "hi, I'm",
    "home.hero.role": '<span class="marker" data-delay="1.4">Frontend developer</span> &amp; <span class="marker pink" data-delay="1.8">Computer Engineering</span> student',
    "home.hero.lead": "I draw with code: fast, accessible interfaces that come alive as you scroll. From Istanbul, with a cup of coffee and plenty of scribbles.",
    "home.hero.cta1": "See my projects",
    "home.hero.cta2": "Get in touch",
    "home.hero.note": "<strong>right now:</strong> drawing this notebook",
    "home.hero.hint": "scroll!",

    "home.man.eyebrow": "page 01 — manifesto",
    "home.man.title": "Why do I draw?",
    "home.man.text":
      "To me, a good interface is like a notebook page: " +
      '<span class="home-key home-key--o" data-color="blue">simple' + KEY_O + "</span>, " +
      "friendly and a little scribbly. I don't write code just so it runs — I write it so it " +
      '<span class="home-key home-key--u" data-color="pink">feels' + KEY_U + "</span> " +
      "right. I think pixel by pixel, " +
      '<span class="home-key home-key--m" data-color="yellow">' + KEY_M + "tell it with motion</span>, " +
      "and give a phone the same care as a giant screen. I get curious, I try, I break things and " +
      '<span class="home-key home-key--o" data-color="pink">draw' + KEY_O + "</span> " +
      '<span class="home-key home-key--m" data-color="green">' + KEY_M + "them again.</span>",

    "home.about.eyebrow": "page 02 — me, briefly",
    "home.about.title": 'The notebook\'s <span class="scribble-u" data-color="var(--pink)">owner</span>',
    "home.about.p1": 'Hi! I\'m Ad, a second-year <span class="marker">Computer Engineering</span> student. By day I wrestle with algorithms and data structures; by night I put interfaces in motion.',
    "home.about.p2": 'I sketch in my notebook before writing a single line of code: a good interface deserves as much care as a good algorithm. This term, the Graphic Animation course taught me the magic of timing and <span class="marker green">squash &amp; stretch</span>.',
    "home.about.factCity": "City:",
    "home.about.factUni": "University:",
    "home.about.factYear": "2nd year, fall term",
    "home.about.more": "read more",
    "home.about.cap": "me (rarely this serious)",
    "home.about.back": "Note on the back:<br>favourite key <b>Ctrl+Z</b>,<br>favourite colour <b>rust</b>,<br>biggest fear<br><b>an unsaved file</b>.",
    "home.about.flipLabel": "Flip the photo and read the note on the back",
    "home.about.flipHint": "click to flip!",
    "home.about.alt": "Headshot of Ad Soyad",

    "home.svc.eyebrow": "page 03 — sketchbook",
    "home.svc.title": 'What do I <span class="scribble-u" data-color="var(--blue)">do</span>?',
    "home.svc.tip": "keep scrolling → the pages flow",
    "home.svc.1.t": "Web Development",
    "home.svc.1.p": "Semantic HTML, clean CSS and modular JavaScript: sites that load fast and stay easy to maintain.",
    "home.svc.1.a": "HTML5 &amp; accessibility",
    "home.svc.1.b": "Modern CSS (grid, flex)",
    "home.svc.1.c": "Vanilla JS &amp; APIs",
    "home.svc.2.t": "UI / UX Design",
    "home.svc.2.p": "I scribble on paper first, then refine in Figma. Short paths for the user, a pleasant ride all the way.",
    "home.svc.2.a": "Wireframes &amp; prototypes",
    "home.svc.2.b": "Colour &amp; typography",
    "home.svc.2.c": "Usability testing",
    "home.svc.3.t": "Responsive",
    "home.svc.3.p": "From 360 pixels to a wide monitor: thumb-friendly interfaces that hold up on every screen.",
    "home.svc.3.a": "Mobile first",
    "home.svc.3.b": "Fluid typography",
    "home.svc.3.c": "Touch interaction",
    "home.svc.4.t": "Animation",
    "home.svc.4.p": "Frame by frame in After Effects, in the browser with GSAP and CSS: scroll-driven stories, micro-interactions, self-drawing lines.",
    "home.svc.4.a": "12 principles of animation",
    "home.svc.4.b": "SVG drawing effects",
    "home.svc.4.c": "Reduced-motion support",
    "home.svc.end": "See it all in action: <strong>projects</strong>",

    "home.tapes.title": "Tools and skills I use",
    "home.tapes.a11y": "Accessibility",
    "home.tapes.anim": "Animation",
    "home.tapes.proto": "Prototyping",
    "home.tapes.coffee": "Coffee",

    "home.work.eyebrow": "page 04 — Graphic Animation 1",
    "home.work.title": 'Frame-by-frame <span class="scribble-circle" data-color="var(--pink)">projects</span>',
    "home.work.tip": "scroll and deal the deck!",
    "home.work.1.t": "Bouncing Ball",
    "home.work.1.d": "Squash &amp; stretch, lesson one of the 12 principles: a ball that truly believes in gravity.",
    "home.work.1.alt": "A frame from the Bouncing Ball animation",
    "home.work.2.t": "Kinetic Typography",
    "home.work.2.d": "I made a song lyric dance letter by letter: timing, rhythm and a lot of keyframes.",
    "home.work.2.alt": "A frame from the Kinetic Typography piece",
    "home.work.3.t": "Walk Cycle",
    "home.work.3.d": "A seamless walk cycle for my character, built from contact, down, passing and up poses.",
    "home.work.3.alt": "A frame from the character Walk Cycle animation",
    "home.work.more": "All 8 pieces",

    "home.gal.eyebrow": "page 05 — from the gallery",
    "home.gal.title": 'Photos spilled on the <span class="scribble-u" data-color="var(--yellow)">desk</span>',
    "home.gal.lead": "Campus, city, nature and notebook pages: a handful of the photos that describe me best. Hover to pull one forward; click to open it in the gallery.",
    "home.gal.note": "all 12 are drying on the line",
    "home.gal.more": "Open the gallery",
    "gal.01.t": "First day on campus",
    "gal.01.alt": "On campus, on the steps of the engineering faculty",
    "gal.03.t": "48-hour hackathon",
    "gal.03.alt": "Hackathon night, the team gathered around the table",
    "gal.05.t": "Sunset over the Bosphorus",
    "gal.05.alt": "Sunset over the Bosphorus from the Kadıköy pier",
    "gal.06.t": "Notebook sketches",
    "gal.06.alt": "Interface sketches drawn in pencil on grid paper",
    "gal.08.t": "Pedalling the coast road",
    "gal.08.alt": "Cycling along the coast road",
    "gal.10.t": "Picnic with friends",
    "gal.10.alt": "A picnic with friends in the forest",

    "home.stats.eyebrow": "page 06 — me in numbers",
    "home.stats.title": "The short version",
    "home.stats.1": "projects shipped",
    "home.stats.2": "animation pieces",
    "home.stats.3": "cups of coffee",
    "home.stats.4": "scribbles",

    "home.cta.title": "Got an idea?",
    "home.cta.text": "A project, an internship or just a chat over coffee — anything goes. Let's sketch it together, then code it together.",
    "home.cta.btn": "Send a message",
    "home.cta.note": "I usually reply within a day!",
  });

  const gsap = D.gsap;
  const ST = D.ScrollTrigger;
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const rnd = (a, b) => a + Math.random() * (b - a);

  /* ---------------------------------------------------------
     Bant gruplarını çoğalt (hareket olmasa da bant dolu görünsün)
     --------------------------------------------------------- */
  $$(".home-tape__track").forEach((track) => {
    const group = track.firstElementChild;
    if (!group) return;
    for (let i = 0; i < 3; i++) {
      const c = group.cloneNode(true);
      c.setAttribute("aria-hidden", "true");
      track.appendChild(c);
    }
  });

  /* ---------------------------------------------------------
     Polaroidi çevir (hareket azaltılmış olsa da çalışır)
     --------------------------------------------------------- */
  const flipBtn = $(".home-about__flip");
  if (flipBtn) {
    flipBtn.addEventListener("click", (e) => {
      const on = !flipBtn.classList.contains("is-flipped");
      flipBtn.classList.toggle("is-flipped", on);
      flipBtn.setAttribute("aria-pressed", String(on));
      if (!D.reducedMotion && e.clientX) D.juice.burst(e.clientX, e.clientY, { count: 14, power: 1.1 });
    });
  }

  // Hareket azaltılmışsa: her şey CSS'teki son haliyle kalır.
  if (D.reducedMotion || !gsap || !ST) {
    D.onReady(() => D.hydrate(document));
    return;
  }

  /* ---------------------------------------------------------
     Perde kalkmadan önce: hero'yu gizli başlangıç durumuna al
     --------------------------------------------------------- */
  const hero = $(".home-hero");
  const nameEl = $(".home-hero__name");
  const nameChars = Array.from(D.split(nameEl));
  const heroDoodles = $$(".home-hd");
  const heroIns = $$(".home-hd__in");
  const heroSvgs = heroDoodles.map((d) => $("svg", d)).filter(Boolean);
  const crown = $(".home-hero__crown svg");
  const swoosh = $(".home-hero__swoosh");
  const hintArrow = $(".home-hero__hint-arrow");
  const heroBits = [
    $(".home-hero__hello"),
    $(".home-hero__role"),
    $(".home-hero__lead"),
    ...$$(".home-hero__cta"),
    $(".home-hero__note"),
    $(".home-hero__hint-in .hand-note"),
  ].filter(Boolean);

  gsap.set(nameChars, { opacity: 0 });
  gsap.set(heroIns, { opacity: 0, scale: 0.3 });
  gsap.set(heroBits, { opacity: 0 });
  heroSvgs.forEach((s) => D.prepDraw(s));
  [crown, swoosh, hintArrow].forEach((s) => s && D.prepDraw(s));

  /* ---------------------------------------------------------
     Perde kalkınca
     --------------------------------------------------------- */
  D.onReady(() => {
    // EN ile açılınca sözlükten gelen .scribble-u / doodle'lar henüz işlenmedi
    D.hydrate(document);
    const mm = gsap.matchMedia();
    heroIntro();
    heroScroll();
    heroMouse();
    manifesto();
    about(mm);
    services(mm);
    tapes();
    work(mm);
    gallery(mm);
    stats();
    cta();
    ST.sort();
    ST.refresh();
  });

  /* ============ 1. HERO ============ */
  function heroIntro() {
    const [hello, role, lead, cta1, cta2, note, hintNote] = heroBits;
    const tl = gsap.timeline({ defaults: { ease: "back.out(1.8)" } });

    tl.fromTo(hello, { opacity: 0, y: 24, rotate: -8 }, { opacity: 1, y: 0, rotate: 0, duration: 0.6 }, 0);

    tl.fromTo(
      nameChars,
      { opacity: 0, yPercent: () => rnd(80, 150), rotate: () => rnd(-40, 40), scale: 0.6 },
      { opacity: 1, yPercent: 0, rotate: 0, scale: 1, duration: 1, stagger: 0.07, ease: "back.out(2.4)" },
      0.1
    );

    if (swoosh) tl.add(D.draw(swoosh, { duration: 0.9, stagger: 0.25 }), 0.75);
    if (crown) {
      tl.add(D.draw(crown, { duration: 0.8 }), 1.0);
      // taç kafaya "konar": küçük zıplama
      tl.fromTo(".home-hero__crown", { y: -40, rotate: -40 }, { y: 0, rotate: -16, duration: 0.9, ease: "bounce.out" }, 1.0);
    }

    heroIns.forEach((el, i) => {
      const at = 0.25 + i * 0.1;
      tl.to(el, { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }, at);
      if (heroSvgs[i]) tl.add(D.draw(heroSvgs[i], { duration: 1.1, stagger: 0.12 }), at);
    });

    tl.fromTo(role, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }, 0.9);
    tl.fromTo(lead, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }, 1.05);
    tl.fromTo([cta1, cta2], { opacity: 0, y: 40, rotate: (i) => (i ? 8 : -8) }, { opacity: 1, y: 0, rotate: 0, duration: 0.9, stagger: 0.12 }, 1.2);
    if (note) tl.fromTo(note, { opacity: 0, scale: 0.3, rotate: 30 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.9 }, 1.4);
    if (hintArrow) tl.add(D.draw(hintArrow, { duration: 0.9, stagger: 0.3 }), 1.6);
    if (hintNote) tl.fromTo(hintNote, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.6 }, 1.7);

    // harflere dokununca zıplasın
    if (D.finePointer) {
      nameChars.forEach((ch) => {
        ch.addEventListener("pointerenter", () => {
          if (tl.isActive()) return;
          gsap.fromTo(
            ch,
            { y: 0, rotate: 0 },
            { y: -26, rotate: rnd(-18, 18), duration: 0.22, ease: "power2.out", yoyo: true, repeat: 1, overwrite: true }
          );
        });
      });
    }
  }

  function heroScroll() {
    const conf = { trigger: hero, start: "top top", end: "bottom top", scrub: 0.8 };
    heroDoodles.forEach((el) => {
      const x = parseFloat(el.style.getPropertyValue("--x")) || 50;
      const depth = parseFloat(el.dataset.depth) || 0.7;
      const dirX = x < 50 ? -1 : 1;
      gsap.to(el, {
        x: () => dirX * rnd(80, 260) * depth,
        y: () => -rnd(180, 520) * depth,
        rotate: rnd(-200, 200),
        scale: rnd(0.5, 1.5),
        ease: "none",
        scrollTrigger: Object.assign({ invalidateOnRefresh: true }, conf),
      });
    });
    gsap.to(".home-hero__inner", { y: 140, opacity: 0.15, ease: "none", scrollTrigger: Object.assign({}, conf, { scrub: true }) });
    gsap.to(".home-hero__hint", { opacity: 0, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "+=220", scrub: true } });
  }

  function heroMouse() {
    if (!D.finePointer) return;
    const movers = heroIns.map((el, i) => ({
      depth: parseFloat(heroDoodles[i].dataset.depth) || 0.7,
      x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
      y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
    }));
    const titleX = gsap.quickTo(".home-hero__title", "x", { duration: 1.2, ease: "power3.out" });
    const titleY = gsap.quickTo(".home-hero__title", "y", { duration: 1.2, ease: "power3.out" });
    let inView = true;
    ST.create({ trigger: hero, start: "top top", end: "bottom top", onToggle: (s) => (inView = s.isActive) });

    window.addEventListener(
      "pointermove",
      (e) => {
        if (!inView || e.pointerType !== "mouse") return;
        const nx = e.clientX / innerWidth - 0.5;
        const ny = e.clientY / innerHeight - 0.5;
        movers.forEach((m) => {
          m.x(nx * 70 * m.depth);
          m.y(ny * 50 * m.depth);
        });
        titleX(-nx * 14);
        titleY(-ny * 10);
      },
      { passive: true }
    );
  }

  /* ============ 2. MANİFESTO ============
     Dil değişince paragraf yeniden yazılır → kelimeler yeniden bölünür,
     zaman çizelgesi yeniden kurulur. */
  let manMM = null;

  function splitWords(root) {
    const out = [];
    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(" "));
              return;
            }
            const w = document.createElement("span");
            w.className = "home-w";
            w.textContent = part;
            frag.appendChild(w);
            out.push(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && !child.matches("svg, .home-key__mk")) {
          walk(child);
        }
      });
    };
    walk(root);
    return out;
  }

  function manifesto() {
    const sec = $(".home-manifesto");
    const manText = $(".home-manifesto__text");
    if (!sec || !manText) return;
    if (manMM) manMM.revert();
    const manWords = splitWords(manText);
    if (!manWords.length) return;
    const keys = $$(".home-key", manText);
    const sides = $$(".home-ms .doodle", sec);
    manMM = gsap.matchMedia();

    manMM.add({ desk: "(min-width: 768px)", mob: "(max-width: 767px)" }, (ctx) => {
      const desk = ctx.conditions.desk;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          start: desk ? "top top" : "top 75%",
          end: desk ? "+=160%" : "bottom 45%",
          pin: desk,
          scrub: 0.6,
          invalidateOnRefresh: true,
          refreshPriority: 10,
        },
      });

      const STEP = 0.1;
      tl.fromTo(manWords, { opacity: 0.13 }, { opacity: 1, duration: 0.35, stagger: STEP, ease: "none" }, 0);

      keys.forEach((k) => {
        const first = $(".home-w", k);
        const idx = manWords.indexOf(first);
        const at = Math.max(0, idx) * STEP + 0.3;
        const mk = $(".home-key__mk", k);
        const svg = $("svg", k);
        if (mk) tl.fromTo(mk, { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.out" }, at);
        if (svg) {
          const shapes = D.prepDraw(svg);
          tl.fromTo(shapes, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.6, ease: "power1.inOut" }, at);
        }
        tl.fromTo(k, { rotate: 0, scale: 1 }, { rotate: rnd(-4, 4), scale: 1.08, duration: 0.25, yoyo: true, repeat: 1, ease: "power2.out" }, at);
      });

      const total = Math.max(tl.duration(), 1);
      tl.to({}, { duration: 0.4 }); // sonda biraz nefes
      sides.forEach((d, i) => {
        tl.fromTo(d, { rotate: 0, y: 60, scale: 0.6 }, { rotate: (i % 2 ? -1 : 1) * 300, y: -60, scale: 1.1, duration: total, ease: "none" }, 0);
      });
    });
  }

  document.addEventListener("doodle:lang", () => {
    if (!manMM) return; // ilk uygulama onReady'den önce: manifesto() orada kurulur
    manifesto();
    ST.sort();
  });

  /* ============ 3. HAKKIMDA: polaroid düşer, bantlanır, banyo edilir ============ */
  function about(mm) {
    const sec = $(".home-about");
    if (!sec) return;
    const drop = $(".home-about__drop", sec);
    const tapes = $$(".home-about__tape", sec);
    const develop = $(".home-about__develop", sec);
    const img = $(".home-about__img img", sec);
    const textBits = $$(".home-about__text .section-head, .home-about__text > p, .home-about__facts li, .home-about__more", sec);
    const hint = $(".home-about__flip-hint", sec);
    const hintArrow = $(".home-about__flip-arrow", sec);
    const moreArrow = $(".home-about__more-arrow", sec);
    if (hintArrow) D.prepDraw(hintArrow);
    if (moreArrow) D.prepDraw(moreArrow);

    gsap.set(drop, { y: -320, rotate: -24, opacity: 0 });
    gsap.set(tapes, { opacity: 0, scale: 2.4 });
    gsap.set(textBits, { opacity: 0, y: 46 });
    if (hint) gsap.set(hint, { opacity: 0 });

    const land = () => {
      const r = drop.getBoundingClientRect();
      D.juice.burst(r.left + r.width * 0.2, r.bottom - 6, { count: 8, power: 0.9, colors: [getComputedStyle(document.documentElement).getPropertyValue("--ink-soft").trim()] });
      D.juice.burst(r.right - r.width * 0.2, r.bottom - 6, { count: 8, power: 0.9, colors: [getComputedStyle(document.documentElement).getPropertyValue("--ink-soft").trim()] });
    };

    const tl = gsap.timeline({ paused: true });
    tl.to(drop, { opacity: 1, duration: 0.12 }, 0)
      .to(drop, { y: 0, rotate: -4, duration: 0.62, ease: "power3.in" }, 0)
      .add(land, 0.62)
      .fromTo(drop, { scaleY: 1, scaleX: 1 }, { scaleY: 0.9, scaleX: 1.07, duration: 0.08, ease: "power2.out", transformOrigin: "50% 100%" }, 0.62)
      .to(drop, { scaleY: 1, scaleX: 1, rotate: -3, duration: 0.9, ease: "elastic.out(1.1, 0.35)" }, 0.7)
      .to(tapes, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        stagger: 0.16,
        ease: "back.out(3)",
        onStart: () => tapes.forEach((t, i) => setTimeout(() => D.juice.squash(drop, 0.35), i * 160)),
      }, 0.85)
      .to(textBits, { opacity: 1, y: 0, duration: 0.9, stagger: 0.09, ease: "expo.out" }, 0.3);
    if (hint) tl.to(hint, { opacity: 1, duration: 0.4 }, 1.4);
    if (hintArrow) tl.add(D.draw(hintArrow, { duration: 0.7, stagger: 0.2 }), 1.4);
    if (moreArrow) tl.add(D.draw(moreArrow, { duration: 0.6, stagger: 0.2 }), 1.3);

    ST.create({ trigger: sec, start: "top 62%", once: true, onEnter: () => tl.play() });

    // fotoğraf banyoda: kaydırdıkça karanlıktan çıkar
    if (develop && img) {
      gsap.fromTo(develop, { opacity: 1 }, { opacity: 0, ease: "none", scrollTrigger: { trigger: sec, start: "top 55%", end: "center 40%", scrub: 0.6 } });
      gsap.fromTo(
        img,
        { filter: "sepia(1) brightness(0.45) contrast(1.5) blur(3px)" },
        { filter: "sepia(0) brightness(1) contrast(1) blur(0px)", ease: "none", scrollTrigger: { trigger: sec, start: "top 55%", end: "center 40%", scrub: 0.6 } }
      );
    }

    // masaüstü: imlece doğru eğilme (3B)
    mm.add("(hover: hover) and (pointer: fine)", () => {
      const tiltX = gsap.quickTo(drop, "rotationX", { duration: 0.6, ease: "power3.out" });
      const tiltY = gsap.quickTo(drop, "rotationY", { duration: 0.6, ease: "power3.out" });
      const move = (e) => {
        const r = drop.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        tiltY(nx * 18);
        tiltX(-ny * 14);
      };
      const leave = () => {
        tiltX(0);
        tiltY(0);
      };
      drop.addEventListener("pointermove", move);
      drop.addEventListener("pointerleave", leave);
      return () => {
        drop.removeEventListener("pointermove", move);
        drop.removeEventListener("pointerleave", leave);
      };
    });
  }

  /* ============ 4. NELER YAPIYORUM ============ */
  function services(mm) {
    const sec = $(".home-services");
    if (!sec) return;
    const track = $(".home-services__track", sec);
    const viewport = $(".home-services__viewport", sec);
    const wraps = $$(".home-panel-wrap", sec);
    const lines = $$(".home-services__line path", sec);

    const bounce = (wrap) => {
      const pops = $$(".home-panel__pop", wrap);
      gsap.fromTo(pops, { scale: 0, rotate: -70 }, { scale: 1, rotate: 0, duration: 1.1, stagger: 0.14, ease: "elastic.out(1, 0.45)", overwrite: true });
      const icon = $(".home-panel__icon svg", wrap);
      if (icon) D.draw(icon, { duration: 0.9, stagger: 0.1 });
    };

    mm.add("(min-width: 768px)", () => {
      const dist = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      lines.forEach((p) => D.prepDraw(p));
      gsap.set($$(".home-panel__pop", sec), { scale: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => "+=" + dist(),
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      tl.to(track, { x: () => -dist(), duration: 1 }, 0);
      tl.to(lines, { strokeDashoffset: 0, duration: 1 }, 0);

      wraps.forEach((w, i) => {
        gsap.fromTo(
          w,
          { y: i % 2 ? -70 : 70, rotate: i % 2 ? -9 : 9 },
          { y: 0, rotate: 0, ease: "none", scrollTrigger: { trigger: w, containerAnimation: tl, start: "left right", end: "left 45%", scrub: true } }
        );
        ST.create({
          trigger: w,
          containerAnimation: tl,
          start: "left 78%",
          onEnter: () => bounce(w),
          onLeaveBack: () => gsap.to($$(".home-panel__pop", w), { scale: 0, duration: 0.3, overwrite: true }),
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      wraps.forEach((w, i) => {
        gsap.set($$(".home-panel__pop", w), { scale: 0 });
        gsap.from(w, {
          opacity: 0,
          y: 80,
          x: i % 2 ? 40 : -40,
          rotate: i % 2 ? 8 : -8,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: w, start: "top 85%", once: true, onEnter: () => setTimeout(() => bounce(w), 250) },
        });
      });
    });
  }

  /* ============ 5. ÇAPRAZ BANTLAR ============ */
  function tapes() {
    const sec = $(".home-tapes");
    if (!sec) return;
    const items = $$(".home-tape", sec).map((tape, i) => {
      const track = $(".home-tape__track", tape);
      const group = track.firstElementChild;
      return {
        track,
        group,
        base: i === 0 ? -1 : 1, // A sola, B sağa
        x: 0,
        w: group.offsetWidth,
        setX: gsap.quickSetter(track, "x", "px"),
        setSkew: gsap.quickSetter(track, "skewX", "deg"),
      };
    });
    items.forEach((it) => {
      if (it.base > 0) it.x = -it.w;
    });

    let active = false;
    let dir = 1;
    let boost = 1;
    let skew = 0;
    const SPEED = 70; // px/sn

    ST.create({
      trigger: sec,
      start: "top bottom",
      end: "bottom top",
      onToggle: (s) => (active = s.isActive),
      onUpdate: (s) => {
        dir = s.direction;
        const v = s.getVelocity();
        boost = Math.max(boost, 1 + Math.min(9, Math.abs(v) / 220));
        skew = gsap.utils.clamp(-14, 14, -v / 160);
      },
      onRefresh: () => items.forEach((it) => (it.w = it.group.offsetWidth)),
    });

    let lastSkew = 0;
    gsap.ticker.add((time, dt) => {
      if (!active) return;
      const s = dt / 1000;
      boost += (1 - boost) * Math.min(1, s * 2.2);
      skew += (0 - skew) * Math.min(1, s * 4);
      lastSkew += (skew - lastSkew) * Math.min(1, s * 10);
      items.forEach((it) => {
        if (!it.w) return;
        it.x += it.base * dir * SPEED * boost * s;
        it.x = gsap.utils.wrap(-it.w, 0, it.x);
        it.setX(it.x);
        it.setSkew(lastSkew * it.base);
      });
    });

    gsap.fromTo(
      $$(".home-tape", sec),
      { scaleX: 0.2, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1.1,
        stagger: 0.18,
        ease: "expo.out",
        scrollTrigger: { trigger: sec, start: "top 85%", once: true },
        onComplete() {
          gsap.set(this.targets(), { clearProps: "transform,opacity" });
        },
      }
    );
  }

  /* ============ 6. GRAFİK ANİMASYON (deste → yelpaze → masa) ============ */
  function work(mm) {
    const sec = $(".home-work");
    const deck = $(".home-deck", sec || document);
    if (!sec || !deck) return;
    const cards = $$(".home-card", deck);

    mm.add("(min-width: 768px)", () => {
      const toCenter = (c) => deck.offsetWidth / 2 - (c.offsetLeft + c.offsetWidth / 2);
      const n = cards.length;
      const mid = (n - 1) / 2;

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sec, start: "top top", end: "+=170%", pin: true, scrub: 0.9, invalidateOnRefresh: true },
      });

      tl.fromTo(
        cards,
        { x: (i, c) => toCenter(c) + (i - mid) * 6, y: (i) => 30 - i * 6, rotate: (i) => [-7, 5, -2][i] || 0, transformOrigin: "50% 120%", scale: 0.92 },
        { x: (i, c) => toCenter(c) + (i - mid) * 40, y: (i) => (i === Math.round(mid) ? -30 : 0), rotate: (i) => (i - mid) * 20, scale: 0.96, duration: 1, ease: "power2.inOut" }
      );
      tl.to(cards, { x: 0, y: 0, rotate: (i) => [-3, 2, 4][i] || 0, scale: 1, duration: 1.2, ease: "back.out(1.4)", stagger: 0.08 });
      tl.to({}, { duration: 0.35 });

      const tip = $(".home-work__tip", sec);
      if (tip) tl.to(tip, { opacity: 0, y: -10, duration: 0.4 }, 0.2);
    });

    mm.add("(max-width: 767px)", () => {
      cards.forEach((c, i) => {
        gsap.from(c, {
          opacity: 0,
          x: i % 2 ? 120 : -120,
          rotate: i % 2 ? 18 : -18,
          duration: 1.1,
          ease: "back.out(1.3)",
          scrollTrigger: { trigger: c, start: "top 88%", once: true },
        });
      });
    });
  }

  /* ============ 7. GALERİ: polaroidler masaya fırlatılır ============ */
  function gallery(mm) {
    const sec = $(".home-gal");
    const desk = $(".home-gal__desk", sec || document);
    if (!sec || !desk) return;
    const items = $$(".home-gal__item", desk);
    const ink = () => getComputedStyle(document.documentElement).getPropertyValue("--ink-soft").trim();

    mm.add({ wide: "(min-width: 1024px)", narrow: "(max-width: 1023px)" }, (ctx) => {
      const k = ctx.conditions.wide ? 1 : 0.45;
      gsap.set(items, {
        opacity: 0,
        x: (i) => (i % 2 ? 1 : -1) * rnd(380, 720) * k,
        y: () => rnd(260, 520) * k,
        rotate: () => rnd(-140, 140),
        scale: 1.45,
      });

      const tl = gsap.timeline({ paused: true });
      items.forEach((it, i) => {
        const at = i * 0.13;
        tl.to(it, { opacity: 1, duration: 0.15 }, at);
        tl.to(it, { x: 0, y: 0, rotate: 0, scale: 1, duration: 0.8, ease: "power4.out" }, at);
        tl.add(() => {
          // tak! — masa sarsılır, toz kalkar
          gsap.fromTo(it, { scaleX: 1.05, scaleY: 0.94 }, { scaleX: 1, scaleY: 1, duration: 0.6, ease: "elastic.out(1.2, 0.35)" });
          gsap.fromTo(desk, { y: 0 }, { y: 3, duration: 0.05, yoyo: true, repeat: 1, ease: "power1.inOut" });
          const r = it.getBoundingClientRect();
          D.juice.burst(r.left + r.width / 2, r.top + r.height * 0.85, { count: 7, power: 0.8, colors: [ink()] });
        }, at + 0.42);
      });
      tl.add(() => gsap.set(items, { clearProps: "transform,opacity" }));

      ST.create({ trigger: desk, start: "top 72%", once: true, onEnter: () => tl.play() });

      // yerleştikten sonra kaydırırken hafif derinlik
      const depths = [0.6, 1.2, 0.4, 1, 0.8, 0.5, 1.1];
      const links = items.map((it) => it.firstElementChild);
      links.forEach((a, i) => {
        gsap.fromTo(a, { y: 30 * depths[i % depths.length] }, {
          y: -30 * depths[i % depths.length],
          ease: "none",
          scrollTrigger: { trigger: desk, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      return () => tl.kill();
    });
  }

  /* ============ 8. SAYILAR ============ */
  function stats() {
    const items = $$(".home-stat");
    if (!items.length) return;

    items.forEach((li) => {
      const ring = $(".home-stat__ring", li);
      const num = $(".home-stat__num", li);
      const icon = $(".home-stat__icon", li);
      if (ring) D.prepDraw(ring);
      const count = num && num.dataset.count ? parseFloat(num.dataset.count) : null;
      const suffix = (num && num.dataset.suffix) || "";
      if (count !== null) num.textContent = "0" + suffix;
      gsap.set([num, icon], { opacity: 0 });
    });

    ST.create({
      trigger: ".home-stats__list",
      start: "top 78%",
      once: true,
      onEnter: () => {
        items.forEach((li, i) => {
          const ring = $(".home-stat__ring", li);
          const num = $(".home-stat__num", li);
          const icon = $(".home-stat__icon", li);
          const delay = i * 0.18;
          if (ring) gsap.to(D.prepDraw(ring), { strokeDashoffset: 0, duration: 1.3, ease: "power2.inOut", delay });
          gsap.fromTo(icon, { opacity: 0, scale: 0, rotate: -90 }, { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: "back.out(2)", delay: delay + 0.6 });

          const count = num.dataset.count ? parseFloat(num.dataset.count) : null;
          if (count === null) {
            gsap.fromTo(num, { opacity: 0, scale: 0, rotate: -360 }, { opacity: 1, scale: 1, rotate: 0, duration: 1.4, ease: "back.out(1.6)", delay: delay + 0.2 });
            return;
          }
          const suffix = num.dataset.suffix || "";
          const obj = { v: 0 };
          gsap.set(num, { opacity: 1 });
          gsap.fromTo(num, { scale: 0.6 }, { scale: 1, duration: 0.8, ease: "back.out(2)", delay: delay + 0.1 });
          gsap.to(obj, {
            v: count,
            duration: count > 100 ? 2 : 1.4,
            ease: "power3.out",
            delay: delay + 0.1,
            onUpdate: () => (num.textContent = Math.round(obj.v) + suffix),
            onComplete: () => {
              num.textContent = count + suffix;
              gsap.fromTo(li, { rotate: 0 }, { rotate: "+=6", duration: 0.15, yoyo: true, repeat: 3, ease: "sine.inOut", clearProps: "transform" });
            },
          });
        });
      },
    });
  }

  /* ============ 9. CTA: kağıt uçak ============ */
  function cta() {
    const sec = $(".home-cta");
    if (!sec) return;
    const trail = $(".home-cta__trail", sec);
    const plane = $(".home-cta__plane", sec);
    if (!trail || !plane) return;

    const total = trail.getTotalLength();
    trail.style.strokeDasharray = "8 10";
    const clip = trail.cloneNode();
    clip.removeAttribute("class");
    const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    const maskId = "home-trail-mask";
    mask.setAttribute("id", maskId);
    mask.setAttribute("maskUnits", "userSpaceOnUse");
    clip.setAttribute("fill", "none");
    clip.setAttribute("stroke", "#fff");
    clip.setAttribute("stroke-width", "14");
    clip.setAttribute("stroke-linecap", "round");
    clip.style.strokeDasharray = total + " " + total;
    clip.style.strokeDashoffset = total;
    mask.appendChild(clip);
    trail.ownerSVGElement.insertBefore(mask, trail.ownerSVGElement.firstChild);
    trail.setAttribute("mask", `url(#${maskId})`);

    const place = (p) => {
      const len = Math.max(0.01, Math.min(total - 0.5, total * p));
      const a = trail.getPointAtLength(len);
      const b = trail.getPointAtLength(Math.min(total, len + 1));
      const ang = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      plane.setAttribute("transform", `translate(${a.x.toFixed(1)} ${a.y.toFixed(1)}) rotate(${ang.toFixed(1)})`);
      clip.style.strokeDashoffset = total * (1 - p);
    };
    place(0);

    const proxy = { p: 0 };
    gsap.to(proxy, {
      p: 1,
      ease: "none",
      onUpdate: () => place(proxy.p),
      scrollTrigger: { trigger: sec, start: "top 90%", end: "center 45%", scrub: 1.2 },
    });

    gsap.fromTo(
      $$(".home-cta__doodle .doodle", sec),
      { scale: 0, rotate: -60 },
      { scale: 1, rotate: 0, duration: 1.2, stagger: 0.2, ease: "elastic.out(1, 0.4)", scrollTrigger: { trigger: sec, start: "top 60%", once: true } }
    );
  }
})();
