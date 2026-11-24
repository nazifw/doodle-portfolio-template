/* =========================================================
   GALERİ — gallery.js  ("Karanlık oda: ipte kuruyan kareler")
   - kaydırma hızıyla sallanan polaroidler (yay fiziği)
   - karede görünür olunca "banyo": karanlıktan çıkar
   - kategori süzgeci (FLIP ile yeniden dizilme)
   - lightbox: küçük resimden büyür, ok tuşları + kaydırma, ESC, odak tuzağı
   Bağımlılık: core.js (window.Doodle)
   ========================================================= */
(function () {
  "use strict";

  const D = window.Doodle;
  if (!D) return;

  /* ---------------------------------------------------------
     0. İngilizce sözlük
     --------------------------------------------------------- */
  D.i18n.add({
    "gallery.meta.title": "Gallery | Ad Soyad",
    "gallery.meta.desc": "Ad Soyad's gallery: 12 photos from campus, the city, nature and hobbies that describe him best, each with a short caption.",
    "gallery.meta.ogDesc": "12 frames fresh out of the darkroom: campus, city, nature and hobbies.",

    "gallery.hero.note": "fresh out of the darkroom",
    "gallery.hero.title": "Gallery",
    "gallery.hero.lead": 'Twelve frames that describe me best, out of the developer tray and hung up to dry: campus corridors, Istanbul evenings, forest trails and the margins of my notebook. <span class="marker">Scroll</span> to rock the lines; click a frame to enlarge it.',
    "gallery.hero.lamp": "Swing the red safelight",

    "gallery.wall.title": 'Frames on the <span class="scribble-u" data-color="var(--pink)">line</span>',
    "gallery.filter.label": "Filter photos by category",
    "gallery.cat.all": "All",
    "gallery.cat.kampus": "Campus",
    "gallery.cat.sehir": "City",
    "gallery.cat.doga": "Nature",
    "gallery.cat.hobi": "Hobbies",

    "gal.01.t": "First day on campus",
    "gal.01.d": "A campus map in hand, a thousand questions in my head. First memory on the steps of the engineering faculty.",
    "gal.01.alt": "On campus, on the steps of the engineering faculty",
    "gal.01.open": "Enlarge: First day on campus",
    "gal.02.t": "Coffee &amp; code night",
    "gal.02.d": "2 a.m. in the library, third coffee, and finally a for loop that works.",
    "gal.02.alt": "Night in the library, a laptop and a coffee cup",
    "gal.02.open": "Enlarge: Coffee and code night",
    "gal.03.t": "48-hour hackathon",
    "gal.03.d": "4 people, 1 idea, 0 sleep. But the demo worked and the jury laughed.",
    "gal.03.alt": "Hackathon night, the team gathered around the table",
    "gal.03.open": "Enlarge: 48-hour hackathon",
    "gal.04.t": "A walk in Belgrad Forest",
    "gal.04.d": "A Sunday with the phone in my pocket, just walking. The bugs got lost in the woods too.",
    "gal.04.alt": "A trail between the trees in Belgrad Forest",
    "gal.04.open": "Enlarge: A walk in Belgrad Forest",
    "gal.05.t": "Sunset over the Bosphorus",
    "gal.05.d": "Simit at the Kadıköy pier, seagulls and a rust-coloured sky.",
    "gal.05.alt": "Sunset over the Bosphorus from the Kadıköy pier",
    "gal.05.open": "Enlarge: Sunset over the Bosphorus",
    "gal.06.t": "Notebook sketches",
    "gal.06.d": "Every interface is born here first: grid paper, a pencil and plenty of eraser.",
    "gal.06.alt": "Interface sketches drawn in pencil on grid paper",
    "gal.06.open": "Enlarge: Notebook sketches",
    "gal.07.t": "Reading corner",
    "gal.07.d": "This term's stack: an algorithms book, a novel and a design classic.",
    "gal.07.alt": "Books stacked on a desk",
    "gal.07.open": "Enlarge: Reading corner",
    "gal.08.t": "Pedalling the coast road",
    "gal.08.alt": "Cycling along the coast road",
    "gal.08.d": "The best way to debug my head: 20 kilometres against the wind.",
    "gal.08.open": "Enlarge: Pedalling the coast road",
    "gal.09.t": "Concert night",
    "gal.09.d": "Front row, a lost voice and ringing ears the next day. Worth it.",
    "gal.09.alt": "Stage lights and the crowd at a concert",
    "gal.09.open": "Enlarge: Concert night",
    "gal.10.t": "Picnic with friends",
    "gal.10.d": "A barbecue in Polonezköy, frisbee and endless laughter.",
    "gal.10.alt": "A picnic with friends in the forest",
    "gal.10.open": "Enlarge: Picnic with friends",
    "gal.11.t": "My desk",
    "gal.11.d": "Two monitors, one plant, countless sticky notes. This is where the magic happens.",
    "gal.11.alt": "A desk full of monitors and sticky notes",
    "gal.11.open": "Enlarge: My desk",
    "gal.12.t": "Graduation dream",
    "gal.12.d": "Not yet, but the cap is already drawn. See you in 2028!",
    "gal.12.alt": "A graduation cap drawn in a notebook",
    "gal.12.open": "Enlarge: Graduation dream",

    "gallery.status": "{n} photos shown",
    "gallery.outro.title": "Outside the frame",
    "gallery.outro.text": "I mostly shoot on my phone, unplanned; what matters to me is the moment. Life outside the code colours my interfaces too: a rust tone from a sunset, a line from the notebook.",
    "gallery.outro.about": "Get to know me",
    "gallery.outro.contact": "Say hello",

    "gallery.lb.prev": "Previous photo",
    "gallery.lb.next": "Next photo",
    "gallery.lb.close": "Close (Esc)",
    "gallery.lb.hint": "← → keys or swipe",
  });

  const gsap = D.gsap;
  const RM = D.reducedMotion || !gsap;
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const rnd = (a, b) => a + Math.random() * (b - a);
  const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

  const grid = $(".gallery-grid");
  const items = $$(".gallery-item");
  const chips = $$(".gallery-chip");
  const status = $(".gallery-status");
  if (!grid || !items.length) return;

  const visibleItems = () => items.filter((it) => !it.classList.contains("is-hidden"));

  /* ---------------------------------------------------------
     1. Yay fiziği: ipte sallanan kareler (+ lamba)
     --------------------------------------------------------- */
  const swings = items.map((it, i) => {
    const r = parseFloat(it.style.getPropertyValue("--r")) || 0;
    return {
      el: $(".gallery-hang", it),
      item: it,
      rest: r,
      a: r,
      v: 0,
      k: rnd(34, 56),
      c: rnd(2.6, 3.6),
      phase: i * 1.7,
      hover: false,
      inView: true,
      last: null,
    };
  });

  const lampBtn = $(".gallery-lamp");
  const lamp = lampBtn ? { el: lampBtn, rest: 0, a: 0, v: 0, k: 22, c: 1.4, phase: 0, hover: false, inView: true, last: null } : null;
  const bodies = lamp ? swings.concat(lamp) : swings;

  let lbOpen = false;

  if (!RM) {
    // görünür olmayanları hesaplama
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        const s = swings.find((x) => x.item === e.target);
        if (s) s.inView = e.isIntersecting;
      }),
      { rootMargin: "120px 0px" }
    );
    items.forEach((it) => io.observe(it));

    let lastY = window.scrollY;
    gsap.ticker.add((time, deltaMs) => {
      const dt = Math.min(0.033, Math.max(0.001, deltaMs / 1000));
      const y = window.scrollY;
      // anlık sıçramalar (çapa, derin bağlantı) ipleri koparmasın
      const dy = Math.max(-45, Math.min(45, y - lastY));
      lastY = y;
      if (lbOpen) return;
      bodies.forEach((b) => {
        if (!b.inView || !b.el.isConnected) return;
        // kaydırma ivmesi → ipe darbe (aşağı kaydırınca kareler geride kalır)
        b.v += -dy * (b === lamp ? 1.6 : 0.85);
        const breeze = b.hover ? 0 : Math.sin(time * 0.9 + b.phase) * 0.7;
        const target = (b.hover ? 0 : b.rest) + breeze;
        const acc = -b.k * (b.a - target) - b.c * b.v;
        b.v += acc * dt;
        b.a += b.v * dt;
        b.a = Math.max(-28, Math.min(28, b.a));
        if (b.last === null || Math.abs(b.a - b.last) > 0.01) {
          b.el.style.transform = `rotate(${b.a.toFixed(2)}deg)`;
          b.last = b.a;
        }
      });
    });

    // imleçle dürt: kareyi yana it
    swings.forEach((s) => {
      s.item.addEventListener("pointerenter", (e) => {
        s.hover = true;
        if (e.pointerType === "mouse") s.v += (e.movementX || 0) * 3;
      });
      s.item.addEventListener("pointermove", (e) => {
        if (e.pointerType === "mouse") s.v += (e.movementX || 0) * 0.9;
      });
      s.item.addEventListener("pointerleave", () => (s.hover = false));
      s.item.addEventListener("focusin", () => (s.hover = true));
      s.item.addEventListener("focusout", () => (s.hover = false));
    });

    // lamba: tıkla → sallan + kıvılcım; hero'da fare gezdikçe hafif salınım
    if (lamp) {
      lampBtn.addEventListener("click", (e) => {
        lamp.v += (Math.random() < 0.5 ? -1 : 1) * rnd(220, 320);
        const r = lampBtn.getBoundingClientRect();
        D.juice.burst(e.clientX || r.left + r.width / 2, e.clientY || r.bottom - 20, { count: 16, power: 1.3, colors: [cssVar("--pink"), cssVar("--yellow"), "#e07a4a"] });
        gsap.fromTo(".gallery-hero", { "--glow": 0.3 }, { "--glow": 1, duration: 0.6, ease: "steps(4)" });
      });
      const hero = $(".gallery-hero");
      if (hero && D.finePointer) {
        hero.addEventListener("pointermove", (e) => {
          if (e.pointerType === "mouse") lamp.v += (e.movementX || 0) * 0.35;
        });
      }
    }
  }

  /* ---------------------------------------------------------
     2. Banyo + giriş: kare görünür olunca ipe düşer ve aydınlanır
     --------------------------------------------------------- */
  const develop = (it, delay) => setTimeout(() => it.classList.add("is-developed"), delay || 0);

  function revealItem(it, i) {
    if (it.dataset.shown) return;
    it.dataset.shown = "1";
    if (RM) {
      develop(it);
      return;
    }
    const s = swings[items.indexOf(it)];
    gsap.fromTo(
      it,
      { opacity: 0, y: -90 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.09,
        ease: "back.out(1.6)",
        clearProps: "transform,opacity",
        onStart: () => {
          if (s) s.v += (i % 2 ? 1 : -1) * rnd(140, 220);
          const rope = $(".gallery-rope", it);
          if (rope) D.draw(rope, { duration: 0.7 });
        },
      }
    );
    develop(it, 350 + i * 90);
  }

  /* ---------------------------------------------------------
     3. Süzgeç (FLIP)
     --------------------------------------------------------- */
  let currentFilter = "all";

  function updateStatus() {
    if (!status) return;
    const n = visibleItems().length;
    status.textContent = D.t("gallery.status", "{n} fotoğraf gösteriliyor").replace("{n}", n);
  }

  function setFilter(cat, fromBtn) {
    if (cat === currentFilter) return;
    currentFilter = cat;
    chips.forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.filter === cat)));
    const match = (it) => cat === "all" || it.dataset.cat === cat;
    const before = visibleItems();
    const leaving = before.filter((it) => !match(it));
    const staying = before.filter(match);
    const entering = items.filter((it) => it.classList.contains("is-hidden") && match(it));

    if (fromBtn && !RM) {
      const r = fromBtn.getBoundingClientRect();
      D.juice.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 12, power: 1 });
    }

    const relayout = () => {
      const first = new Map(staying.map((it) => [it, it.getBoundingClientRect()]));
      leaving.forEach((it) => {
        it.classList.add("is-hidden");
        gsap && gsap.set(it, { clearProps: "transform,opacity" });
      });
      entering.forEach((it) => it.classList.remove("is-hidden"));
      updateStatus();
      if (RM) {
        entering.forEach((it) => develop(it));
        D.ScrollTrigger && D.ScrollTrigger.refresh();
        return;
      }
      staying.forEach((it) => {
        const a = first.get(it);
        const b = it.getBoundingClientRect();
        const dx = a.left - b.left;
        const dy = a.top - b.top;
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
        const s = swings[items.indexOf(it)];
        gsap.fromTo(it, { x: dx, y: dy }, {
          x: 0,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          clearProps: "transform",
          onComplete: () => s && (s.v += (dx > 0 ? -1 : 1) * 160), // yeni yerinde sallansın
        });
        const rope = $(".gallery-rope", it);
        if (rope) D.draw(rope, { duration: 0.6, delay: 0.3 });
      });
      entering.forEach((it, i) => {
        delete it.dataset.shown;
        it.classList.remove("is-developed");
        revealItem(it, i + 1);
      });
      D.ScrollTrigger && D.ScrollTrigger.refresh();
    };

    if (RM || !leaving.length) {
      relayout();
      return;
    }
    // ipten düşen kareler
    gsap.to(leaving, {
      y: () => rnd(80, 160),
      rotate: () => rnd(-35, 35),
      opacity: 0,
      duration: 0.38,
      ease: "power2.in",
      stagger: 0.03,
      onComplete: relayout,
    });
  }

  chips.forEach((c) => c.addEventListener("click", () => setFilter(c.dataset.filter, c)));
  updateStatus();
  document.addEventListener("doodle:lang", updateStatus);

  /* ---------------------------------------------------------
     4. Lightbox
     --------------------------------------------------------- */
  const lb = $(".gallery-lb");
  const lbCard = $(".gallery-lb__card", lb);
  const lbImg = $(".gallery-lb__img", lb);
  const lbTitle = $(".gallery-lb__title", lb);
  const lbDesc = $(".gallery-lb__desc", lb);
  const lbCount = $(".gallery-lb__count", lb);
  const lbBackdrop = $(".gallery-lb__backdrop", lb);
  const lbBtns = $$(".gallery-lb__btn", lb);
  const outside = [$("main"), $(".nav"), $(".footer"), $(".skip-link"), $(".mobile-menu")].filter(Boolean);
  let list = [];
  let index = 0;
  let busy = false;
  let opener = null;

  function fill(i) {
    index = (i + list.length) % list.length;
    const it = list[index];
    const img = $(".gallery-photo img", it);
    lbImg.src = img.getAttribute("src");
    lbImg.setAttribute("width", img.getAttribute("width"));
    lbImg.setAttribute("height", img.getAttribute("height"));
    lbImg.alt = img.alt;
    lbTitle.innerHTML = $(".gallery-title", it).innerHTML;
    lbDesc.textContent = $(".gallery-desc", it).textContent;
    lbCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(list.length).padStart(2, "0")}`;
    // komşuları önden yükle
    [index - 1, index + 1].forEach((j) => {
      const n = list[(j + list.length) % list.length];
      if (n) new Image().src = $(".gallery-photo img", n).getAttribute("src");
    });
  }

  const thumbOf = (it) => $(".gallery-photo", it);
  const ready = () => (lbImg.decode ? lbImg.decode().catch(() => {}) : Promise.resolve());

  function lockPage(lock) {
    outside.forEach((el) => (lock ? el.setAttribute("inert", "") : el.removeAttribute("inert")));
    if (D.lenis) lock ? D.lenis.stop() : D.lenis.start();
    else document.documentElement.style.overflow = lock ? "hidden" : "";
  }

  async function openLb(it) {
    if (lbOpen) return;
    list = visibleItems();
    const i = list.indexOf(it);
    if (i < 0) return;
    opener = $(".gallery-open", it);
    lbOpen = true;
    fill(i);
    lb.hidden = false;
    lockPage(true);
    $(".gallery-lb__close", lb).focus({ preventScroll: true });
    if (RM) return;

    await ready();
    const from = thumbOf(it).getBoundingClientRect();
    gsap.set(lbCard, { clearProps: "transform,opacity" });
    const to = lbCard.getBoundingClientRect();
    const s = swings[items.indexOf(it)];
    gsap.fromTo(lbBackdrop, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power1.out" });
    gsap.fromTo(
      lbCard,
      {
        x: from.left + from.width / 2 - (to.left + to.width / 2),
        y: from.top + from.height / 2 - (to.top + to.height / 2),
        scale: from.width / to.width,
        rotate: s ? s.a : 0,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 0.75,
        ease: "expo.out",
        onComplete: () => {
          const r = lbCard.getBoundingClientRect();
          D.juice.burst(r.left + 20, r.top + 20, { count: 8, power: 1, colors: [cssVar("--yellow"), "#e07a4a"] });
          D.juice.burst(r.right - 20, r.top + 20, { count: 8, power: 1, colors: [cssVar("--yellow"), "#e07a4a"] });
        },
      }
    );
    gsap.fromTo(lbBtns, { scale: 0, rotate: -90 }, { scale: 1, rotate: 0, duration: 0.6, stagger: 0.06, delay: 0.2, ease: "back.out(2.2)", clearProps: "transform" });
  }

  function closeLb() {
    if (!lbOpen) return;
    const it = list[index];
    const done = () => {
      lb.hidden = true;
      lbOpen = false;
      busy = false;
      gsap && gsap.set([lbCard, lbBackdrop], { clearProps: "all" });
      lockPage(false);
      const btn = $(".gallery-open", it) || opener;
      if (btn) {
        const r = btn.getBoundingClientRect();
        if ((r.bottom < 0 || r.top > innerHeight) && D.lenis) D.lenis.scrollTo(it, { immediate: true, offset: -140 });
        btn.focus({ preventScroll: !!D.lenis });
      }
      // geri asılınca sallansın
      const s = swings[items.indexOf(it)];
      if (s) s.v += rnd(-180, 180);
    };
    if (RM) return done();
    gsap.killTweensOf(lbCard);
    const thumb = thumbOf(it).getBoundingClientRect();
    const cur = lbCard.getBoundingClientRect();
    const onScreen = thumb.bottom > 0 && thumb.top < innerHeight;
    gsap.to(lbBackdrop, { opacity: 0, duration: 0.3, ease: "power1.in" });
    gsap.to(lbBtns, { scale: 0, duration: 0.2, ease: "power2.in" });
    if (onScreen) {
      const s = swings[items.indexOf(it)];
      gsap.to(lbCard, {
        x: thumb.left + thumb.width / 2 - (cur.left + cur.width / 2) + (gsap.getProperty(lbCard, "x") || 0),
        y: thumb.top + thumb.height / 2 - (cur.top + cur.height / 2) + (gsap.getProperty(lbCard, "y") || 0),
        scale: thumb.width / (cur.width / (gsap.getProperty(lbCard, "scale") || 1)),
        rotate: s ? s.a : 0,
        duration: 0.45,
        ease: "power3.inOut",
        onComplete: done,
      });
    } else {
      gsap.to(lbCard, { scale: 0.6, y: 80, rotate: 10, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: done });
    }
  }

  function go(dir, fromX) {
    if (!lbOpen || busy || list.length < 2) return;
    if (RM) {
      fill(index + dir);
      return;
    }
    busy = true;
    const w = lbCard.offsetWidth;
    gsap.to(lbCard, {
      x: -dir * Math.max(innerWidth * 0.6, w),
      rotate: -dir * 22,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: async () => {
        fill(index + dir);
        await ready();
        gsap.fromTo(
          lbCard,
          { x: dir * innerWidth * 0.55, rotate: dir * 16, opacity: 0 },
          {
            x: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.3)",
            onComplete: () => {
              busy = false;
              D.juice.squash(lbCard, 0.4);
            },
          }
        );
      },
    });
  }

  if (lb) {
    items.forEach((it) => {
      const btn = $(".gallery-open", it);
      if (btn) btn.addEventListener("click", () => openLb(it));
    });
    $$("[data-lb-close]", lb).forEach((b) => b.addEventListener("click", closeLb));
    $("[data-lb-prev]", lb).addEventListener("click", () => go(-1));
    $("[data-lb-next]", lb).addEventListener("click", () => go(1));

    document.addEventListener("keydown", (e) => {
      if (!lbOpen) return;
      if (e.key === "Escape") {
        e.preventDefault();
        closeLb();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Tab") {
        // odak tuzağı
        const f = lbBtns.filter((b) => b.offsetParent !== null);
        const i = f.indexOf(document.activeElement);
        e.preventDefault();
        const n = e.shiftKey ? (i <= 0 ? f.length - 1 : i - 1) : (i + 1) % f.length;
        f[n].focus();
      }
    });

    // kaydırma (swipe / sürükle)
    let drag = null;
    lbCard.addEventListener("pointerdown", (e) => {
      if (busy || RM || (e.pointerType === "mouse" && e.button !== 0)) return;
      drag = { x0: e.clientX, dx: 0, id: e.pointerId };
      lbCard.setPointerCapture(e.pointerId);
    });
    lbCard.addEventListener("pointermove", (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      drag.dx = e.clientX - drag.x0;
      gsap.set(lbCard, { x: drag.dx, rotate: drag.dx * 0.04 });
    });
    const end = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = drag.dx;
      drag = null;
      if (Math.abs(dx) > 70) go(dx < 0 ? 1 : -1);
      else gsap.to(lbCard, { x: 0, rotate: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };
    lbCard.addEventListener("pointerup", end);
    lbCard.addEventListener("pointercancel", end);

    document.addEventListener("doodle:lang", () => {
      if (lbOpen) fill(index);
    });
  }

  /* ---------------------------------------------------------
     5. Başlat
     --------------------------------------------------------- */
  if (RM) items.forEach((it) => develop(it));

  D.onReady(() => {
    D.hydrate(document); // EN ile açılışta sözlükten gelen karalamalar

    if (!RM) {
      // başlık: lamba ışığı yanar gibi titreyerek gelir
      const title = $(".gallery-hero__title");
      gsap.fromTo(title, { opacity: 0 }, { keyframes: [{ opacity: 0.6 }, { opacity: 0.1 }, { opacity: 0.9 }, { opacity: 0.4 }, { opacity: 1 }], duration: 0.9, ease: "steps(1)" });
      gsap.fromTo([".gallery-hero__note", ".gallery-hero__lead"], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, delay: 0.3, ease: "expo.out" });
      if (lamp) {
        gsap.fromTo(lampBtn, { y: -260 }, { y: 0, duration: 1, ease: "bounce.out", onComplete: () => (lamp.v += 260) });
      }
      $$(".gallery-rope").forEach((r) => D.prepDraw(r));
      gsap.set(items, { opacity: 0 });

      const io2 = new IntersectionObserver(
        (entries) => {
          const entered = entries.filter((e) => e.isIntersecting).map((e) => e.target);
          entered.forEach((it, i) => {
            io2.unobserve(it);
            revealItem(it, i);
          });
        },
        { rootMargin: "0px 0px -10% 0px" }
      );
      items.forEach((it) => {
        // ekranın üstünde kalmış kareler (ör. derin bağlantı) hemen görünsün
        if (it.getBoundingClientRect().bottom < 0) revealItem(it, 0);
        else io2.observe(it);
      });
    }

    // derin bağlantı: galeri.html#foto-05 → o kare lightbox'ta açılır
    const m = /^#foto-(\d{2})$/.exec(location.hash);
    const target = m && document.getElementById("foto-" + m[1]);
    if (target) {
      if (D.lenis) D.lenis.scrollTo(target, { immediate: true, offset: -160 });
      else target.scrollIntoView({ block: "center" });
      setTimeout(() => {
        revealItem(target, 0);
        develop(target);
        openLb(target);
      }, RM ? 0 : 650);
    }
  });
})();
