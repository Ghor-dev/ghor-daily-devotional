

document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('button[aria-controls="mobile-menu"]');
  const menu = document.getElementById('mobile-menu');

  // Make sure only the mobile dropdown uses id="mobile-menu"
  // Desktop menu should use a different id or class

  if (hamburger && menu) {
    menu.classList.add('hidden');
    hamburger.addEventListener('click', function() {
      // Toggle aria-expanded attribute
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', (!expanded).toString());
      // Toggle menu visibility
      menu.classList.toggle('hidden');
    });
  }
// Go Home button functionality
  const goHomeBtn = document.getElementById('go-home-btn');
  if (goHomeBtn) {
    goHomeBtn.addEventListener('click', function() {
      window.location.href = "index.html";
    });
  }
});
