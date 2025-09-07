document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle mobile menu on button click
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex"); // ensures menu displays properly
  });

  // Close mobile menu when clicking a link
  const links = mobileMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Start with mobile menu hidden
  mobileMenu.classList.add("hidden");

  // Toggle menu on button click
  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";

    // Toggle aria-expanded for accessibility
    menuBtn.setAttribute("aria-expanded", String(!isExpanded));

    // Show/hide the menu
    mobileMenu.classList.toggle("hidden");
  });

  // Close menu when a link is clicked (mobile UX best practice)
  const links = mobileMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
});

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








const devotionalImages = document.querySelectorAll("./livingstreams .png");
const overlay = document.getElementById("wave-overlay");

overlay.classList.add("clip-circle-0"); // start hidden

devotionalImages.forEach(img => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    const targetUrl = img.dataset.href;

    // Expand wave
    overlay.classList.remove("clip-circle-0");
    overlay.classList.add("clip-circle-full");

    // Navigate after animation
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 700); // match duration-700
  });
});


