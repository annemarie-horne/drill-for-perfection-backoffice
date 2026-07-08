document.addEventListener('DOMContentLoaded', function () {
  const views = Array.from(document.querySelectorAll('[data-admin-view]'));
  const links = Array.from(document.querySelectorAll('[data-view-link]'));

  function showView(name) {
    const validName = views.some(function (view) { return view.dataset.adminView === name; }) ? name : 'tests';
    views.forEach(function (view) { view.classList.toggle('active', view.dataset.adminView === validName); });
    links.forEach(function (link) { link.classList.toggle('active', link.dataset.viewLink === validName); });
    if (window.location.hash !== '#' + validName) history.replaceState(null, '', '#' + validName);
    window.scrollTo(0, 0);
  }

  links.forEach(function (link) {
    link.addEventListener('click', function () { showView(link.dataset.viewLink); });
  });

  document.querySelectorAll('[data-test-status]').forEach(function (tab) {
    tab.addEventListener('click', function () {
      const status = tab.dataset.testStatus;
      document.querySelectorAll('[data-test-status]').forEach(function (item) { item.classList.toggle('active', item === tab); });
      const rows = Array.from(document.querySelectorAll('[data-record-status]'));
      let visible = 0;
      rows.forEach(function (row) {
        const show = status === 'all' || row.dataset.recordStatus === status;
        row.hidden = !show;
        if (show) visible += 1;
      });
      document.querySelector('[data-visible-count]').textContent = visible;
    });
  });

  document.querySelectorAll('[data-open-modal]').forEach(function (control) {
    control.addEventListener('click', function () {
      const modal = document.querySelector('[data-modal="' + control.dataset.openModal + '"]');
      if (!modal) return;
      modal.hidden = false;
      document.body.classList.add('modal-open');
      const firstInput = modal.querySelector('input, select, textarea');
      if (firstInput) firstInput.focus();
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(function (control) {
    control.addEventListener('click', function () {
      const modal = control.closest('[data-modal]');
      if (modal) modal.hidden = true;
      document.body.classList.remove('modal-open');
    });
  });

  document.querySelectorAll('[data-filter-list]').forEach(function (search) {
    search.addEventListener('input', function () {
      const list = document.querySelector('[data-search-list="' + search.dataset.filterList + '"]');
      if (!list) return;
      const term = search.value.trim().toLowerCase();
      list.querySelectorAll('label').forEach(function (item) {
        item.hidden = term && !item.textContent.toLowerCase().includes(term);
      });
    });
  });

  showView(window.location.hash.replace('#', '') || 'tests');
});
