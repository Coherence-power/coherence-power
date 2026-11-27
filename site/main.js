/* Coherence Power landing page. Works without JS: the demo buttons fall back to email. */
(function () {
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  var dialog = document.getElementById('demo');
  var form = document.querySelector('[data-demo-form]');
  // Only take over the buttons when the dialog is supported and the form ID was injected at deploy.
  if (!dialog || typeof dialog.showModal !== 'function' || !form || !window.fetch ||
      form.action.indexOf('YOUR_FORM_ID') !== -1) return;

  var status = form.querySelector('.form-status');

  document.querySelectorAll('[data-demo]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      status.textContent = '';
      dialog.showModal();
    });
  });

  dialog.querySelector('[data-demo-close]').addEventListener('click', function () { dialog.close(); });
  // Click on the backdrop closes the dialog
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;
    status.textContent = 'Sending…';
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('Bad response');
        form.reset();
        status.textContent = "Thanks. We'll email you within two business days.";
      })
      .catch(function () {
        status.textContent = 'That didn\'t send. Email us at info@coherencepower.com instead.';
      })
      .finally(function () { submit.disabled = false; });
  });
})();
