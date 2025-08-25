document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('button[aria-controls="mobile-menu"]');
  const menu = document.getElementById('mobile-menu');

  if (!hamburger || !menu) {
    console.error('Hamburger button or menu not found');
    return;
  }

  menu.classList.add('hidden');

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('hidden');
  });
});