
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");  // hamburger button
  const menu = document.getElementById("menu");         // mobile menu

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden"); // show/hide menu
    });
  } else {
    console.error("Menu button or menu container not found!");
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
