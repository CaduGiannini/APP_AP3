
function showTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(c => c.style.display = 'none');

  const tabs = document.querySelectorAll('.tab-button');
  tabs.forEach(t => t.classList.remove('active'));

  document.getElementById(tabId).style.display = 'block';
  event.target.classList.add('active');
}
