/* =========================================================
   Mustafa Safaa — CV site behaviour
   Four small jobs: theme, language, scroll state, lightbox.
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.remove('no-js');

  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }
  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ---------- 1. Theme ---------- */
  var themeBtn  = document.getElementById('theme');
  var moon      = document.querySelector('.ic-moon');
  var sun       = document.querySelector('.ic-sun');
  var metaTheme = document.querySelector('meta[name="theme-color"]');

  function paintTheme(mode) {
    root.setAttribute('data-theme', mode);
    if (moon && sun) {
      moon.style.display = mode === 'dark' ? '' : 'none';
      sun.style.display  = mode === 'dark' ? 'none' : '';
    }
    if (metaTheme) {
      metaTheme.setAttribute('content', mode === 'dark' ? '#070C1A' : '#D7DFEF');
    }
    store('cv-theme', mode);
  }

  var storedTheme = read('cv-theme');
  if (storedTheme !== 'dark' && storedTheme !== 'light') {
    storedTheme = (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
  }
  paintTheme(storedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      paintTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---------- 2. Language ---------- */
  var langBtn  = document.getElementById('lang');
  var dockNav  = document.getElementById('dock');
  var metaDesc = document.querySelector('meta[name="description"]');
  var lightbox = document.getElementById('lightbox');
  var lbCloseBtn = document.getElementById('lbClose');

  var copy = {
    ar: {
      nav: ['نبذة', 'المهارات', 'الأعمال', 'المسار', 'تواصل'],
      title: 'مصطفى صفاء عبد الصاحب — السيرة الذاتية',
      desc: 'مصطفى صفاء عبد الصاحب — طالب هندسة برمجيات في جامعة واسط، مطوّر ويب ومصوّر فوتوغرافي.',
      navLabel: 'التنقل',
      themeLabel: 'تبديل المظهر',
      langLabel: 'Switch to English',
      langText: 'EN',
      dialogLabel: 'الشهادة',
      closeLabel: 'إغلاق'
    },
    en: {
      nav: ['About', 'Skills', 'Work', 'Path', 'Contact'],
      title: 'Mustafa Safaa AbdulAlsahib — Curriculum Vitae',
      desc: 'Mustafa Safaa AbdulAlsahib — software engineering student at the University of Wasit, web developer and photographer.',
      navLabel: 'Navigation',
      themeLabel: 'Toggle theme',
      langLabel: 'التبديل إلى العربية',
      langText: 'ع',
      dialogLabel: 'Certificate',
      closeLabel: 'Close'
    }
  };

  function paintLang(lang) {
    var isAr = lang !== 'en';
    var t = isAr ? copy.ar : copy.en;

    root.setAttribute('lang', isAr ? 'ar' : 'en');
    root.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    Array.prototype.forEach.call(
      document.querySelectorAll('[data-ar][data-en]'),
      function (el) {
        el.innerHTML = el.getAttribute(isAr ? 'data-ar' : 'data-en');
      }
    );

    Array.prototype.forEach.call(
      document.querySelectorAll('[data-ar-html]'),
      function (el) { el.hidden = !isAr; }
    );
    Array.prototype.forEach.call(
      document.querySelectorAll('[data-en-html]'),
      function (el) { el.hidden = isAr; }
    );

    Array.prototype.forEach.call(
      document.querySelectorAll('[data-nav]'),
      function (a, i) { a.textContent = t.nav[i] || a.textContent; }
    );

    document.title = t.title;
    if (metaDesc) metaDesc.setAttribute('content', t.desc);
    if (dockNav) dockNav.setAttribute('aria-label', t.navLabel);
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', t.themeLabel);
      themeBtn.setAttribute('title', t.themeLabel);
    }
    if (lightbox) lightbox.setAttribute('aria-label', t.dialogLabel);
    if (lbCloseBtn) lbCloseBtn.setAttribute('aria-label', t.closeLabel);

    if (langBtn) {
      langBtn.textContent = t.langText;
      langBtn.setAttribute('aria-label', t.langLabel);
      langBtn.setAttribute('title', isAr ? 'English' : 'العربية');
    }

    store('cv-lang', isAr ? 'ar' : 'en');
  }

  paintLang(read('cv-lang') === 'en' ? 'en' : 'ar');

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      paintLang(root.getAttribute('lang') === 'ar' ? 'en' : 'ar');
    });
  }

  /* ---------- 3. Reveal + scroll spy ---------- */
  var reduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var sections = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    sections.forEach(function (s) { io.observe(s); });
  } else {
    sections.forEach(function (s) { s.classList.add('is-in'); });
  }

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
  var targets = navLinks
    .map(function (a) {
      var href = a.getAttribute('href') || '';
      return href.charAt(0) === '#' && href.length > 1
        ? document.getElementById(href.slice(1))
        : null;
    })
    .filter(Boolean);

  if ('IntersectionObserver' in window && targets.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.setAttribute('aria-current',
            a.getAttribute('href') === '#' + entry.target.id ? 'true' : 'false');
        });
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    targets.forEach(function (t) { spy.observe(t); });
  }

  /* ---------- 4. Certificate lightbox ---------- */
  var openers = [document.getElementById('certImg'), document.getElementById('certZoom')];
  var lastFocused = null;

  function isOpen() {
    return !!lightbox && lightbox.getAttribute('data-open') === 'true';
  }

  function openLb() {
    if (!lightbox || isOpen()) return;
    lastFocused = document.activeElement;

    var gap = window.innerWidth - document.documentElement.clientWidth;
    if (gap > 0) document.body.style.paddingInlineEnd = gap + 'px';
    document.body.style.overflow = 'hidden';

    lightbox.setAttribute('data-open', 'true');
    lightbox.removeAttribute('aria-hidden');
    if (lbCloseBtn) lbCloseBtn.focus();
  }

  function closeLb() {
    if (!lightbox || !isOpen()) return;

    lightbox.setAttribute('data-open', 'false');
    lightbox.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';
    document.body.style.paddingInlineEnd = '';

    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    lastFocused = null;
  }

  openers.forEach(function (el) {
    if (el) el.addEventListener('click', openLb);
  });
  if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLb);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLb();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeLb();
    } else if (e.key === 'Tab') {
      /* the dialog holds one control, so focus stays on it */
      e.preventDefault();
      if (lbCloseBtn) lbCloseBtn.focus();
    }
  });
})();
