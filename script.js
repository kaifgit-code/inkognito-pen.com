// ===== Mobile menu toggle =====
const hamburger = document.getElementById('hamburger');
const tabs = document.getElementById('tabs');

hamburger.addEventListener('click', () => {
  tabs.classList.toggle('open');
});

// close mobile menu when a tab is clicked
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.classList.remove('open');
  });
});

// ===== Active tab highlight on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.tab');

function setActiveTab() {
  let current = 'home';
  const scrollPos = window.scrollY + 120;

  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('tab--active', link.dataset.tab === current);
  });
}
window.addEventListener('scroll', setActiveTab);
setActiveTab();

// ===== Buy Now -> toast feedback =====
const toast = document.getElementById('toast');
let toastTimer;

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const name = card ? card.querySelector('.card__title').textContent : 'Item';
    toast.textContent = `${name} added to cart 🕶️`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  });
});
