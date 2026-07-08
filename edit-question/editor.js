document.addEventListener('DOMContentLoaded', function () {
  const search = document.getElementById('prerequisiteSearch');
  const optionLabels = Array.from(document.querySelectorAll('[data-prerequisite-options] label'));
  const selectedList = document.querySelector('[data-selected-prerequisites]');

  function renderSelected() {
    const selected = optionLabels.filter(function (label) { return label.querySelector('input').checked; });
    selectedList.innerHTML = '';
    if (!selected.length) {
      const empty = document.createElement('li');
      empty.className = 'empty-selection';
      empty.textContent = 'No prerequisites selected.';
      selectedList.appendChild(empty);
      return;
    }
    selected.forEach(function (label) {
      const item = document.createElement('li');
      item.textContent = label.querySelector('input').value;
      selectedList.appendChild(item);
    });
  }

  search.addEventListener('input', function () {
    const term = search.value.trim().toLowerCase();
    optionLabels.forEach(function (label) {
      label.hidden = term && !label.textContent.toLowerCase().includes(term);
    });
  });
  optionLabels.forEach(function (label) { label.querySelector('input').addEventListener('change', renderSelected); });
  renderSelected();
});
