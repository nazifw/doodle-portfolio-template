/* =========================================================
   DOODLE MOTORU — core.js
   Bağımlılıklar (önce yüklenmeli): gsap, ScrollTrigger, Lenis
   Sayfa scriptleri window.Doodle API'sini kullanır (DESIGN.md).
   ========================================================= */
(function () {
  "use strict";

  const root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  if (hasGSAP && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ---------------------------------------------------------
     1. Doodle ikon kütüphanesi (viewBox 0 0 100 100, elle çizim hissi)
     --------------------------------------------------------- */
  const ICONS = {
    star: '<path d="M50 8 C53 26 58 36 61 38 C70 39 82 39 92 40 C84 47 76 54 70 60 C72 72 75 83 78 93 C68 86 59 80 50 75 C41 80 32 86 22 93 C25 82 28 72 31 60 C24 54 16 47 8 40 C19 39 30 39 39 38 C43 33 47 24 50 8 Z"/>',
    sparkle: '<path d="M50 6 C52 34 60 46 94 50 C60 54 52 66 50 94 C48 66 40 54 6 50 C40 46 48 34 50 6 Z"/>',
    heart: '<path d="M50 88 C30 72 8 58 9 34 C10 18 26 9 39 14 C45 16 48 21 50 27 C52 20 57 15 63 13 C77 9 92 19 91 35 C90 58 68 72 50 88 Z"/>',
    arrow: '<path d="M8 72 C22 40 46 30 72 38"/><path d="M58 24 C66 30 72 36 76 39 C70 44 64 50 60 58"/>',
    "arrow-down": '<path d="M52 6 C46 30 58 52 50 82"/><path d="M30 64 C38 72 45 80 50 86 C56 78 63 70 72 62"/>',
    "arrow-curly": '<path d="M6 60 C18 30 40 26 44 46 C48 66 24 70 30 50 C36 30 64 26 86 40"/><path d="M72 26 C78 32 84 36 88 41 C82 46 76 52 72 60"/>',
    spiral: '<path d="M52 50 C52 46 46 45 45 50 C44 57 54 60 58 53 C63 44 55 35 46 36 C34 38 31 54 38 63 C47 75 66 72 72 58 C79 42 68 24 50 23 C30 22 18 40 22 58"/>',
    squiggle: '<path d="M4 50 C14 30 22 30 28 50 C34 70 42 70 48 50 C54 30 62 30 68 50 C74 70 82 70 88 50 C92 40 95 38 97 40"/>',
    zigzag: '<path d="M4 60 L16 38 L28 62 L40 38 L52 62 L64 38 L76 62 L88 38 L96 56"/>',
    cloud: '<path d="M24 74 C10 74 6 58 16 52 C12 38 28 30 36 38 C40 22 64 20 68 38 C80 32 94 42 88 56 C98 62 92 76 80 74 Z"/>',
    lightning: '<path d="M58 6 L26 54 L48 54 L38 94 L74 42 L52 42 Z"/>',
    sun: '<circle cx="50" cy="50" r="18"/><path d="M50 8 L50 22 M50 78 L50 92 M8 50 L22 50 M78 50 L92 50 M20 20 L30 30 M70 70 L80 80 M80 20 L70 30 M30 70 L20 80"/>',
    moon: '<path d="M66 12 C42 14 26 34 28 56 C30 78 52 92 74 86 C82 84 88 80 92 74 C70 80 50 66 48 46 C46 30 54 18 66 12 Z"/>',
    flower: '<circle cx="50" cy="46" r="9"/><path d="M50 37 C40 20 60 14 56 34 M59 44 C76 34 82 54 62 52 M55 55 C66 72 46 78 46 56 M41 51 C24 62 18 42 38 42 M42 38 C34 22 52 20 50 36"/><path d="M50 56 C48 70 52 82 50 94 M50 78 C58 70 66 72 70 70"/>',
    crown: '<path d="M14 72 L10 30 L32 50 L50 20 L68 50 L90 30 L86 72 Z"/><path d="M14 82 L86 82"/>',
    smiley: '<path d="M50 8 C26 8 8 26 9 52 C10 76 28 92 52 91 C76 90 92 72 91 48 C90 24 72 8 50 8 Z"/><path d="M36 36 L36 44 M64 36 L64 44"/><path d="M30 60 C40 74 62 74 72 58"/>',
    pencil: '<path d="M18 82 L24 62 L70 16 C74 12 82 14 86 18 C90 22 90 28 86 32 L40 78 Z"/><path d="M62 24 L78 40"/><path d="M24 62 L40 78"/>',
    plane: '<path d="M6 46 L92 10 L70 88 L48 62 Z"/><path d="M48 62 L92 10"/><path d="M48 62 L44 86 L58 70"/>',
    circle: '<path d="M54 10 C28 6 8 26 10 52 C12 76 34 92 58 88 C80 84 94 64 90 40 C86 20 66 8 44 14"/>',
    underline: '<path d="M4 60 C30 52 62 50 96 54 M10 72 C40 64 70 64 90 68"/>',
    x: '<path d="M18 18 C40 42 60 62 82 84 M82 16 C60 40 40 62 18 84"/>',
    check: '<path d="M12 52 C22 60 30 70 38 82 C52 56 70 32 90 12"/>',
    asterisk: '<path d="M50 10 L50 90 M14 30 L86 70 M14 70 L86 30"/>',
    eye: '<path d="M6 50 C24 22 76 22 94 50 C76 78 24 78 6 50 Z"/><circle cx="50" cy="50" r="12"/>',
    code: '<path d="M32 26 L10 50 L32 74 M68 26 L90 50 L68 74 M58 16 L42 84"/>',
    mail: '<path d="M10 24 L90 24 L90 78 L10 78 Z"/><path d="M10 26 L50 56 L90 26"/>',
    phone: '<path d="M30 8 C22 8 18 12 18 20 L18 80 C18 88 22 92 30 92 L70 92 C78 92 82 88 82 80 L82 20 C82 12 78 8 70 8 Z"/><path d="M42 80 L58 80"/>',
    "map-pin": '<path d="M50 92 C34 70 20 56 20 38 C20 20 34 8 50 8 C66 8 80 20 80 38 C80 56 66 70 50 92 Z"/><circle cx="50" cy="38" r="11"/>',
    music: '<path d="M38 74 L38 20 L82 10 L82 64"/><circle cx="28" cy="76" r="11"/><circle cx="72" cy="66" r="11"/>',
    coffee: '<path d="M18 36 L72 36 L66 86 L24 86 Z"/><path d="M72 46 C88 44 90 66 70 68"/><path d="M34 26 C30 18 40 14 36 6 M50 26 C46 18 56 14 52 6"/>',
    bulb: '<path d="M36 70 C36 58 22 52 22 36 C22 20 34 8 50 8 C66 8 78 20 78 36 C78 52 64 58 64 70 Z"/><path d="M38 80 L62 80 M42 90 L58 90"/>',
    rocket: '<path d="M50 6 C70 22 74 48 66 72 L34 72 C26 48 30 22 50 6 Z"/><circle cx="50" cy="36" r="8"/><path d="M34 60 L18 76 L32 76 M66 60 L82 76 L68 76"/><path d="M42 80 C44 88 48 92 50 96 C52 92 56 88 58 80"/>',
    globe: '<circle cx="50" cy="50" r="40"/><path d="M10 50 L90 50 M50 10 C30 30 30 70 50 90 M50 10 C70 30 70 70 50 90"/>',
    github: '<path d="M38 88 C38 80 38 74 40 70 C24 68 14 60 14 42 C14 34 18 28 22 24 C20 18 20 12 24 6 C30 6 36 10 40 14 C46 12 54 12 60 14 C64 10 70 6 76 6 C80 12 80 18 78 24 C82 28 86 34 86 42 C86 60 76 68 60 70 C62 74 62 80 62 88"/><path d="M38 78 C26 82 22 74 16 70"/>',
    linkedin: '<path d="M12 12 L88 12 L88 88 L12 88 Z"/><path d="M28 42 L28 74 M28 28 L28 30 M44 74 L44 42 M44 54 C46 44 64 40 66 52 L66 74"/>',
    instagram: '<path d="M26 10 L74 10 C84 10 90 16 90 26 L90 74 C90 84 84 90 74 90 L26 90 C16 90 10 84 10 74 L10 26 C10 16 16 10 26 10 Z"/><circle cx="50" cy="50" r="17"/><path d="M72 26 L73 27"/>',
    tape: '<path d="M8 30 L92 22 L94 70 L10 78 Z"/>',
    hash: '<path d="M38 10 L30 90 M68 10 L60 90 M14 36 L90 34 M10 64 L86 62"/>',
    blob: '<path d="M52 8 C74 6 94 24 90 48 C88 72 70 94 46 90 C22 88 6 70 10 46 C12 24 30 10 52 8 Z"/>',
    loop: '<path d="M6 70 C24 70 34 60 40 44 C46 26 70 22 72 40 C74 58 50 62 46 48 C42 34 60 18 94 24"/>',
  };

  function icon(name, extraClass) {
    const body = ICONS[name];
    if (!body) return "";
    return `<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" class="${extraClass || ""}">${body}</svg>`;
  }

  function hydrate(scope) {
    (scope || document).querySelectorAll("[data-doodle]:not([data-hydrated])").forEach((el) => {
      el.innerHTML = icon(el.dataset.doodle);
      el.setAttribute("data-hydrated", "");
      if (!el.hasAttribute("aria-label")) el.setAttribute("aria-hidden", "true");
      if (!el.classList.contains("doodle")) el.classList.add("doodle");
    });

    // karalama alt çizgi
    (scope || document).querySelectorAll(".scribble-u:not([data-hydrated])").forEach((el) => {
      const c = el.dataset.color || "var(--pink)";
      el.insertAdjacentHTML(
        "beforeend",
        `<svg class="scribble-u__line" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12 C40 5 90 4 130 8 C160 11 185 9 197 6 M18 16 C70 11 120 12 182 14" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round" pathLength="1" stroke-dasharray="1 2" stroke-dashoffset="1.01"/></svg>`
      );
      el.setAttribute("data-hydrated", "");
    });

    // karalama daire
    (scope || document).querySelectorAll(".scribble-circle:not([data-hydrated])").forEach((el) => {
      const c = el.dataset.color || "var(--blue)";
      el.insertAdjacentHTML(
        "beforeend",
        `<svg class="scribble-circle__line" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true"><path d="M110 8 C60 2 10 18 8 50 C6 82 60 96 110 92 C160 88 196 70 192 44 C188 18 140 4 80 12" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round" pathLength="1" stroke-dasharray="1 2" stroke-dashoffset="1.01"/></svg>`
      );
      el.setAttribute("data-hydrated", "");
    });
  }

  /* ---------------------------------------------------------
     2. "Kaynayan çizgi" SVG filtreleri
     --------------------------------------------------------- */
  function injectFilters() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.position = "absolute";
    svg.innerHTML = `
      <defs>
        <filter id="doodle-boil" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="1" result="n"/>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3"/>
        </filter>
        <filter id="doodle-boil-strong" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="1" result="n"/>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7"/>
        </filter>
      </defs>`;
    document.body.prepend(svg);

    // efekti kullanan öğe yoksa zamanlayıcıyı hiç başlatma
    if (reducedMotion || !document.querySelector(".boil, .boil-strong")) return;
    const turbs = svg.querySelectorAll("feTurbulence");
    let seed = 1;
    setInterval(() => {
      if (document.hidden) return;
      seed = (seed % 4) + 1; // 4 karelik döngü = klasik "line boil"
      turbs.forEach((t) => t.setAttribute("seed", seed));
    }, 130);
  }

  /* ---------------------------------------------------------
     3. Tema (kağıt / kara tahta)
     --------------------------------------------------------- */
  function initTheme() {
    const btn = document.querySelector(".theme-toggle");
    const setLabel = () => {
      if (!btn) return;
      const dark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-label", dark ? t("theme.toLight", "Açık temaya geç") : t("theme.toDark", "Koyu temaya geç"));
      btn.setAttribute("aria-pressed", String(dark));
    };
    setLabel();
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      const apply = () => {
        root.setAttribute("data-theme", next);
        try {
          localStorage.setItem("theme", next);
        } catch (err) {}
        setLabel();
        document.dispatchEvent(new CustomEvent("doodle:theme", { detail: next }));
      };

      // destekleyen tarayıcıda dairesel geçiş
      if (document.startViewTransition && !reducedMotion) {
        const x = e.clientX || window.innerWidth - 60;
        const y = e.clientY || 40;
        const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
        const vt = document.startViewTransition(apply);
        vt.ready
          .then(() => {
            root.animate(
              { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
              { duration: 700, easing: "cubic-bezier(.22,1,.36,1)", pseudoElement: "::view-transition-new(root)" }
            );
          })
          .catch(() => {});
      } else {
        apply();
      }
    });
  }

  /* ---------------------------------------------------------
     4. Navigasyon
     --------------------------------------------------------- */
  function initNav() {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    // linklere elle çizilmiş daire ekle
    nav.querySelectorAll(".nav__link").forEach((a) => {
      a.insertAdjacentHTML(
        "beforeend",
        '<svg class="nav__circle" viewBox="0 0 120 60" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M70 6 C40 2 6 12 6 30 C6 50 40 58 66 56 C96 54 116 44 114 28 C112 12 86 4 50 8"/></svg>'
      );
    });

    // burger
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".mobile-menu");
    if (burger && menu) {
      const toggle = (open) => {
        root.classList.toggle("menu-open", open);
        burger.setAttribute("aria-expanded", String(open));
        burger.setAttribute("aria-label", open ? t("nav.menuClose", "Menüyü kapat") : t("nav.menuOpen", "Menüyü aç"));
        menu.setAttribute("aria-hidden", String(!open));
        if (open) {
          menu.removeAttribute("inert");
          api.lenis && api.lenis.stop();
        } else {
          menu.setAttribute("inert", "");
          api.lenis && api.lenis.start();
        }
      };
      menu.setAttribute("inert", "");
      burger.addEventListener("click", () => toggle(!root.classList.contains("menu-open")));
      menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggle(false)));
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && root.classList.contains("menu-open")) {
          toggle(false);
          burger.focus();
        }
      });
      window.addEventListener("resize", () => {
        if (window.innerWidth > 1100 && root.classList.contains("menu-open")) toggle(false);
      });
    }

    // aşağı kaydırınca gizle, yukarı kaydırınca göster
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 30);
      if (!root.classList.contains("menu-open")) {
        nav.classList.toggle("is-hidden", y > lastY && y > 300);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    nav.addEventListener("focusin", () => nav.classList.remove("is-hidden"));
    onScroll();
  }

  /* ---------------------------------------------------------
     5. Yumuşak kaydırma (Lenis) + ScrollTrigger senkronu
     --------------------------------------------------------- */
  function initSmoothScroll() {
    if (reducedMotion || typeof window.Lenis === "undefined" || !hasGSAP) return null;
    const lenis = new window.Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // sayfa içi çapa linkleri
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const navH = (document.querySelector(".nav") || { offsetHeight: 0 }).offsetHeight;
        lenis.scrollTo(target, { offset: -(navH + 24) });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });
    return lenis;
  }

  /* ---------------------------------------------------------
     6. Kalem imleç + hedefe yapışan karalama çerçeve + mürekkep izi
        - hover durumu her pointermove'da TEK kez closest() ile hesaplanır
          (iç öğeler arası over/out titremesi yok)
        - çerçeve hedefin kutusunu her karede okur → mıknatıslı buton
          kaysa bile birlikte gider
        - kare hızından bağımsız yumuşatma (exp decay)
     --------------------------------------------------------- */
  const HOVER_SEL = "a, button, summary, label, select, [role='button'], [data-cursor='hover']";
  const TEXT_SEL =
    "input:not([type='checkbox']):not([type='radio']):not([type='range']):not([type='submit']):not([type='button']), textarea, [contenteditable='true']";

  function initCursor() {
    if (!finePointer || reducedMotion) return;
    root.classList.add("has-cursor");

    const cursor = document.createElement("div");
    cursor.className = "cursor";
    cursor.setAttribute("aria-hidden", "true");
    cursor.innerHTML = `<svg viewBox="0 0 40 40">
        <path d="M3 37 L6 28 L29 5 C31 3 34 3 36 5 C38 7 38 10 36 12 L13 35 Z" fill="var(--yellow)" stroke="#161714" stroke-width="2" stroke-linejoin="round"/>
        <path d="M3 37 L6 28 L13 35 Z" fill="#f3d9b1" stroke="#161714" stroke-width="2" stroke-linejoin="round"/>
        <path d="M3 37 L4.3 33 L7 35.7 Z" fill="#161714"/>
        <path d="M26 8 L33 15" stroke="#161714" stroke-width="2"/>
        <path d="M29 5 C31 3 34 3 36 5 C38 7 38 10 36 12 L33 15 L26 8 Z" fill="var(--pink)" stroke="#161714" stroke-width="2" stroke-linejoin="round"/>
      </svg>`;
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    ring.setAttribute("aria-hidden", "true");
    document.body.append(ring, cursor);

    const canvas = document.createElement("canvas");
    canvas.className = "ink-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const points = [];
    const LIFE = 520;
    const s = {
      mx: -200, my: -200, // fare
      px: -200, py: -200, // kalem
      rx: -200, ry: -200, rw: 30, rh: 30, // çerçeve
      tilt: 0, hover: 0, down: 0, text: 0,
      visible: false,
    };
    let hoverEl = null;
    let isText = false;
    let isDown = false;

    const setTarget = (el) => {
      const textEl = el && el.closest ? el.closest(TEXT_SEL) : null;
      const hit = textEl ? null : el && el.closest ? el.closest(HOVER_SEL) : null;
      isText = !!textEl;
      if (hit === hoverEl) return;
      hoverEl = hit;
      ring.classList.toggle("is-active", !!hit);
      cursor.classList.toggle("is-hover", !!hit);
    };

    window.addEventListener(
      "pointermove",
      (e) => {
        if (e.pointerType !== "mouse") return;
        s.mx = e.clientX;
        s.my = e.clientY;
        if (!s.visible) {
          s.visible = true;
          s.px = s.rx = s.mx;
          s.py = s.ry = s.my;
          root.classList.add("cursor-visible");
        }
        setTarget(e.target);
        if (!hoverEl && !isText) {
          points.push({ x: s.mx, y: s.my, t: performance.now() });
          if (points.length > 70) points.shift();
        }
      },
      { passive: true }
    );

    // kaydırınca imlecin altındaki öğe değişir ama pointermove gelmez
    let scrollQueued = false;
    window.addEventListener(
      "scroll",
      () => {
        if (scrollQueued || !s.visible) return;
        scrollQueued = true;
        requestAnimationFrame(() => {
          scrollQueued = false;
          setTarget(document.elementFromPoint(s.mx, s.my));
        });
      },
      { passive: true }
    );

    document.addEventListener("mouseout", (e) => {
      if (!e.relatedTarget) {
        s.visible = false;
        root.classList.remove("cursor-visible");
        setTarget(null);
      }
    });
    window.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse") isDown = true;
    });
    window.addEventListener("pointerup", () => (isDown = false));
    window.addEventListener("blur", () => (isDown = false));

    let inkColor = getComputedStyle(root).getPropertyValue("--ink").trim() || "#161714";
    document.addEventListener("doodle:theme", () => {
      inkColor = getComputedStyle(root).getPropertyValue("--ink").trim();
    });

    const damp = (cur, target, speed, dt) => cur + (target - cur) * (1 - Math.exp(-speed * dt));
    let canvasDirty = false;
    let last = performance.now();
    let prevMx = s.mx;

    const loop = (now) => {
      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;

      // kalem: hızlı takip + harekete göre eğilme
      s.px = damp(s.px, s.mx, 32, dt);
      s.py = damp(s.py, s.my, 32, dt);
      const vx = dt > 0 ? (s.mx - prevMx) / dt : 0;
      prevMx = s.mx;
      s.tilt = damp(s.tilt, Math.max(-24, Math.min(24, vx * 0.018)), 10, dt);
      s.hover = damp(s.hover, hoverEl ? 1 : 0, 14, dt);
      s.down = damp(s.down, isDown ? 1 : 0, 30, dt);
      s.text = damp(s.text, isText ? 1 : 0, 14, dt);

      const scale = (1 - s.down * 0.18) * (1 - s.text * 0.15);
      const rot = s.tilt - s.hover * 14 + s.text * 18;
      cursor.style.transform = `translate3d(${s.px}px, ${s.py}px, 0) rotate(${rot}deg) scale(${scale})`;

      // çerçeve: hedef varsa kutusunu sarar, yoksa imlecin etrafında küçük halka
      let tx, ty, tw, th;
      if (hoverEl && hoverEl.isConnected) {
        const r = hoverEl.getBoundingClientRect();
        const pad = Math.min(14, 6 + r.height * 0.12);
        tx = r.left - pad;
        ty = r.top - pad * 0.8;
        tw = r.width + pad * 2;
        th = r.height + pad * 1.6;
      } else {
        if (hoverEl) setTarget(null);
        const size = 30 - s.down * 8;
        tx = s.mx - size / 2;
        ty = s.my - size / 2;
        tw = th = size;
      }
      const ringSpeed = hoverEl ? 18 : 11;
      s.rx = damp(s.rx, tx, ringSpeed, dt);
      s.ry = damp(s.ry, ty, ringSpeed, dt);
      s.rw = damp(s.rw, tw, ringSpeed, dt);
      s.rh = damp(s.rh, th, ringSpeed, dt);
      ring.style.transform = `translate3d(${s.rx}px, ${s.ry}px, 0)`;
      ring.style.width = s.rw + "px";
      ring.style.height = s.rh + "px";
      ring.style.opacity = s.visible ? String((0.35 + s.hover * 0.65) * (1 - s.text)) : "0";

      // mürekkep izi
      const t = performance.now();
      while (points.length && t - points[0].t > LIFE) points.shift();
      // iz yoksa ve tuval zaten temizse çizim yapma (boşta işlemci harcamasın)
      if (points.length || canvasDirty) ctx.clearRect(0, 0, innerWidth, innerHeight);
      canvasDirty = points.length > 2;
      if (points.length > 2) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = inkColor;
        for (let i = 1; i < points.length - 1; i++) {
          const p0 = points[i - 1];
          const p1 = points[i];
          const p2 = points[i + 1];
          const life = 1 - (t - p1.t) / LIFE;
          ctx.globalAlpha = Math.max(0, life) * 0.5;
          ctx.lineWidth = 0.5 + life * 2.4;
          ctx.beginPath();
          ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);
          ctx.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  /* ---------------------------------------------------------
     7. Kaydırma ilerlemesi (kalem çizgisi)
     --------------------------------------------------------- */
  function initScrollPencil() {
    const wrap = document.createElement("div");
    wrap.className = "scroll-pencil";
    wrap.setAttribute("aria-hidden", "true");
    wrap.innerHTML = `
      <div class="scroll-pencil__track"></div>
      <div class="scroll-pencil__line"></div>
      <svg class="scroll-pencil__tip" viewBox="0 0 26 46">
        <path d="M5 4 L21 4 L21 32 L13 44 L5 32 Z" fill="var(--yellow)" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>
        <path d="M5 32 L21 32 L13 44 Z" fill="#f3d9b1" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>
        <path d="M10.3 40 L15.7 40 L13 44 Z" fill="var(--ink)"/>
        <path d="M5 4 L21 4 L21 10 L5 10 Z" fill="var(--pink)" stroke="var(--ink)" stroke-width="2"/>
      </svg>`;
    document.body.appendChild(wrap);
    const line = wrap.querySelector(".scroll-pencil__line");
    const tip = wrap.querySelector(".scroll-pencil__tip");

    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const h = wrap.clientHeight * p;
      line.style.height = h + "px";
      tip.style.top = h + "px";
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ---------------------------------------------------------
     8. Metin bölme (harf harf el yazısı efekti)
     --------------------------------------------------------- */
  function split(el) {
    if (el.dataset.splitDone) return el.querySelectorAll(".split-char");
    const label = el.textContent.replace(/\s+/g, " ").trim();

    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(" "));
              return;
            }
            const word = document.createElement("span");
            word.className = "split-word";
            [...part].forEach((ch) => {
              const s = document.createElement("span");
              s.className = "split-char";
              // harf CSS ile çizilir (::before) → sayfa metni yalnızca bir kez
              // (gizli .split-sr içinde) geçer: SEO ve kopyalama temiz kalır
              s.dataset.ch = ch;
              word.appendChild(s);
            });
            frag.appendChild(word);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && !child.matches("svg, .doodle, br")) {
          walk(child);
        }
      });
    };
    walk(el);
    // ekran okuyucu orijinal metni okusun (aria-label span'larda güvenilir değil → sr-only metin)
    el.querySelectorAll(".split-word").forEach((w) => w.setAttribute("aria-hidden", "true"));
    // gerçek metin: ekran okuyucu ve arama motorları bunu okur
    el.querySelectorAll(":scope > .split-sr").forEach((n) => n.remove());
    const sr = document.createElement("span");
    sr.className = "sr-only split-sr";
    sr.textContent = label;
    el.prepend(sr);
    el.dataset.splitDone = "1";
    return el.querySelectorAll(".split-char");
  }

  /* ---------------------------------------------------------
     9. SVG çizim (stroke-dashoffset)
     --------------------------------------------------------- */
  const DRAWABLE = "path, line, polyline, polygon, circle, ellipse, rect";

  function prepDraw(svgOrPath) {
    const shapes = svgOrPath.matches(DRAWABLE) ? [svgOrPath] : [...svgOrPath.querySelectorAll(DRAWABLE)];
    shapes.forEach((s) => {
      // Chrome: pathLength + vector-effect:non-scaling-stroke → kesik çizgi ekran
      // uzayında hesaplanır, çizim yarım kalır. O durumda gerçek uzunluğu kullan.
      if (getComputedStyle(s).vectorEffect === "non-scaling-stroke" && s.getTotalLength) {
        let len = 0;
        try {
          const m = s.getScreenCTM();
          const k = m ? Math.sqrt(Math.abs(m.a * m.d - m.b * m.c)) || 1 : 1;
          len = s.getTotalLength() * k;
        } catch (e) {}
        if (len > 0) {
          s.removeAttribute("pathLength");
          s.style.strokeDasharray = `${len} ${len * 2 + 10}`;
          s.style.strokeDashoffset = String(len + 1);
          return;
        }
      }
      s.setAttribute("pathLength", "1");
      s.style.strokeDasharray = "1 2";
      s.style.strokeDashoffset = "1.01";
    });
    return shapes;
  }

  function draw(target, opts) {
    const o = Object.assign({ duration: 1.4, stagger: 0.15, ease: "power2.inOut", delay: 0 }, opts || {});
    const shapes = prepDraw(target);
    if (!hasGSAP || reducedMotion) {
      shapes.forEach((s) => (s.style.strokeDashoffset = "0"));
      return null;
    }
    return gsap.to(shapes, { strokeDashoffset: 0, duration: o.duration, stagger: o.stagger, ease: o.ease, delay: o.delay });
  }

  /* ---------------------------------------------------------
     10. Bildirimsel scroll animasyonları
        data-reveal="up|down|left|right|pop|rotate|fade|stamp"
        data-delay="0.2"
        data-split  (harf harf giriş)
        data-draw   (SVG kendini çizer)  data-draw="scrub" (kaydırmaya bağlı)
        data-parallax="0.3" (pozitif = yavaş, negatif = ters)
        .marker / .scribble-u / .scribble-circle görünürken çizilir
     --------------------------------------------------------- */
  const REVEAL_FROM = {
    up: { y: 70, rotate: () => gsap.utils.random(-3, 3) },
    down: { y: -70 },
    left: { x: -90, rotate: -4 },
    right: { x: 90, rotate: 4 },
    pop: { scale: 0.4, rotate: () => gsap.utils.random(-12, 12) },
    rotate: { rotate: -14, y: 60, transformOrigin: "0% 100%" },
    fade: {},
    stamp: { scale: 2.2, rotate: -18 },
  };

  function initReveals() {
    const reveals = [...document.querySelectorAll("[data-reveal]")];
    const splits = [...document.querySelectorAll("[data-split]")];
    const draws = [...document.querySelectorAll("[data-draw]")];
    const marks = [...document.querySelectorAll(".marker, .scribble-u, .scribble-circle")];
    const parallax = [...document.querySelectorAll("[data-parallax]")];

    if (!hasGSAP || !ScrollTrigger || reducedMotion) {
      reveals.forEach((el) => (el.style.opacity = 1));
      draws.forEach((el) => prepDraw(el).forEach((s) => (s.style.strokeDashoffset = "0")));
      marks.forEach(markOn);
      return;
    }

    // PERFORMANS: animasyonlar açılışta değil, öğe ekrana girerken kurulur.
    // Açılışta yalnızca hafif tetikleyiciler oluşur (stil/transform okuma yok).
    // Sayfa aşağıdan açılırsa geçilmiş öğeler onLeave ile yine gösterilir.
    const whenSeen = (el, start, fn) => {
      let done = false;
      let st = null;
      const run = () => {
        if (done) return;
        done = true;
        fn();
        if (st) st.kill();
      };
      // görünürdeyse create() sırasında senkron tetiklenebilir → st sonra atanır
      st = ScrollTrigger.create({ trigger: el, start, onEnter: run, onLeave: run });
      if (done) st.kill();
    };

    reveals.forEach((el) => {
      whenSeen(el, "top 88%", () => {
        const type = el.dataset.reveal || "up";
        const from = Object.assign({ opacity: 0 }, REVEAL_FROM[type] || REVEAL_FROM.up);
        gsap.fromTo(el, from, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: el.dataset.rotate ? parseFloat(el.dataset.rotate) : 0,
          duration: type === "stamp" ? 0.6 : 1.1,
          delay: parseFloat(el.dataset.delay || 0),
          ease: type === "pop" || type === "stamp" ? "back.out(1.8)" : "expo.out",
          // bitince satır içi stilleri sil: CSS transform/hover efektleri geri gelsin
          onComplete: () => {
            el.classList.add("is-revealed");
            gsap.set(el, { clearProps: "transform,opacity,translate,rotate,scale" });
          },
        });
      });
    });

    splits.forEach((el) => {
      split(el);
      el.classList.add("split-wait"); // harfler CSS ile gizli bekler
      gsap.set(el, { opacity: 1 });
      whenSeen(el, "top 90%", () => {
        const chars = el.querySelectorAll(".split-char");
        gsap.from(chars, {
          yPercent: () => gsap.utils.random(60, 120),
          rotate: () => gsap.utils.random(-30, 30),
          opacity: 0,
          duration: 0.9,
          ease: "back.out(2)",
          stagger: 0.028,
          delay: parseFloat(el.dataset.delay || 0),
        });
        el.classList.remove("split-wait");
      });
    });

    draws.forEach((el) => {
      const shapes = prepDraw(el);
      if (el.dataset.draw === "scrub") {
        gsap.to(shapes, {
          strokeDashoffset: 0,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: el.dataset.start || "top 80%", end: el.dataset.end || "bottom 40%", scrub: 1 },
        });
      } else {
        whenSeen(el, "top 85%", () => {
          gsap.to(shapes, {
            strokeDashoffset: 0,
            duration: parseFloat(el.dataset.duration || 1.5),
            stagger: 0.18,
            ease: "power2.inOut",
            delay: parseFloat(el.dataset.delay || 0),
          });
        });
      }
    });

    marks.forEach((el) => {
      whenSeen(el, "top 85%", () => setTimeout(() => markOn(el), parseFloat(el.dataset.delay || 0.25) * 1000));
    });

    parallax.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.2;
      gsap.to(el, {
        yPercent: -speed * 100,
        ease: "none",
        scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
  }

  function markOn(el) {
    if (el.classList.contains("marker")) {
      el.classList.add("is-marked");
      return;
    }
    const path = el.querySelector("svg path");
    if (!path) return;
    if (hasGSAP && !reducedMotion) gsap.to(path, { strokeDashoffset: 0, duration: 0.9, ease: "power2.out" });
    else path.style.strokeDashoffset = "0";
  }

  /* ---------------------------------------------------------
     11. Mıknatıs butonlar  [data-magnetic]
     --------------------------------------------------------- */
  function initMagnetic() {
    if (!finePointer || reducedMotion || !hasGSAP) return;
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic) || 0.35;
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      });
      el.addEventListener("pointerleave", () => {
        xTo(0);
        yTo(0);
      });
    });
  }

  /* ---------------------------------------------------------
     12. Sayfa geçişi (sarı defter yaprağı)
     --------------------------------------------------------- */
  const readyCallbacks = [];
  let isReady = false;
  // sayfa scriptleri core'dan SONRA yüklenir; dil/sözlük ve onReady kayıtları
  // DOMContentLoaded'a kadar tamamlanır
  const domReady = new Promise((resolve) => {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", resolve, { once: true });
    else resolve();
  });

  function fireReady() {
    if (isReady) return;
    isReady = true;
    readyCallbacks.splice(0).forEach((fn) => {
      try {
        fn(api);
      } catch (err) {
        console.error(err);
      }
    });
    // genel reveal'lar sayfanın pin'lerinden SONRA kurulsun, sonra sırala
    initReveals();
    if (hasGSAP && ScrollTrigger) {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }
  }

  function onReady(fn) {
    if (isReady) fn(api);
    else readyCallbacks.push(fn);
  }

  function initTransitions() {
    const curtain = document.createElement("div");
    curtain.className = "page-curtain";
    curtain.setAttribute("aria-hidden", "true");
    curtain.innerHTML = `<div class="page-curtain__word">çiziliyor…</div>`;
    document.body.appendChild(curtain);
    const word = curtain.querySelector(".page-curtain__word");

    // depolama engelliyse (gizli mod vb.) sessizce devam et
    const ss = {
      get: (k) => {
        try {
          return sessionStorage.getItem(k);
        } catch (e) {
          return null;
        }
      },
      set: (k, v) => {
        try {
          sessionStorage.setItem(k, v);
        } catch (e) {}
      },
      del: (k) => {
        try {
          sessionStorage.removeItem(k);
        } catch (e) {}
      },
    };
    const firstVisit = !ss.get("doodle-visited");
    const fromLink = ss.get("doodle-transition") === "1";
    ss.del("doodle-transition");
    ss.set("doodle-visited", "1");

    const uncover = () => root.classList.remove("doodle-cover");

    if (!hasGSAP || reducedMotion) {
      uncover();
      domReady.then(fireReady);
    } else if (firstVisit || fromLink) {
      // açılış: perde kapalı başlar, kelime yazılır, perde yukarı kalkar
      gsap.set(curtain, { y: 0, yPercent: 0, visibility: "visible" });
      uncover();
      word.textContent = firstVisit
        ? t("curtain.hello", "merhaba!")
        : (lang === "en" ? document.body.dataset.pageNameEn : document.body.dataset.pageName) || "…";
      const chars = split(word);
      const tl = gsap.timeline({
        onComplete: () => gsap.set(curtain, { yPercent: 100, visibility: "hidden" }),
      });
      tl.from(chars, {
        yPercent: 120,
        rotate: () => gsap.utils.random(-40, 40),
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "back.out(2.2)",
      })
        .to({}, { duration: firstVisit ? 0.35 : 0.1 })
        .to(curtain, {
          yPercent: -100,
          duration: 0.9,
          ease: "expo.inOut",
          // perde henüz tam kapalıyken başlat: sayfalar gizli başlangıç durumunu
          // görünmeden kurar, giriş animasyonu perde kalkarken oynar
          onStart: () => domReady.then(fireReady),
        });
    } else {
      gsap.set(curtain, { y: 0, yPercent: 100, visibility: "hidden" });
      uncover();
      domReady.then(fireReady);
    }

    // iç linklerde perde ile çıkış
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin && location.protocol !== "file:") return;
      if (!/\.html?$/.test(url.pathname) && !url.pathname.endsWith("/")) return;
      if (url.pathname === location.pathname && url.hash) return;
      if (!hasGSAP || reducedMotion) return;

      e.preventDefault();
      ss.set("doodle-transition", "1");
      const linkText = a.textContent.replace(/\s+/g, " ").trim();
      const short = linkText.length > 22 ? linkText.split(" ").slice(0, 2).join(" ") + "…" : linkText;
      word.textContent = (lang === "en" ? a.dataset.pageNameEn : a.dataset.pageName) || short || "…";
      gsap.fromTo(
        curtain,
        { y: 0, yPercent: 100, visibility: "visible" },
        {
          yPercent: 0,
          duration: 0.65,
          ease: "expo.inOut",
          onComplete: () => {
            window.location.href = a.href;
          },
        }
      );
    });

    // geri tuşu (bfcache) ile dönülünce perdeyi kaldır
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        if (hasGSAP) gsap.set(curtain, { yPercent: 100, visibility: "hidden" });
        uncover();
        ss.del("doodle-transition");
      }
    });
  }

  /* ---------------------------------------------------------
     13. Küçükler
     --------------------------------------------------------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  }

  function markActiveNav() {
    const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav__link, .mobile-menu a").forEach((a) => {
      const target = (a.getAttribute("href") || "").toLowerCase();
      const active = target === here || (here === "" && target === "index.html");
      a.classList.toggle("is-active", active);
      if (active) a.setAttribute("aria-current", "page");
    });
  }

  /* ---------------------------------------------------------
     14. JUICE — her etkileşime fiziksel geri bildirim
         burst: mürekkep/kıvılcım parçacıkları
         squash: basınca ezilip yaylanarak geri gelme
         wiggle: hover'da kıpırdama
         shake: hata vb. için sarsma
     --------------------------------------------------------- */
  const JUICE_SEL = ".btn, .icon-btn, [data-juice]";
  const cssVar = (name) => getComputedStyle(root).getPropertyValue(name).trim();
  const juice = { burst() {}, squash() {}, wiggle() {}, shake() {} };

  function initJuice() {
    if (!hasGSAP || reducedMotion) return;

    const layer = document.createElement("div");
    layer.className = "juice-layer";
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);
    const SHAPES = ["dot", "dot", "dash", "star", "ring"];

    juice.burst = (x, y, opts) => {
      const o = Object.assign({ count: 12, power: 1, colors: null }, opts || {});
      const colors = o.colors || [cssVar("--pink"), cssVar("--yellow"), cssVar("--blue"), cssVar("--green"), cssVar("--ink")];
      for (let i = 0; i < o.count; i++) {
        const p = document.createElement("span");
        p.className = "juice-p juice-p--" + SHAPES[(Math.random() * SHAPES.length) | 0];
        p.style.color = colors[(Math.random() * colors.length) | 0];
        layer.appendChild(p);
        const ang = (Math.PI * 2 * i) / o.count + api.random(-0.4, 0.4);
        const dist = api.random(28, 80) * o.power;
        gsap.set(p, { x, y, xPercent: -50, yPercent: -50, rotate: api.random(0, 360), scale: api.random(0.7, 1.3) });
        gsap.to(p, {
          x: x + Math.cos(ang) * dist,
          y: y + Math.sin(ang) * dist + api.random(8, 30) * o.power, // yerçekimi
          rotate: "+=" + api.random(-220, 220),
          scale: 0,
          duration: api.random(0.5, 0.85),
          ease: "power3.out",
          onComplete: () => p.remove(),
        });
      }
    };

    juice.squash = (el, power) => {
      const k = power || 1;
      gsap.killTweensOf(el, "scaleX,scaleY");
      gsap
        .timeline()
        .to(el, { scaleX: 1 + 0.12 * k, scaleY: 1 - 0.14 * k, duration: 0.07, ease: "power2.out" })
        .to(el, { scaleX: 1, scaleY: 1, duration: 0.65, ease: "elastic.out(1.1, 0.32)" });
    };

    juice.wiggle = (el) => {
      if (gsap.isTweening(el)) return;
      gsap.to(el, {
        keyframes: [{ rotate: -3 }, { rotate: 2.5 }, { rotate: -1.2 }, { rotate: 0 }],
        duration: 0.42,
        ease: "power1.inOut",
      });
    };

    juice.shake = (el, power) => {
      const k = power || 1;
      gsap.fromTo(
        el,
        { x: 0 },
        { keyframes: [{ x: -9 * k }, { x: 8 * k }, { x: -6 * k }, { x: 4 * k }, { x: 0 }], duration: 0.4, ease: "power1.inOut" }
      );
    };

    // basma: ez + parçacık
    document.addEventListener("pointerdown", (e) => {
      const el = e.target.closest(JUICE_SEL);
      if (el) {
        juice.squash(el);
        juice.burst(e.clientX, e.clientY, { count: 10, power: 0.9 });
        return;
      }
      // boş kağıda tıklama: küçük mürekkep lekesi
      if (!e.target.closest("a, button, input, textarea, select, label, summary, [draggable], [data-no-juice], canvas")) {
        juice.burst(e.clientX, e.clientY, { count: 5, power: 0.5, colors: [cssVar("--ink")] });
      }
    });
    // klavye ile basma
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const el = e.target.closest && e.target.closest(JUICE_SEL);
      if (el) juice.squash(el, 0.8);
    });

    // hover: kıpırdama (iç öğeler arası geçişte tekrar etmez)
    if (finePointer) {
      document.addEventListener("pointerover", (e) => {
        const el = e.target.closest(".btn, .icon-btn");
        if (!el || (e.relatedTarget && el.contains(e.relatedTarget))) return;
        juice.wiggle(el);
      });
    }
  }

  /* ---------------------------------------------------------
     15. İKİ DİL (TR / EN)
         HTML'deki metin Türkçe'dir. İngilizcesi sözlükte durur:
           <p data-i18n="home.lead">Türkçe <b>metin</b></p>
           Doodle.i18n.add({ "home.lead": "English <b>text</b>" })
         Öznitelikler: data-i18n-attr="placeholder:form.name;aria-label:form.nameLabel"
         JS ile üretilen metin: Doodle.t("key", "Türkçe yedek") + 'doodle:lang' olayı
     --------------------------------------------------------- */
  const DICT = { en: {} };
  let lang = "tr";
  try {
    lang = localStorage.getItem("lang") === "en" ? "en" : "tr";
  } catch (e) {}

  // tüm sayfalarda ortak çeviriler
  Object.assign(DICT.en, {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.work": "Projects",
    "nav.blog": "Blog",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.menuLabel": "Main menu",
    "a11y.skip": "Skip to content",
    "footer.big": "Let's <span class=\"scribble-u\">talk</span>!",
    "footer.copy": "© <span data-year>2026</span> Ad Soyad — drawn with a pencil, coffee and a little JavaScript.",
    "footer.admin": "admin",
    "curtain.hello": "hello!",
    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "nav.menuOpen": "Open menu",
    "nav.menuClose": "Close menu",
  });

  function t(key, fallback) {
    if (lang === "en" && DICT.en[key] != null) return DICT.en[key];
    return fallback != null ? fallback : key;
  }

  function addDict(dict, l) {
    const target = (DICT[l || "en"] = DICT[l || "en"] || {});
    Object.assign(target, dict);
  }

  function rememberTr(scope) {
    (scope || document).querySelectorAll("[data-i18n]").forEach((el) => {
      if (!("trHtml" in el.dataset)) el.dataset.trHtml = el.innerHTML;
    });
    (scope || document).querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr] = pair.split(":").map((x) => x.trim());
        const store = "tr-attr-" + attr;
        if (attr && !el.hasAttribute("data-" + store)) el.setAttribute("data-" + store, el.getAttribute(attr) || "");
      });
    });
  }

  function applyLang(opts) {
    const o = opts || {};
    root.lang = lang;
    root.dataset.lang = lang;
    rememberTr(document);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const html = lang === "en" ? DICT.en[key] : el.dataset.trHtml;
      if (html == null) return;
      const wasSplit = !!el.dataset.splitDone;
      el.innerHTML = html;
      if (wasSplit) {
        delete el.dataset.splitDone;
        const chars = split(el);
        if (o.animate && hasGSAP && !reducedMotion) {
          gsap.from(chars, { yPercent: 80, rotate: () => api.random(-25, 25), opacity: 0, stagger: 0.015, duration: 0.5, ease: "back.out(2)" });
        }
      }
      hydrate(el); // sözlükten gelen .scribble-*/data-doodle öğeleri işlensin
      if (o.afterBoot) {
        // zaten görülmüş vurgular yeniden çizilsin
        el.querySelectorAll(".marker").forEach((m) => m.classList.add("is-marked"));
        el.querySelectorAll(".scribble-u svg path, .scribble-circle svg path").forEach((p) => (p.style.strokeDashoffset = "0"));
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((x) => x && x.trim());
        if (!attr || !key) return;
        const val = lang === "en" ? DICT.en[key] : el.getAttribute("data-tr-attr-" + attr);
        if (val != null) el.setAttribute(attr, val);
      });
    });

    document.querySelectorAll(".lang-toggle").forEach((b) => {
      b.querySelector(".lang-toggle__label").textContent = lang === "en" ? "TR" : "EN";
      b.setAttribute("aria-label", lang === "en" ? "Türkçe'ye geç" : "Switch to English");
    });
    initYear();
    applyContent();
    const themeBtn = document.querySelector(".theme-toggle");
    if (themeBtn) {
      const dark = root.getAttribute("data-theme") === "dark";
      themeBtn.setAttribute("aria-label", dark ? t("theme.toLight", "Açık temaya geç") : t("theme.toDark", "Koyu temaya geç"));
    }
    const burgerBtn = document.querySelector(".burger");
    if (burgerBtn) {
      const open = root.classList.contains("menu-open");
      burgerBtn.setAttribute("aria-label", open ? t("nav.menuClose", "Menüyü kapat") : t("nav.menuOpen", "Menüyü aç"));
    }
    document.dispatchEvent(new CustomEvent("doodle:lang", { detail: lang }));
    if (o.afterBoot && hasGSAP && ScrollTrigger) ScrollTrigger.refresh();
  }

  function setLang(next, opts) {
    if (next !== "tr" && next !== "en") return;
    lang = next;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
    applyLang(Object.assign({ afterBoot: true, animate: true }, opts));
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = lang === "en" ? "tr" : "en";
        const r = btn.getBoundingClientRect();
        juice.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 16, power: 1.3 });
        if (!hasGSAP || reducedMotion) return setLang(next);
        // ekrandaki metinler hızla kapanıp yeni dilde açılır
        const vis = [...document.querySelectorAll("main [data-i18n]:not([data-split]), .nav [data-i18n], .footer [data-i18n]")].filter((el) => {
          if (el.closest("[data-reveal]:not(.is-revealed)")) return false;
          const b = el.getBoundingClientRect();
          return b.bottom > 0 && b.top < innerHeight && b.width > 0;
        });
        gsap.to(vis, {
          opacity: 0,
          y: -6,
          duration: 0.14,
          stagger: 0.004,
          ease: "power1.in",
          onComplete: () => {
            setLang(next);
            gsap.fromTo(
              vis,
              { opacity: 0, y: 8 },
              { opacity: 1, y: 0, duration: 0.35, stagger: 0.006, ease: "back.out(2)", clearProps: "opacity,transform" }
            );
          },
        });
      });
    });
  }

  /* ---------------------------------------------------------
     16. İÇERİK BAĞLAMA (admin paneli ile ortak sözleşme)
         localStorage["doodle-content"] = { name, email, phone, address, ... }
         <span data-bind="name">Ad Soyad</span>
         <a data-bind="email" data-bind-href="mailto:{email}">…</a>
     --------------------------------------------------------- */
  const CONTENT_KEY = "doodle-content";
  const MESSAGES_KEY = "doodle-messages";

  function getContent() {
    try {
      return JSON.parse(localStorage.getItem(CONTENT_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function applyContent() {
    const c = getContent();
    if (!Object.keys(c).length) return;
    document.querySelectorAll("[data-bind]").forEach((el) => {
      const v = c[el.dataset.bind];
      if (typeof v === "string" && v.trim()) el.textContent = v;
    });
    document.querySelectorAll("[data-bind-href]").forEach((el) => {
      let ok = true;
      const href = el.dataset.bindHref.replace(/\{(\w+)\}/g, (m, k) => {
        const v = c[k];
        if (typeof v !== "string" || !v.trim()) ok = false;
        return k === "phone" ? String(v || "").replace(/[^\d+]/g, "") : encodeURI(String(v || "").trim());
      });
      // yalnızca güvenli protokoller (javascript: vb. reddedilir)
      if (ok && /^(https?:\/\/|mailto:|tel:)/i.test(href)) el.setAttribute("href", href);
    });
  }

  function saveMessage(msg) {
    try {
      const list = JSON.parse(localStorage.getItem(MESSAGES_KEY) || "[]");
      list.unshift(Object.assign({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), date: new Date().toISOString(), read: false, lang }, msg));
      let kept = list.slice(0, 500);
      // kota dolarsa en eski mesajları düşürerek yeniden dene
      for (;;) {
        try {
          localStorage.setItem(MESSAGES_KEY, JSON.stringify(kept));
          return true;
        } catch (quota) {
          if (kept.length <= 1) throw quota;
          kept = kept.slice(0, Math.ceil(kept.length / 2));
        }
      }
    } catch (e) {
      return false;
    }
  }

  /* ---------------------------------------------------------
     Dışa açık API
     --------------------------------------------------------- */
  const api = {
    gsap,
    ScrollTrigger,
    lenis: null,
    reducedMotion,
    finePointer,
    icons: ICONS,
    icon,
    hydrate,
    split,
    draw,
    prepDraw,
    onReady,
    random: (a, b) => a + Math.random() * (b - a),
    juice,
    t,
    i18n: {
      add: addDict,
      t,
      get lang() {
        return lang;
      },
      set: setLang,
      apply: applyLang,
    },
    content: {
      key: CONTENT_KEY,
      messagesKey: MESSAGES_KEY,
      get: getContent,
      apply: applyContent,
      saveMessage,
    },
  };
  window.Doodle = api;

  /* ---------------------------------------------------------
     Başlat
     --------------------------------------------------------- */
  injectFilters();
  hydrate(document);
  markActiveNav();
  initTheme();
  api.lenis = initSmoothScroll();
  initNav();
  initCursor();
  initScrollPencil();
  // initReveals, fireReady içinde sayfa callback'lerinden sonra çağrılır
  initMagnetic();
  initYear();
  initJuice();
  initLangToggle();
  // önce içerik + dil (sayfa sözlükleri yüklendikten sonra), SONRA onReady/reveal
  domReady.then(() => {
    applyLang();
    root.classList.remove("lang-pending");
  });
  initTransitions();

  // fontlar ve görseller ölçüleri değiştirir → tek, kare sonuna ertelenmiş refresh
  let refreshQueued = false;
  const queueRefresh = () => {
    if (!hasGSAP || !ScrollTrigger || refreshQueued) return;
    refreshQueued = true;
    requestAnimationFrame(() => {
      refreshQueued = false;
      if (isReady) ScrollTrigger.refresh();
    });
  };
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(queueRefresh);
  if (document.readyState !== "complete") window.addEventListener("load", queueRefresh, { once: true });
})();
