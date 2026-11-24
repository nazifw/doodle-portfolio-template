/* =========================================================
   İLETİŞİM — "Bana bir mektup yaz"
   Mad-libs mektup formu (JS doğrulama), doodle tuvali,
   kağıt uçak gönderim animasyonu, pullar, adres, harita, SSS.
   Gönderilen mektup Doodle.content.saveMessage ile saklanır
   → admin.html "Mesajlar" sekmesinde görünür.
   ========================================================= */

/* --- İngilizce sözlük (senkron, onReady'den önce) --- */
window.Doodle &&
  Doodle.i18n.add({
    "contact.meta.title": "Contact | Ad Soyad",
    "contact.meta.desc": "Get in touch with Ad Soyad: address in Kadıköy, Istanbul, phone, email and a doodle contact form that folds into a paper plane. Plus FAQ and a hand-drawn map of Istanbul.",
    "contact.meta.og": "Address, phone, email and a contact form that turns into a paper plane.",

    "contact.hero.status": "Open to new projects right now",
    "contact.hero.title": "Say hi!",
    "contact.hero.lead": "Got a project in mind, an internship, or just a quick <span class=\"marker\">hello</span>? Fill in the letter below and we'll fold it into a paper plane.",
    "contact.hero.cta": "Start a letter",
    "contact.hero.alt": "address &amp; phone",
    "contact.hero.note": "your letter goes here!",
    "contact.hero.scroll": "scroll down, grab a pen",

    "contact.letter.title": "Write me a letter",
    "contact.letter.intro": "Fill in the blanks, I'll take it from there. Required: name, topic, email and message.",
    "contact.form.greet": "Dear Ad,",
    "contact.form.l1": "My name is",
    "contact.form.l1sr": " (your full name, required)",
    "contact.form.namePh": "your name",
    "contact.form.l2": "and I'm writing to you about",
    "contact.form.l2sr": " (pick a topic, required)",
    "contact.form.subj0": "pick a topic…",
    "contact.form.subj1": "a job offer",
    "contact.form.subj2": "a project together",
    "contact.form.subj3": "a question or idea",
    "contact.form.subj4": "nothing, just hi",
    "contact.form.t1": ".",
    "contact.form.l3": "Write back to me at",
    "contact.form.l3sr": " (your email address, required)",
    "contact.form.emailPh": "you@mail.com",
    "contact.form.t3": "and I'll be waiting.",
    "contact.form.l4": "Here's what I want to say:",
    "contact.form.l4sr": " (at least 10 characters, required)",
    "contact.form.msgPh": "Hi! Here's the idea I've got…",
    "contact.form.chars": "chars",
    "contact.form.love": "Cheers,",
    "contact.form.sig": "Signature",
    "contact.form.ps": "Note: this is a midterm project. The letter isn't emailed; it's kept in this browser and read in the admin panel. The plane really flies, though.",
    "contact.sketch.title": "Leave a doodle!",
    "contact.sketch.opt": "(optional)",
    "contact.sketch.pens": "Pen colour",
    "contact.sketch.pen1": "Black pen",
    "contact.sketch.pen2": "Khaki pen",
    "contact.sketch.pen3": "Rust pen",
    "contact.sketch.clear": "clear",
    "contact.sketch.ph": "scribble here",

    "contact.thanks.stamp": "SENT",
    "contact.thanks.title": "Your letter is on its way!",
    "contact.thanks.imgAlt": "The drawing you attached to your letter",
    "contact.thanks.cap": "your doodle, attached",
    "contact.thanks.again": "Write another letter",

    "contact.channels.title": "Other ways in",
    "contact.channels.intro": "Not in the mood for letters? No problem, every stamp is a different door.",
    "contact.st.email": "Email",
    "contact.st.phone": "Phone",
    "contact.st.phoneMeta": "weekdays 10:00–19:00",
    "contact.st.loc": "Address",
    "contact.st.locMeta": "remote works too",
    "contact.st.ghMeta": "where my code lives",
    "contact.st.liMeta": "me in a suit and tie",
    "contact.st.igMeta": "sketches and coffee",
    "contact.newTab": " (opens in a new tab)",

    "contact.map.title": "My address book",
    "contact.map.lead": "I'm in Istanbul, writing code by the Bosphorus between seagulls and ferry horns. Always up for a coffee in person.",
    "contact.addr.to": "to / alıcı",
    "contact.addr.addrSr": "Address: ",
    "contact.addr.phoneSr": "Phone: ",
    "contact.addr.mailSr": "Email: ",
    "contact.addr.note": "Address and phone are placeholders for now.",
    "contact.map.clock": "Time in Istanbul right now",
    "contact.map.svgTitle": "Hand-drawn map of Istanbul: the Bosphorus, a bridge, Galata Tower, a ferry and seagulls; the location pin sits on the Kadıköy side.",
    "contact.map.l1": "Black Sea",
    "contact.map.l2": "Europe",
    "contact.map.l3": "Asia",
    "contact.map.l4": "Marmara",
    "contact.map.l5": "Bosphorus",
    "contact.map.cap": "I'm here!",

    "contact.faq.title": "Questions on your mind",
    "contact.faq.q1": "How fast do you reply?",
    "contact.faq.a1": "Usually within <strong>24 hours</strong>, 48 at most. During exam week it may take a bit longer, but I always get back to you.",
    "contact.faq.q2": "Do you freelance?",
    "contact.faq.a2": "Yes! I take on small and medium web projects, landing pages and portfolio sites. We'll plan it so it fits around my classes.",
    "contact.faq.q3": "What do you build with?",
    "contact.faq.a3": "HTML, CSS and JavaScript at the core; GSAP for motion, React for interfaces, plus a bit of Node.js and Python. This site is hand-drawn in plain HTML/CSS/JS.",
    "contact.faq.q4": "Are you open to internships?",
    "contact.faq.a4": "Absolutely! As a Computer Engineering student I'm very open to summer and term-time frontend internships. Just pick “a job offer” as the topic in the letter.",

    /* JS metinleri */
    "contact.js.place": "Istanbul",
    "contact.js.err.name": "you forgot your name!",
    "contact.js.err.nameShort": "at least 3 letters, please",
    "contact.js.err.subject": "pick a topic, please",
    "contact.js.err.email": "I need your email!",
    "contact.js.err.emailBad": "that email doesn't look right",
    "contact.js.err.msg": "an empty letter? :)",
    "contact.js.err.msgShort": "write a bit more ({n}/{min})",
    "contact.js.count.min": "at least {min} needed",
    "contact.js.count.left": "{n} more to go",
    "contact.js.count.ok": "great, keep going!",
    "contact.js.count.long": "a whole novel, love it!",
    "contact.js.send": "Fold and send",
    "contact.js.sending": "folding…",
    "contact.js.thanks": "Thanks {name}! Your letter about “{subject}” took off by paper plane. I'll reply to {email} as soon as I can.",
    "contact.js.saveFail": "Your browser wouldn't let me store the letter (storage may be full or blocked). Please email me directly instead.",
    "contact.js.copy": "copy",
    "contact.js.copied": "copied",
    "contact.js.copiedNote": "copied!",
    "contact.js.copyFail": "couldn't copy, select it by hand",
  });

