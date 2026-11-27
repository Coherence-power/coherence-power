/* Coherence Power — small progressive enhancements. Site works without JS. */
(function () {
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
