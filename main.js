/* Coherence Power — small progressive enhancements. Site works without JS. */
(function () {
  // Theme toggle (dark is the default; choice is remembered per visitor)
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  var syncThemeUI = function () {
    var light = root.getAttribute('data-theme') === 'light';
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    });
    if (meta) meta.setAttribute('content', light ? '#f6f7f7' : '#1b1c1d');
  };
  document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('cp-theme', next); } catch (e) {}
      syncThemeUI();
    });
  });
  syncThemeUI();

  // Sticky header border once scrolled
  var header = document.querySelector('.site-header');
  var onScroll = function () { header && header.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Footer year
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  // Contact form: submit via fetch (Formspree-compatible), fall back to normal POST
  var form = document.querySelector('[data-contact-form]');
  if (form && window.fetch && form.action.indexOf('YOUR_FORM_ID') === -1) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.textContent = 'Sending…';
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error('Bad response');
          form.reset();
          status.textContent = "Thanks. We'll be in touch within two business days.";
        })
        .catch(function () {
          status.textContent = 'Something went wrong. Please email info@coherencepower.com.';
        })
        .finally(function () { btn.disabled = false; });
    });
  }
})();
