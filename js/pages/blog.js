/* =========================================================
   BLOG — "Kod defterimden koparılan sayfalar"
   Liste: defterden koparılmış sayfa kartları (düşerek gelir, hover'da kalkar).
   Yazı: kalem çizgisi okuma ilerlemesi, içindekiler (aktif bölüm),
   defter/terminal kod blokları + kopyala, büyüyen ekran görüntüleri (lightbox),
   sonda "bitti!" damgası.
   Yazıya özel İngilizce metinler js/pages/blog-<slug>.i18n.js içinde (bu dosyadan önce yüklenir).
   ========================================================= */
(function () {
  "use strict";

  const D = window.Doodle;
  if (!D) return;

  /* ---------------------------------------------------------
     SÖZLÜK (senkron, onReady'den önce)
     --------------------------------------------------------- */
  /* @list-dict:start (tools: içerikten üretildi) */
  const LIST_EN = {
    "blog.list.metaTitle": "Blog: pages from my code notebook | Ad Soyad",
    "blog.list.desc": "Ad Soyad's frontend blog: posts with screenshots on scroll animations with GSAP ScrollTrigger, dark mode with CSS variables and mobile-first responsive design.",
    "blog.list.title": "Pages <span class=\"scribble-u\" data-color=\"var(--pink)\">torn</span> from my code notebook",
    "blog.list.lead": "While learning frontend, I write things down in my notebook, and here I copy them out neatly. Every post explains a technique I actually use on this site; the code and screenshots come from the site itself.",
    "blog.list.d0.t": "Accessible form validation",
    "blog.list.d0.d": "An error message is more than red text.",
    "blog.list.d1.t": "The road to Lighthouse 100",
    "blog.list.d1.d": "Small habits that raise the performance score.",
    "blog.list.d2.t": "Boiling lines: SVG filters",
    "blog.list.d2.d": "The <code>feTurbulence</code> trick that makes drawings wobble.",
    "blog.list.count": "3 posts",
    "blog.list.total": "~13 min of reading in total",
    "blog.list.last": "latest:",
    "blog.list.posts": "Posts",
    "blog.list.index": "In this notebook",
    "blog.list.soon": "coming soon",
    "blog.list.drafts": "Drafts in the notebook",
    "blog.list.draftsLead": "Topics not written up yet, but waiting in line. Which one do you want to read first? <a href=\"iletisim.html\" data-page-name=\"iletişim\">Write to me</a> and set the order.",
    "blog.st.title": "Pages that come alive as you scroll, with GSAP ScrollTrigger",
    "blog.st.short": "Pages that come alive on scroll",
    "blog.st.excerpt": "Pin, scrub, self-drawing SVG and Lenis sync: the four pieces behind this site's “whoa, it moves” scrolling, with the real code.",
    "blog.st.date": "November 15, 2026",
    "blog.st.read": "4 min read",
    "blog.dm.title": "Dark mode with CSS variables: a white notebook, a black notebook",
    "blog.dm.short": "White notebook, black notebook",
    "blog.dm.excerpt": "Tokens, <code>[data-theme]</code>, localStorage, the four lines that stop the white flash on first paint, and a circular transition spreading from the moon button.",
    "blog.dm.date": "October 30, 2026",
    "blog.dm.read": "5 min read",
    "blog.mf.title": "Mobile-first responsive design: 375 pixels first",
    "blog.mf.short": "375 pixels first",
    "blog.mf.excerpt": "Choosing breakpoints by content rather than device, headings that grow with <code>clamp()</code>, finger-sized touch targets, and 375 next to 1280.",
    "blog.mf.date": "October 12, 2026",
    "blog.mf.read": "4 min read",
    "blog.mf.tag3": "Accessibility"
  };
  /* @list-dict:end */

  const UI_EN = {
    "blog.ui.copy": "copy",
    "blog.ui.copied": "copied!",
    "blog.ui.copyFail": "press Ctrl+C",
    "blog.ui.zoom": "(click to enlarge)",
    "blog.ui.lightbox": "Enlarged screenshot",
    "blog.ui.close": "Close",
    "blog.ui.toc": "Contents",
    "blog.ui.allPosts": "All posts",
    "blog.ui.tags": "Tags",
    "blog.ui.more": "What else is in the notebook?",
    "blog.ui.older": "← Previous post",
    "blog.ui.newer": "Next post →",
    "blog.ui.stamp": "done!",
    "blog.ui.thanks":
      'Thanks for reading. Spotted a mistake or something worth adding? <a href="iletisim.html" data-page-name="iletişim">Write to me</a> and I\'ll make a note in my notebook.',
    "blog.ui.readPost": "Read the post",
  };
  D.i18n.add(Object.assign({}, LIST_EN, UI_EN));

  const gsap = D.gsap;
  const ST = D.ScrollTrigger;
  const RM = D.reducedMotion || !gsap;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const isPost = document.body.classList.contains("blog-page--post");

  /* ---------------------------------------------------------
     1. Yazı sayfalarında nav'da "Blog" aktif
        (core markActiveNav yalnız birebir dosya adını işaretler)
     --------------------------------------------------------- */
  if (isPost) {
    $$('.nav__link[href="blog.html"], .mobile-menu a[href="blog.html"]').forEach((a) => {
      a.classList.add("is-active");
      a.setAttribute("aria-current", "page");
    });
  }

  /* ---------------------------------------------------------
     2. Sözdizimi renklendirme (küçük, bağımlılıksız)
     --------------------------------------------------------- */
  const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const RULES = {
    js: [
      ["c", /\/\/[^\n]*|\/\*[\s\S]*?\*\//],
      ["s", /`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'/],
      ["k", /\b(?:const|let|var|function|return|if|else|new|true|false|null|try|catch|of|in|typeof|this)\b/],
      ["n", /\b\d+(?:\.\d+)?\b/],
      ["f", /[A-Za-z_$][\w$]*(?=\s*\()/],
    ],
    css: [
      ["c", /\/\*[\s\S]*?\*\//],
      ["s", /"(?:\\.|[^"\\\n])*"/],
      ["v", /--[\w-]+/],
      ["k", /@media|@supports|!important/],
      ["p", /[a-z-]+(?=\s*:\s*[^;{}\n]*;)/],
      ["n", /#[0-9a-fA-F]{3,8}\b|-?\b\d*\.?\d+(?:px|rem|em|vw|vh|dvh|%|deg|ms|s)?\b/],
    ],
    html: [
      ["c", /<!--[\s\S]*?-->/],
      ["t", /<\/?[\w-]+|\/?>/],
      ["p", /[\w:-]+(?==)/],
      ["s", /"[^"\n]*"/],
    ],
  };
  const COMPILED = {};
  Object.keys(RULES).forEach((lang) => {
    COMPILED[lang] = new RegExp(RULES[lang].map((r) => "(" + r[1].source + ")").join("|"), "g");
  });

  function highlight(code) {
    const lang = (code.className.match(/language-(\w+)/) || [])[1];
    const re = COMPILED[lang];
    if (!re) return;
    const src = code.textContent;
    let out = "";
    let last = 0;
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(src))) {
      if (m[0] === "") {
        re.lastIndex++;
        continue;
      }
      const gi = m.findIndex((g, i) => i > 0 && g !== undefined);
      out += escapeHtml(src.slice(last, m.index));
      out += '<span class="tok-' + RULES[lang][gi - 1][0] + '">' + escapeHtml(m[0]) + "</span>";
      last = re.lastIndex;
    }
    out += escapeHtml(src.slice(last));
    code.innerHTML = out;
  }

  const codes = $$(".blog-code code");
  codes.forEach(highlight);
  // dil değişince (yorumlar çevrilir) yeniden renklendir
  document.addEventListener("doodle:lang", () => codes.forEach(highlight));

  /* ---------------------------------------------------------
     3. Kopyala butonu (juice + "kopyalandı!")
     --------------------------------------------------------- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(() => true, () => legacyCopy(text));
    }
    return Promise.resolve(legacyCopy(text));
  }
  function legacyCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    ta.remove();
    return ok;
  }

  // ekran okuyucuya kısa duyuru
  const live = document.createElement("p");
  live.className = "sr-only";
  live.setAttribute("aria-live", "polite");
  document.body.appendChild(live);

  $$(".blog-code__copy").forEach((btn) => {
    const label = $(".blog-code__copy-label", btn);
    const check = $(".doodle svg", btn);
    let timer = 0;
    btn.addEventListener("click", (e) => {
      const code = $("code", btn.closest(".blog-code"));
      copyText(code.textContent).then((ok) => {
        clearTimeout(timer);
        const msg = ok ? D.t("blog.ui.copied", "kopyalandı!") : D.t("blog.ui.copyFail", "Ctrl+C'ye bas");
        label.textContent = msg;
        live.textContent = msg;
        btn.classList.toggle("is-copied", ok);
        if (ok && check) D.draw(check, { duration: 0.45 });
        if (ok) {
          const r = btn.getBoundingClientRect();
          D.juice.burst(e.clientX || r.left + r.width / 2, e.clientY || r.top + r.height / 2, {
            count: 14,
            power: 1.1,
            colors: ["#e2c27c", "#a9b47a", "#e07a4a", "#f2f0ea"],
          });
        } else {
          D.juice.shake(btn, 0.6);
          // yedek: kodu seçili bırak, kullanıcı kendisi kopyalasın
          const sel = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(code);
          sel.removeAllRanges();
          sel.addRange(range);
        }
        timer = setTimeout(() => {
          label.textContent = D.t("blog.ui.copy", "kopyala");
          btn.classList.remove("is-copied");
        }, 1900);
      });
    });
  });

  /* ---------------------------------------------------------
     4. Ekran görüntüsü lightbox (FLIP ile büyür)
     --------------------------------------------------------- */
  const dlg = $("#blogLightbox");
  if (dlg && typeof dlg.showModal === "function") {
    const lbImg = $(".blog-lightbox__img", dlg);
    const lbCap = $(".blog-lightbox__cap", dlg);
    const lbClose = $(".blog-lightbox__close", dlg);
    let opener = null;
    let closing = false;

    const thumbOf = (btn) => $("img", btn);
    const flipFrom = (thumb) => {
      const a = thumb.getBoundingClientRect();
      const b = lbImg.getBoundingClientRect();
      return { x: a.left - b.left, y: a.top - b.top, scale: a.width / b.width };
    };

    const open = (btn) => {
      const thumb = thumbOf(btn);
      opener = btn;
      closing = false;
      lbImg.src = thumb.currentSrc || thumb.src;
      lbImg.alt = thumb.alt;
      lbImg.width = thumb.naturalWidth || thumb.width;
      lbImg.height = thumb.naturalHeight || thumb.height;
      const cap = $("figcaption", btn.closest("figure"));
      lbCap.innerHTML = cap ? cap.innerHTML : "";
      dlg.showModal();
      document.documentElement.classList.add("blog-lb-open");
      D.lenis && D.lenis.stop();
      if (RM) return;
      const r = parseFloat(getComputedStyle(btn.closest("figure")).getPropertyValue("--r")) || 0;
      gsap.fromTo(
        lbImg,
        Object.assign({ rotate: r, transformOrigin: "0 0" }, flipFrom(thumb)),
        { x: 0, y: 0, scale: 1, rotate: 0, duration: 0.6, ease: "expo.out" }
      );
      gsap.fromTo(lbCap, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.25, ease: "power2.out" });
      gsap.fromTo(lbClose, { scale: 0, rotate: -90 }, { scale: 1, rotate: 0, duration: 0.55, delay: 0.2, ease: "back.out(2)" });
    };

    const finish = () => {
      dlg.close();
      document.documentElement.classList.remove("blog-lb-open");
      D.lenis && D.lenis.start();
      gsap && gsap.set([lbImg, lbCap, lbClose], { clearProps: "all" });
      if (opener) opener.focus({ preventScroll: true });
      closing = false;
    };

    const close = () => {
      if (closing || !dlg.open) return;
      closing = true;
      if (RM || !opener) return finish();
      const thumb = thumbOf(opener);
      const r = parseFloat(getComputedStyle(opener.closest("figure")).getPropertyValue("--r")) || 0;
      gsap.to(lbCap, { opacity: 0, duration: 0.15 });
      gsap.to(lbImg, Object.assign({ rotate: r, duration: 0.42, ease: "power3.inOut", onComplete: finish }, flipFrom(thumb)));
      dlg.classList.add("is-closing");
      setTimeout(() => dlg.classList.remove("is-closing"), 450);
    };

    $$("[data-zoom]").forEach((btn) => btn.addEventListener("click", () => open(btn)));
    dlg.addEventListener("click", close); // görsele, boşluğa ya da kapat düğmesine tıklama kapatır
    dlg.addEventListener("cancel", (e) => {
      e.preventDefault();
      close();
    });
  }

  /* ---------------------------------------------------------
     5. İçindekiler: masaüstünde hep açık, aktif bölüm vurgusu,
        nav yüksekliği kadar boşlukla kaydırma
     --------------------------------------------------------- */
  const toc = $(".blog-toc");
  if (toc) {
    const details = $("details", toc);
    const wide = window.matchMedia("(min-width: 1100px)");
    const syncOpen = () => {
      if (wide.matches) details.open = true;
    };
    // telefonda kapalı başlasın, yer kaplamasın
    if (!wide.matches) details.open = false;
    wide.addEventListener ? wide.addEventListener("change", syncOpen) : wide.addListener(syncOpen);
    $(".blog-toc__sum", toc).addEventListener("click", (e) => {
      if (wide.matches) e.preventDefault();
    });

    const links = $$("a", toc);
    const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const setActive = (id) => {
      links.forEach((a) => {
        const on = a.getAttribute("href") === "#" + id;
        a.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    };

    if ("IntersectionObserver" in window) {
      const visible = new Set();
      const sections = $$(".blog-sec");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => (en.isIntersecting ? visible.add(en.target) : visible.delete(en.target)));
          const first = sections.find((s) => visible.has(s));
          if (first) setActive(first.id);
        },
        { rootMargin: "-25% 0px -55% 0px" }
      );
      sections.forEach((s) => byId.has(s.id) && io.observe(s));
    }

    // core'un çapa kaydırması nav'ın altında bırakıyor → kendi ofsetimizle kaydır
    document.addEventListener(
      "click",
      (e) => {
        const a = e.target.closest(".blog-toc a");
        if (!a) return;
        const target = document.getElementById(a.getAttribute("href").slice(1));
        if (!target) return;
        e.preventDefault();
        e.stopPropagation();
        const heading = $("h2", target) || target;
        if (D.lenis) D.lenis.scrollTo(target, { offset: -110 });
        else target.scrollIntoView({ behavior: RM ? "auto" : "smooth", block: "start" });
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
        try {
          history.replaceState(null, "", "#" + target.id);
        } catch (err) {}
        if (!wide.matches) details.open = false;
      },
      true
    );
  }

  /* ---------------------------------------------------------
     6. Okuma ilerlemesi: üstte kendini çizen kalem çizgisi
     --------------------------------------------------------- */
  const prog = $(".blog-progress");
  const article = $(".blog-post");
  if (prog && article) {
    const ink = $(".blog-progress__ink", prog);
    const tip = $(".blog-progress__tip", prog);
    ink.style.strokeDasharray = "1 2";
    let width = prog.clientWidth;
    let done = false;
    const set = (p) => {
      ink.style.strokeDashoffset = String(1 - p);
      tip.style.transform = "translate3d(" + (p * (width - 34)).toFixed(1) + "px,0,0)";
      prog.classList.toggle("is-started", p > 0.002);
      if (p > 0.995 && !done) {
        done = true;
        prog.classList.add("is-done");
        if (!RM) {
          const r = tip.getBoundingClientRect();
          D.juice.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 16, power: 1 });
          D.juice.wiggle(tip);
        }
      }
    };
    window.addEventListener("resize", () => (width = prog.clientWidth));

    if (ST) {
      D.onReady(() => {
        ST.create({
          trigger: article,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => set(self.progress),
          onRefresh: (self) => {
            width = prog.clientWidth;
            set(self.progress);
          },
        });
      });
    } else {
      let max = 1;
      let top = 0;
      const measure = () => {
        top = article.getBoundingClientRect().top + window.scrollY;
        max = Math.max(1, article.offsetHeight - innerHeight);
      };
      measure();
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", () => set(Math.min(1, Math.max(0, (window.scrollY - top) / max))), { passive: true });
    }
  }

  /* ---------------------------------------------------------
     7. Sonda "bitti!" damgası
     --------------------------------------------------------- */
  const stamp = $(".blog-end__stamp");
  if (stamp && !RM && ST) {
    D.onReady(() => {
      gsap.set(stamp, { opacity: 0 });
      ST.create({
        trigger: stamp,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            stamp,
            { opacity: 0, scale: 2.4, rotate: -24 },
            {
              opacity: 1,
              scale: 1,
              rotate: -8,
              duration: 0.5,
              ease: "back.out(2.2)",
              onComplete: () => {
                const r = stamp.getBoundingClientRect();
                D.juice.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 12, power: 0.9 });
                D.juice.shake(stamp.parentElement, 0.35);
              },
            }
          );
        },
      });
    });
  }

  /* ---------------------------------------------------------
     8. Liste: kartlar defterden koparılıp masaya düşer
     --------------------------------------------------------- */
  const items = $$(".blog-item");
  if (items.length && !RM && ST) {
    D.onReady(() => {
      const mm = gsap.matchMedia();
      mm.add({ desk: "(min-width: 768px)", mob: "(max-width: 767px)" }, (ctx) => {
        const k = ctx.conditions.desk ? 1 : 0.5;
        items.forEach((li, i) => {
          const dir = i % 2 ? 1 : -1;
          gsap.fromTo(
            li,
            { opacity: 0, y: 110 * k, x: dir * 50 * k, rotate: dir * 9 * k },
            {
              opacity: 1,
              y: 0,
              x: 0,
              rotate: 0,
              duration: 1,
              ease: "back.out(1.3)",
              scrollTrigger: { trigger: li, start: "top 88%", once: true },
              onComplete: () => {
                gsap.set(li, { clearProps: "transform,opacity" });
                // koparılan kağıt kırıntıları
                const paper = $(".blog-card__paper", li);
                const r = paper.getBoundingClientRect();
                if (r.top < innerHeight && r.bottom > 0) {
                  D.juice.burst(r.left + r.width * (0.3 + Math.random() * 0.4), r.top + 14, {
                    count: 9,
                    power: 0.8,
                    colors: ["#e9dcb5", "#cfd3bd", "#e8c4ad", getComputedStyle(document.documentElement).getPropertyValue("--ink").trim()],
                  });
                }
              },
            }
          );
        });
      });
    });
  }

  // kartın tamamı tıklanabilir: başlık linki overlay ile; burada sadece basınca ezilme
  $$(".blog-card").forEach((card) => {
    card.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      D.juice.squash($(".blog-card__paper", card), 0.35);
    });
  });
})();