(function () {
  "use strict";

  const D = window.Doodle || {};
  const gsap = D.gsap || window.gsap;
  const RM = !!D.reducedMotion || !gsap;
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => [...(c || document).querySelectorAll(s)];
  const T = (key, tr, vars) => {
    let s = D.t ? D.t(key, tr) : tr;
    if (vars) Object.keys(vars).forEach((k) => (s = s.split("{" + k + "}").join(vars[k])));
    return s;
  };
  const lang = () => (D.i18n && D.i18n.lang) || "tr";

  /* ---------------------------------------------------------
     Yardımcılar
     --------------------------------------------------------- */
  const fmtDate = () => {
    const loc = lang() === "en" ? "en-GB" : "tr-TR";
    try {
      return new Intl.DateTimeFormat(loc, { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" }).format(new Date());
    } catch (e) {
      return new Date().toLocaleDateString(loc);
    }
  };

  const smoothTo = (el, offset) => {
    const y = el.getBoundingClientRect().top + window.scrollY - (offset || 110);
    if (D.lenis) D.lenis.scrollTo(Math.max(0, y), { duration: 1, force: true });
    else window.scrollTo({ top: Math.max(0, y), behavior: RM ? "auto" : "smooth" });
  };

  /* ---------------------------------------------------------
     1. Tarih + saat
     --------------------------------------------------------- */
  const dateEl = $("#contactDate");
  const renderDate = () => {
    if (dateEl) dateEl.textContent = T("contact.js.place", "İstanbul") + ", " + fmtDate();
  };
  renderDate();

  const clock = $("#contactClock");
  if (clock) {
    const tick = () => {
      try {
        clock.textContent = new Intl.DateTimeFormat(lang() === "en" ? "en-GB" : "tr-TR", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Istanbul" }).format(new Date());
      } catch (e) {
        const d = new Date();
        clock.textContent = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
      }
    };
    tick();
    setInterval(tick, 20000);
  }

  /* ---------------------------------------------------------
     2. FORM + DOĞRULAMA
     --------------------------------------------------------- */
  const form = $("#contactForm");
  const fields = {
    name: $("#contact-name"),
    subject: $("#contact-subject"),
    email: $("#contact-email"),
    message: $("#contact-message"),
  };
  const submitBtn = $("#contactSubmit");
  const submitLabel = submitBtn ? $(".contact-submit__label", submitBtn) : null;
  const statusEl = $("#contactStatus");
  const signature = $("#contactSignature");
  const counter = $("#contact-message-count");
  const counterNum = counter ? $(".contact-counter__num", counter) : null;
  const counterHint = counter ? $(".contact-counter__hint", counter) : null;
  const MIN_MSG = 10;
  const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-zÀ-ÿ]{2,}$/;

  const RULES = {
    name: (v) => {
      v = v.trim();
      if (!v) return T("contact.js.err.name", "adını yazmayı unuttun!");
      if (v.length < 3) return T("contact.js.err.nameShort", "en az 3 harf olsun");
      return "";
    },
    subject: (v) => (v ? "" : T("contact.js.err.subject", "bir konu seç lütfen")),
    email: (v) => {
      v = v.trim();
      if (!v) return T("contact.js.err.email", "e-postan lazım!");
      if (!EMAIL_RE.test(v)) return T("contact.js.err.emailBad", "bu e-posta pek olmamış");
      return "";
    },
    message: (v) => {
      const n = v.trim().length;
      if (!n) return T("contact.js.err.msg", "boş mektup mu? :)");
      if (n < MIN_MSG) return T("contact.js.err.msgShort", "biraz daha yaz ({n}/{min})", { n, min: MIN_MSG });
      return "";
    },
  };

  const touched = new Set();

  function wrapOf(input) {
    return input.closest(".contact-field");
  }

  function shake(el) {
    if (RM) return;
    gsap.fromTo(el, { x: 0 }, { keyframes: { x: [0, -9, 8, -6, 5, -2, 0] }, duration: 0.5, ease: "power1.out", clearProps: "x" });
  }

  function placeError(wrap, errEl) {
    // sağ kenara taşarsa sağa yasla (sadece doğrulama anında ölçülür)
    wrap.classList.remove("is-flip");
    if (wrap.classList.contains("contact-field--area")) return;
    const paperR = form.getBoundingClientRect();
    const r = errEl.getBoundingClientRect();
    if (r.right > paperR.right - 8) wrap.classList.add("is-flip");
  }

  function validateField(key, opts) {
    const o = opts || {};
    const input = fields[key];
    if (!input) return true;
    const wrap = wrapOf(input);
    const errEl = $(".contact-field__error", wrap);
    const msg = RULES[key](input.value);
    const wasInvalid = wrap.classList.contains("is-invalid");

    if (msg) {
      const changed = errEl.textContent !== msg;
      errEl.textContent = msg;
      input.setAttribute("aria-invalid", "true");
      wrap.classList.remove("is-valid");
      wrap.classList.add("is-invalid");
      placeError(wrap, errEl);
      if (o.shake && (!wasInvalid || changed || o.force)) shake(wrap);
      if (!RM && !wasInvalid) {
        gsap.fromTo(errEl, { rotate: -8, y: -4 }, { rotate: -2, y: 0, duration: 0.6, ease: "back.out(3)", clearProps: "y" });
      }
      return false;
    }

    errEl.textContent = "";
    input.removeAttribute("aria-invalid");
    wrap.classList.remove("is-invalid", "is-flip");
    const becameValid = !wrap.classList.contains("is-valid");
    wrap.classList.add("is-valid");
    if (becameValid && !RM) {
      const tickEl = $(".contact-field__tick", wrap);
      if (tickEl) gsap.fromTo(tickEl, { scale: 0.4, rotate: -20 }, { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(2.5)" });
    }
    return true;
  }

  function autoWidth(input) {
    if (!input || input.tagName !== "INPUT") return;
    const len = Math.max(input.value.length, (input.placeholder || "").length, 7);
    input.style.width = Math.min(len + 2, 40) + "ch";
  }

  function autoHeight(ta) {
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + 4 + "px";
  }

  function updateSignature() {
    if (!signature) return;
    const v = fields.name.value.trim();
    signature.textContent = v || "…";
  }

  function updateCounter() {
    if (!counter) return;
    const raw = fields.message.value.length;
    const n = fields.message.value.trim().length;
    counterNum.textContent = raw;
    if (n >= MIN_MSG) {
      counter.classList.add("is-ok");
      counterHint.textContent = n > 600 ? T("contact.js.count.long", "roman gibi, bayıldım!") : T("contact.js.count.ok", "süper, devam!");
    } else {
      counter.classList.remove("is-ok");
      counterHint.textContent =
        n === 0
          ? T("contact.js.count.min", "en az {min} harf lazım", { min: MIN_MSG })
          : T("contact.js.count.left", "{n} harf daha", { n: MIN_MSG - n });
    }
  }

  if (form) {
    Object.keys(fields).forEach((key) => {
      const input = fields[key];
      if (!input) return;

      input.addEventListener("blur", () => {
        // boş bırakıp hiç dokunmadan geçmek hata göstermesin, yazıp çıkınca doğrula
        if (input.value.trim() !== "" || touched.has(key)) {
          touched.add(key);
          validateField(key, { shake: true });
        }
      });

      const onChange = () => {
        if (key === "name") {
          updateSignature();
          autoWidth(input);
        }
        if (key === "email") autoWidth(input);
        if (key === "message") {
          updateCounter();
          autoHeight(input);
        }
        if (touched.has(key)) validateField(key);
      };
      input.addEventListener("input", onChange);
      input.addEventListener("change", () => {
        if (key === "subject") {
          touched.add(key);
          validateField(key);
        }
      });
    });

    autoWidth(fields.name);
    autoWidth(fields.email);
    updateCounter();
    if (submitLabel) submitLabel.textContent = T("contact.js.send", "Katla ve gönder");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.classList.contains("is-sending")) return;
      if (statusEl) statusEl.textContent = "";

      let firstBad = null;
      Object.keys(fields).forEach((key) => {
        touched.add(key);
        const ok = validateField(key, { shake: true, force: true });
        if (!ok && !firstBad) firstBad = fields[key];
      });

      if (firstBad) {
        firstBad.focus({ preventScroll: true });
        const r = firstBad.getBoundingClientRect();
        if (r.top < 90 || r.bottom > window.innerHeight - 40) smoothTo(firstBad, 160);
        return;
      }

      if (!store()) {
        if (statusEl) statusEl.textContent = T("contact.js.saveFail", "Tarayıcın mektubu saklamama izin vermedi (depolama dolu ya da kapalı olabilir). Bana doğrudan e-posta atabilirsin.");
        if (D.juice) D.juice.shake(form, 0.6);
        return;
      }
      send();
    });
  }

  /* dil değişince: tarih, sayaç, buton, açık hatalar yeni dilde */
  document.addEventListener("doodle:lang", () => {
    renderDate();
    if (!form) return;
    updateCounter();
    if (submitLabel && !form.classList.contains("is-sending")) submitLabel.textContent = T("contact.js.send", "Katla ve gönder");
    touched.forEach((key) => validateField(key));
    autoWidth(fields.name);
    autoWidth(fields.email);
    if (copyLabel) copyLabel.textContent = T("contact.js.copy", "kopyala");
  });

  /* ---------------------------------------------------------
     3. DOODLE TUVALİ
     --------------------------------------------------------- */
  const canvas = $("#contactSketch");
  const sketch = canvas ? canvas.closest(".contact-sketch") : null;
  let hasInk = false;
  let penColor = "#161714";
  let ctx = null;

  function sizeCanvas() {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(rect.width * dpr));
    const h = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width === w && canvas.height === h) return;
    // mevcut çizimi koru
    let snapshot = null;
    if (hasInk && canvas.width > 1) {
      snapshot = document.createElement("canvas");
      snapshot.width = canvas.width;
      snapshot.height = canvas.height;
      snapshot.getContext("2d").drawImage(canvas, 0, 0);
    }
    canvas.width = w;
    canvas.height = h;
    ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (snapshot) ctx.drawImage(snapshot, 0, 0, snapshot.width, snapshot.height, 0, 0, rect.width, rect.height);
  }

  function clearCanvas() {
    if (!canvas || !ctx) return;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    hasInk = false;
    sketch.classList.remove("has-ink");
  }

  if (canvas) {
    sizeCanvas();
    if ("ResizeObserver" in window) new ResizeObserver(sizeCanvas).observe(canvas);
    else window.addEventListener("resize", sizeCanvas);

    let drawing = false;
    let last = null;
    let mid = null;

    const pos = (e) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    canvas.addEventListener("pointerdown", (e) => {
      if (!ctx) sizeCanvas();
      drawing = true;
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch (err) {}
      last = pos(e);
      mid = last;
      ctx.fillStyle = penColor;
      ctx.beginPath();
      ctx.arc(last.x, last.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
      if (!hasInk) {
        hasInk = true;
        sketch.classList.add("has-ink");
      }
      e.preventDefault();
    });

    canvas.addEventListener("pointermove", (e) => {
      if (!drawing) return;
      const p = pos(e);
      const m = { x: (last.x + p.x) / 2, y: (last.y + p.y) / 2 };
      const speed = Math.hypot(p.x - last.x, p.y - last.y);
      ctx.strokeStyle = penColor;
      ctx.lineWidth = Math.max(1.6, 4.2 - speed * 0.08);
      ctx.beginPath();
      ctx.moveTo(mid.x, mid.y);
      ctx.quadraticCurveTo(last.x, last.y, m.x, m.y);
      ctx.stroke();
      last = p;
      mid = m;
    });

    const end = () => {
      drawing = false;
    };
    canvas.addEventListener("pointerup", end);
    canvas.addEventListener("pointercancel", end);
    canvas.addEventListener("lostpointercapture", end);

    $$(".contact-pen").forEach((btn) => {
      btn.addEventListener("click", () => {
        penColor = btn.dataset.pen;
        $$(".contact-pen").forEach((b) => {
          const on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", String(on));
        });
      });
    });

    const clearBtn = $("#contactSketchClear");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (!hasInk) return;
        if (RM) return clearCanvas();
        gsap.to(canvas, {
          opacity: 0,
          x: 30,
          rotate: 3,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => {
            clearCanvas();
            gsap.set(canvas, { clearProps: "opacity,x,rotate,transform" });
          },
        });
      });
    }
  }

  /* ---------------------------------------------------------
     4. GÖNDER: katla → kağıt uçak → rota → teşekkür kartı
     --------------------------------------------------------- */
  const thanks = $("#contactThanks");
  const thanksTitle = $("#contactThanksTitle");
  const thanksMsg = $("#contactThanksMsg");
  const thanksDoodle = $("#contactThanksDoodle");
  const thanksImg = $("#contactThanksImg");
  const againBtn = $("#contactAgain");
  const paperBody = form ? $(".contact-paper__body", form) : null;
  const crease = form ? $(".contact-paper__crease", form) : null;

  const PLANE_SVG =
    '<svg viewBox="0 0 100 100" aria-hidden="true">' +
    '<path d="M4 50 L96 14 L40 60 Z" fill="#fbfaf6"/>' +
    '<path d="M40 60 L96 14 L64 90 Z" fill="#e9e3cf"/>' +
    '<path d="M40 60 L46 84 L56 70" fill="#d6cfb8"/>' +
    '<path d="M4 50 L40 60 M40 60 L96 14" fill="none"/>' +
    "</svg>";

  function setSending(on) {
    form.classList.toggle("is-sending", on);
    form.setAttribute("aria-busy", String(on));
    submitBtn.disabled = on;
    submitLabel.textContent = on ? T("contact.js.sending", "katlanıyor…") : T("contact.js.send", "Katla ve gönder");
  }

  function subjectLabel() {
    const opt = fields.subject.options[fields.subject.selectedIndex];
    return opt ? opt.textContent.trim() : fields.subject.value;
  }

  // doodle tuvalini en fazla 400px genişliğe küçültüp PNG dataURL yap (localStorage dostu)
  let lastDoodle = "";
  function doodleData() {
    if (!hasInk || !canvas || !canvas.width) return "";
    try {
      const MAX_W = 400;
      const k = Math.min(1, MAX_W / canvas.width);
      const out = document.createElement("canvas");
      out.width = Math.max(1, Math.round(canvas.width * k));
      out.height = Math.max(1, Math.round(canvas.height * k));
      const c = out.getContext("2d");
      c.fillStyle = "#fbfaf6"; // şeffaf değil: koyu temada da okunur
      c.fillRect(0, 0, out.width, out.height);
      c.imageSmoothingQuality = "high";
      c.drawImage(canvas, 0, 0, out.width, out.height);
      return out.toDataURL("image/png");
    } catch (e) {
      return "";
    }
  }

  // mektubu admin paneli için sakla; doodle sığmazsa onsuz dene
  function store() {
    if (!D.content || !D.content.saveMessage) return true; // core yoksa gösterime devam
    lastDoodle = doodleData();
    const msg = {
      name: fields.name.value.trim().slice(0, 60),
      email: fields.email.value.trim().slice(0, 120),
      subject: subjectLabel().slice(0, 80),
      message: fields.message.value.trim().slice(0, 1000),
    };
    if (lastDoodle && D.content.saveMessage(Object.assign({ doodle: lastDoodle }, msg))) return true;
    lastDoodle = "";
    return D.content.saveMessage(msg);
  }

  function fillThanks() {
    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const tpl = T("contact.js.thanks", "Teşekkürler {name}! “{subject}” konulu mektubun kağıt uçakla yola çıktı. En kısa sürede {email} adresine dönüş yapacağım.");
    thanksMsg.textContent = "";
    // şablonu {name} çevresinden böl; ad <strong> içinde, hepsi textContent (XSS yok)
    const parts = tpl.replace("{subject}", subjectLabel()).replace("{email}", email).split("{name}");
    thanksMsg.append(parts[0] || "");
    if (parts.length > 1) {
      const strong = document.createElement("strong");
      strong.textContent = name;
      thanksMsg.append(strong, parts.slice(1).join(name));
    }
    if (lastDoodle) {
      thanksImg.src = lastDoodle;
      thanksDoodle.hidden = false;
    } else {
      thanksDoodle.hidden = true;
    }
  }

  document.addEventListener("doodle:lang", () => {
    if (thanks && !thanks.hidden) fillThanks();
  });

  function showThanks() {
    if (D.lenis) D.lenis.start();
    fillThanks();
    form.hidden = true;
    form.setAttribute("inert", "");
    thanks.hidden = false;
    if (D.ScrollTrigger) D.ScrollTrigger.refresh();

    const r = thanks.getBoundingClientRect();
    if (r.top < 80 || r.top > window.innerHeight * 0.6) smoothTo(thanks, 140);
    thanksTitle.focus({ preventScroll: true });

    if (!RM) {
      const tl = gsap.timeline();
      tl.fromTo(thanks, { opacity: 0, scale: 1.6, rotate: -14 }, { opacity: 1, scale: 1, rotate: -1.5, duration: 0.7, ease: "back.out(1.6)", clearProps: "transform,opacity,scale,rotate" })
        .fromTo($(".contact-thanks__stamp", thanks), { opacity: 0, scale: 2.4, rotate: -10 }, { opacity: 0.85, scale: 1, rotate: 12, duration: 0.45, ease: "back.out(2)" }, "-=0.15")
        .fromTo($$(".contact-thanks__title, .contact-thanks__msg, .contact-thanks__doodle:not([hidden]), .contact-thanks__again", thanks), { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "expo.out", clearProps: "transform,opacity" }, "-=0.4");
    }
    setSending(false);
  }

  function buildRoute(sx, sy) {
    const W = window.innerWidth;
    const H = window.innerHeight;
    const k = Math.min(W, 900);
    const up = Math.min(sy - 40, H * 0.42);
    return [
      "M", sx, sy,
      "C", sx - k * 0.32, sy + 30, sx - k * 0.38, sy - up, sx - k * 0.06, sy - up * 0.9,
      "C", sx + k * 0.18, sy - up * 0.85, sx + k * 0.2, sy - up * 0.2, sx + k * 0.02, sy - up * 0.3,
      "C", sx - k * 0.14, sy - up * 0.4, sx + k * 0.05, sy - H * 0.9, W + 160, -180,
    ].join(" ");
  }

  function flyAway() {
    const r = form.getBoundingClientRect();
    const vh = window.innerHeight;
    const top = Math.max(r.top, 70);
    const bottom = Math.min(r.bottom, vh);
    const cx = r.left + r.width / 2;
    const cy = bottom > top ? (top + bottom) / 2 : vh / 2;

    // katlanma merkezi: kağıdın görünen orta noktası
    gsap.set(form, { transformOrigin: cx - r.left + "px " + (cy - r.top) + "px" });

    // uçuş katmanı
    const layer = document.createElement("div");
    layer.className = "contact-flight";
    layer.setAttribute("aria-hidden", "true");
    const d = buildRoute(cx, cy);
    const svgNS = "http://www.w3.org/2000/svg";
    layer.innerHTML =
      '<svg class="contact-flight__route" width="100%" height="100%">' +
      '<defs><mask id="contactRouteMask" maskUnits="userSpaceOnUse" x="-500" y="-500" width="' + (window.innerWidth + 1000) + '" height="' + (vh + 1000) + '">' +
      '<path class="contact-flight__mask" d="' + d + '" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></mask></defs>' +
      '<path class="contact-flight__trail" d="' + d + '" mask="url(#contactRouteMask)"/>' +
      "</svg>" +
      '<div class="contact-flight__plane">' + PLANE_SVG + "</div>";
    document.body.appendChild(layer);
    const plane = $(".contact-flight__plane", layer);
    const maskPath = $(".contact-flight__mask", layer);
    const geo = document.createElementNS(svgNS, "path");
    geo.setAttribute("d", d);
    $("svg", layer).appendChild(geo);
    geo.style.display = "none";
    const len = geo.getTotalLength();
    gsap.set(plane, { x: cx, y: cy, scale: 0, opacity: 0 });

    const place = (p) => {
      const at = geo.getPointAtLength(p * len);
      const ahead = geo.getPointAtLength(Math.min(len, p * len + 2));
      const ang = (Math.atan2(ahead.y - at.y, ahead.x - at.x) * 180) / Math.PI;
      gsap.set(plane, { x: at.x, y: at.y, rotate: ang + 22 });
      maskPath.style.strokeDashoffset = String(1 - p);
    };

    const P0 = "polygon(0% 0%, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)";
    const P1 = "polygon(0% 22%, 50% 0%, 100% 22%, 100% 100%, 50% 100%, 0% 100%)";
    const P2 = "polygon(14% 46%, 50% 0%, 86% 46%, 74% 100%, 50% 92%, 26% 100%)";
    const P3 = "polygon(44% 62%, 50% 0%, 56% 62%, 54% 100%, 50% 90%, 46% 100%)";
    const prog = { p: 0 };

    const tl = gsap.timeline({
      onComplete: () => layer.remove(),
    });

    tl.set(form, { clipPath: P0 })
      .to(paperBody, { opacity: 0.25, duration: 0.35 }, 0)
      .to(crease, { opacity: 1, duration: 0.3 }, 0)
      .to(form, { scale: 0.94, rotate: -2, duration: 0.3, ease: "power2.out" }, 0)
      .to(form, { clipPath: P1, rotate: 1, duration: 0.42, ease: "power2.inOut" })
      .to(form, { clipPath: P2, scale: 0.7, rotate: 0, duration: 0.42, ease: "power2.inOut" })
      .to(paperBody, { opacity: 0, duration: 0.2 }, "<")
      .to(form, { clipPath: P3, scale: 0.28, duration: 0.38, ease: "power3.in" })
      .to(form, { opacity: 0, duration: 0.14 })
      .add(() => place(0))
      .to(plane, { scale: 1, opacity: 1, duration: 0.32, ease: "back.out(2.4)" }, "<")
      .addLabel("fly")
      .add(showThanks, "fly+=1.35")
      .to(prog, {
        p: 1,
        duration: 2.3,
        ease: "power1.in",
        onUpdate: () => place(prog.p),
      }, "fly")
      .to(layer, { opacity: 0, duration: 0.3 }, "fly+=2.05");
  }

  function send() {
    setSending(true);
    if (RM) {
      // animasyonsuz: kısa bir "gönderiliyor" anı, ardından teşekkür kartı
      setTimeout(showThanks, 250);
      return;
    }
    if (D.lenis) D.lenis.stop();
    try {
      flyAway();
    } catch (err) {
      showThanks();
    }
  }

  function resetForm() {
    form.reset();
    lastDoodle = "";
    if (statusEl) statusEl.textContent = "";
    touched.clear();
    Object.keys(fields).forEach((key) => {
      const input = fields[key];
      const wrap = wrapOf(input);
      wrap.classList.remove("is-valid", "is-invalid", "is-flip");
      $(".contact-field__error", wrap).textContent = "";
      input.removeAttribute("aria-invalid");
    });
    fields.message.style.height = "";
    autoWidth(fields.name);
    autoWidth(fields.email);
    updateSignature();
    updateCounter();
    clearCanvas();

    thanks.hidden = true;
    form.hidden = false;
    form.removeAttribute("inert");
    if (!RM) {
      gsap.set([form, paperBody, crease], { clearProps: "all" });
      gsap.fromTo(form, { opacity: 0, y: -60, rotate: 4, scale: 0.9 }, { opacity: 1, y: 0, rotate: 0, scale: 1, duration: 0.8, ease: "back.out(1.4)", clearProps: "transform,opacity" });
    }
    if (D.ScrollTrigger) D.ScrollTrigger.refresh();
    smoothTo(form, 120);
    setTimeout(() => fields.name.focus({ preventScroll: true }), RM ? 0 : 400);
  }

  if (againBtn) againBtn.addEventListener("click", resetForm);

  /* ---------------------------------------------------------
     5. E-POSTA KOPYALA
     --------------------------------------------------------- */
  const copyBtn = $("#contactCopy");
  const copyNote = $("#contactCopyNote");
  const copyLabel = copyBtn ? $(".contact-copy__label", copyBtn) : null;
  if (copyLabel) copyLabel.textContent = T("contact.js.copy", "kopyala");

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {
      /* file:// veya izin yok → eski yönteme düş */
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none;";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch (e) {
      return false;
    }
  }

  if (copyBtn) {
    let noteTimer = 0;
    const label = copyLabel;
    copyBtn.addEventListener("click", async () => {
      // admin panelinden değişmiş olabilir: ekrandaki (bağlı) adresi kopyala
      const txtEl = $("#contactEmailText");
      const ok = await copyText((txtEl ? txtEl.textContent : "").trim() || "ornek@mail.com");
      clearTimeout(noteTimer);
      if (ok) {
        copyNote.textContent = T("contact.js.copiedNote", "kopyalandı!");
        label.textContent = T("contact.js.copied", "kopyalandı");
      } else {
        copyNote.textContent = T("contact.js.copyFail", "kopyalanamadı, elle seç");
        const txt = $("#contactEmailText");
        try {
          const range = document.createRange();
          range.selectNodeContents(txt);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } catch (e) {}
      }
      if (!RM) gsap.fromTo(copyNote, { opacity: 0, scale: 0.4, rotate: -20 }, { opacity: 1, scale: 1, rotate: -6, duration: 0.5, ease: "back.out(2.5)" });
      noteTimer = setTimeout(() => {
        label.textContent = T("contact.js.copy", "kopyala");
        if (RM) copyNote.textContent = "";
        else gsap.to(copyNote, { opacity: 0, duration: 0.3, onComplete: () => (copyNote.textContent = "") });
      }, 2200);
    });
  }

  /* ---------------------------------------------------------
     6. SSS: post-it akordeon (katlanmış kağıt açılır)
     --------------------------------------------------------- */
  $$(".contact-note").forEach((det) => {
    const summary = $("summary", det);
    const body = $(".contact-note__a", det);
    if (!summary || !body) return;
    let busy = false;

    summary.addEventListener("click", (e) => {
      if (RM) return; // yerel davranış
      e.preventDefault();
      if (busy) return;
      busy = true;
      if (!det.open) {
        det.open = true;
        gsap.fromTo(
          body,
          { rotationX: -95, transformPerspective: 700, opacity: 0, y: -6 },
          { rotationX: 0, opacity: 1, y: 0, duration: 0.75, ease: "back.out(1.5)", onComplete: () => { busy = false; gsap.set(body, { clearProps: "all" }); } }
        );
        gsap.fromTo(det, { scale: 1 }, { scale: 1.02, yoyo: true, repeat: 1, duration: 0.18, clearProps: "scale" });
      } else {
        gsap.to(body, {
          rotationX: -95,
          transformPerspective: 700,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            det.open = false;
            gsap.set(body, { clearProps: "all" });
            busy = false;
          },
        });
      }
    });
  });

  /* ---------------------------------------------------------
     7. Hareket: başlangıç durumları (perde arkasında)
     --------------------------------------------------------- */
  const env = $(".contact-envelope");
  const hand = $(".contact-hand");

  if (!RM) {
    if (env) {
      D.prepDraw(env);
      gsap.set($$(".contact-envelope__flap-shape, .contact-envelope__body, .contact-envelope__paper, .contact-envelope__heart", env), { fillOpacity: 0 });
      gsap.set($(".contact-envelope__flap", env), { scaleY: -1, svgOrigin: "160 92", opacity: 0 });
      gsap.set($(".contact-envelope__letter", env), { y: 26 });
      gsap.set($(".contact-envelope__closed", env), { opacity: 1 });
      gsap.set($(".contact-envelope__seal", env), { opacity: 1, scale: 0, svgOrigin: "160 176" });
    }
    if (hand) D.prepDraw(hand);
    gsap.set(".contact-hero__plane-note, .contact-hero__arrow", { opacity: 0 });
    gsap.set(".contact-map__pin svg", { y: -160, opacity: 0 });
    gsap.set(".contact-map__pin-shadow", { scale: 0.2, opacity: 0 });
    gsap.set(".contact-map__ferry, .contact-map__gull, .contact-map__cap", { opacity: 0 });
    gsap.set(".contact-map__svg .cm-label", { opacity: 0 });
    gsap.set(".contact-paper__postmark", { opacity: 0, scale: 2, rotate: -40 });
    gsap.set(".contact-stamp__mark", { opacity: 0, scale: 2.2 });
  }

  /* ---------------------------------------------------------
     8. Perde kalkınca: hero + scroll sahneleri
     --------------------------------------------------------- */
  function onReady(Do) {
    if (RM) return;
    const ST = Do.ScrollTrigger;

    /* --- hero: zarf kendini çizer, kapak açılır, mektup çıkar --- */
    if (env) {
      const tl = gsap.timeline({ delay: 0.25 });
      tl.to($$(".contact-envelope__front path", env), { strokeDashoffset: 0, duration: 0.9, stagger: 0.12, ease: "power2.inOut" })
        .to($$(".contact-envelope__body", env), { fillOpacity: 1, duration: 0.4 }, "-=0.3")
        .to($(".contact-envelope__seal", env), { scale: 1, duration: 0.45, ease: "back.out(3)" }, "-=0.2")
        .set($$(".contact-envelope__flap path, .contact-envelope__letter path", env), { strokeDashoffset: 0 })
        .to($$(".contact-envelope__flap-shape, .contact-envelope__paper, .contact-envelope__heart", env), { fillOpacity: 1, duration: 0.01 })
        .to($(".contact-envelope__seal", env), { scale: 1.4, opacity: 0, duration: 0.3, ease: "power2.in" }, "+=0.15")
        .set($(".contact-envelope__closed", env), { opacity: 0 })
        .set($(".contact-envelope__flap", env), { opacity: 1 })
        .to($(".contact-envelope__flap", env), { scaleY: 1, duration: 0.6, ease: "back.out(1.6)" })
        .to($(".contact-envelope__letter", env), { y: -64, duration: 0.8, ease: "back.out(1.8)" }, "-=0.2")
        .to(".contact-hero__plane-note, .contact-hero__arrow", { opacity: 1, duration: 0.5, stagger: 0.15 }, "-=0.3")
        .add(() => {
          gsap.to($(".contact-envelope__letter", env), { y: -50, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
        });

      // kaydırınca zarf hafifçe döner, mektup yükselir
      gsap.to(env, {
        rotate: -8,
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: ".contact-hero", start: "top top", end: "bottom top", scrub: true },
      });
    }

    /* --- el: çizilir sonra sallanır --- */
    if (hand) {
      const shapes = $$("path", hand);
      gsap.to(shapes, { strokeDashoffset: 0, duration: 0.9, stagger: 0.2, delay: 0.6, ease: "power2.out" });
      const wave = () =>
        gsap.timeline()
          .to(hand, { rotate: 18, duration: 0.18, ease: "sine.inOut" })
          .to(hand, { rotate: -12, duration: 0.18, ease: "sine.inOut", yoyo: true, repeat: 3 })
          .to(hand, { rotate: 0, duration: 0.3, ease: "back.out(2)" });
      gsap.delayedCall(1.4, wave);
      setInterval(() => {
        if (!document.hidden) wave();
      }, 4200);
      const h1 = hand.closest("h1");
      if (h1) h1.addEventListener("pointerenter", wave);
    }

    /* --- mektup kağıdı zarftan kayarak gelir (scrub) --- */
    const slide = $(".contact-letter__slide");
    if (slide) {
      gsap.fromTo(
        slide,
        { y: 140, rotate: -5, scale: 0.92 },
        { y: 0, rotate: 0, scale: 1, ease: "none", scrollTrigger: { trigger: ".contact-letter__stage", start: "top bottom", end: "top 30%", scrub: 1 } }
      );
    }
    // pul damgası
    const postmark = $(".contact-paper__postmark");
    if (postmark) {
      gsap.to(postmark, {
        opacity: 0.75,
        scale: 1,
        rotate: -14,
        duration: 0.5,
        ease: "back.out(2.2)",
        scrollTrigger: { trigger: ".contact-paper", start: "top 55%", once: true },
      });
    }

    /* --- uçak postası şeridi --- */
    const track = $(".contact-airmail__track");
    if (track) {
      gsap.fromTo(track, { xPercent: 0 }, { xPercent: -30, ease: "none", scrollTrigger: { trigger: ".contact-channels", start: "top bottom", end: "bottom top", scrub: 0.6 } });
    }

    /* --- pul damgaları: pul düştükten sonra mühür vurulur --- */
    if (ST) {
      ST.batch(".contact-stamp__mark", {
        start: "top 85%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 0.6, scale: 1, duration: 0.4, stagger: 0.12, delay: 0.55, ease: "back.out(2.5)" }),
      });
    }

    /* --- harita: etiketler, pin, vapur, martılar --- */
    const fig = $(".contact-map__figure");
    if (fig && ST) {
      gsap.to(".contact-map__svg .cm-label", {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: { trigger: fig, start: "top 70%", end: "center 50%", scrub: 1 },
      });

      ST.create({
        trigger: fig,
        start: "top 45%",
        once: true,
        onEnter: () => {
          const pinSvg = $(".contact-map__pin svg");
          const shadow = $(".contact-map__pin-shadow");
          const tl = gsap.timeline();
          tl.to(pinSvg, { y: 0, opacity: 1, duration: 0.7, ease: "bounce.out" })
            .to(shadow, { scale: 1, opacity: 1, duration: 0.5 }, "<0.2")
            .to(pinSvg, { scaleY: 0.82, scaleX: 1.12, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.05")
            .to(".contact-map__cap", { opacity: 1, duration: 0.4 })
            .to(".contact-map__ferry, .contact-map__gull", { opacity: 1, duration: 0.6, stagger: 0.1 }, "<")
            .add(() => {
              gsap.to(pinSvg, { y: -14, duration: 0.5, ease: "power2.out", yoyo: true, repeat: -1, repeatDelay: 1.6 });
              gsap.to(shadow, { scale: 0.7, opacity: 0.6, duration: 0.5, ease: "power2.out", yoyo: true, repeat: -1, repeatDelay: 1.6 });
            });
        },
      });

      gsap.to(".contact-map__ferry", { y: -16, x: -10, rotate: -4, duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
      $$(".contact-map__gull").forEach((g, i) => {
        gsap.to(g, { x: 18 + i * 8, y: -10 - i * 4, duration: 2.2 + i * 0.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to(g, { scaleY: 0.6, duration: 0.35 + i * 0.05, ease: "sine.inOut", yoyo: true, repeat: -1, transformOrigin: "50% 70%" });
      });
    }
  }

  if (D.onReady) D.onReady(onReady);
})();
