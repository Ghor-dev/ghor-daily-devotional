document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('button[aria-controls="mobile-menu"]');
  const menu = document.getElementById('mobile-menu');
  if (hamburger && menu) {
    menu.classList.add('hidden');
    hamburger.addEventListener('click', function() {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('hidden');
    });
  }

  // Slideshow functionality
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? "1" : "0";
    });
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  if (slides.length > 0) {
    showSlide(currentIndex);
    setInterval(nextSlide, 4000); // change every 4 seconds
  }

  // Go Home button functionality
  const goHomeBtn = document.getElementById('go-home-btn');
  if (goHomeBtn) {
    goHomeBtn.addEventListener('click', function() {
      window.location.href = "index.html";
    });
  }
});