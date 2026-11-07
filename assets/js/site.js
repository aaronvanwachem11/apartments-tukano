/* Apartments Tukano — small enhancements. The site works without this file. */
(function () {
  var WHATSAPP = '529831542010';
  var es = document.documentElement.lang === 'es';

  /* Dates: no past check-in, check-out after check-in */
  var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  var iso = today.toISOString().slice(0, 10);
  document.querySelectorAll('input[type="date"]').forEach(function (el) { el.min = iso; });
  document.querySelectorAll('[data-checkin]').forEach(function (ci) {
    var form = ci.form, co = form && form.querySelector('[data-checkout]');
    if (!co) return;
    ci.addEventListener('change', function () {
      if (!ci.value) return;
      var d = new Date(ci.value); d.setUTCDate(d.getUTCDate() + 1);
      var next = d.toISOString().slice(0, 10);
      co.min = next;
      if (!co.value || co.value < next) co.value = next;
    });
  });

  /* Availability bar: opens WhatsApp with the dates filled in.
     When Lodgify is live, point this form at the Lodgify booking page instead. */
  var avail = document.getElementById('availability');
  if (avail) {
    avail.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = avail.elements;
      var nice = function (v) {
        if (!v) return '';
        return new Date(v).toLocaleDateString(es ? 'es-MX' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
      };
      var ci = nice(f.checkin.value), co = nice(f.checkout.value), g = f.guests.value;
      var msg = es
        ? 'Hola, me interesa reservar en Apartments Tukano' + (ci ? ' del ' + ci : '') + (co ? ' al ' + co : '') + ' para ' + g + ' personas. ¿Tienen disponibilidad?'
        : 'Hi! I’d like to book Apartments Tukano' + (ci ? ' from ' + ci : '') + (co ? ' to ' + co : '') + ' for ' + g + ' guests. Do you have availability?';
      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }

  /* Gallery lightbox */
  var dlg = document.getElementById('lightbox');
  var items = Array.prototype.slice.call(document.querySelectorAll('.gallery button[data-full]'));
  if (dlg && items.length && typeof dlg.showModal === 'function') {
    var img = dlg.querySelector('img'), cap = dlg.querySelector('.lb-cap'), idx = 0;
    var show = function (i) {
      idx = (i + items.length) % items.length;
      var b = items[idx];
      img.src = b.getAttribute('data-full');
      img.alt = b.querySelector('img').alt;
      cap.textContent = (idx + 1) + ' / ' + items.length + ' — ' + img.alt;
    };
    items.forEach(function (b, i) { b.addEventListener('click', function () { show(i); dlg.showModal(); }); });
    var all = document.getElementById('view-all');
    if (all) all.addEventListener('click', function () { show(0); dlg.showModal(); });
    dlg.querySelector('.lb-close').addEventListener('click', function () { dlg.close(); });
    dlg.querySelector('.lb-prev').addEventListener('click', function () { show(idx - 1); });
    dlg.querySelector('.lb-next').addEventListener('click', function () { show(idx + 1); });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
    dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.classList.contains('lb-inner')) dlg.close(); });
    var x0 = null;
    dlg.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    dlg.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) show(idx + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  } else if (items.length) {
    /* Old browsers: open the photo itself */
    items.forEach(function (b) { b.addEventListener('click', function () { window.location = b.getAttribute('data-full'); }); });
  }
})();
