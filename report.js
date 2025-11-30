// script.js — basic interactions and contact demo
document.addEventListener('DOMContentLoaded', () => {
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isHidden = getComputedStyle(nav).display === 'none';
      nav.style.display = isHidden ? 'flex' : 'none';
      navToggle.setAttribute('aria-expanded', String(isHidden));
    });
  }

  // contact form demo
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();
      if (!name || !email || !msg) {
        alert('Please fill all fields.');
        return;
      }
      // demo: replace with real backend/email integration
      alert('Thanks ' + name + '! Your message has been received (demo).');
      form.reset();
    });
  }
});

function resetForm() {
  const form = document.getElementById('contactForm');
  if (form) form.reset();
}
