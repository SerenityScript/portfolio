const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

// Event-Listener
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js';

// WebGL-Hintergrund
const canvas = document.getElementById('webgl-canvas');
if (canvas) {
    const bg = Spheres2Background(canvas, {
        count: 50,
        colors: [0x94FFD8, 0xFF7ED4, 0xF57D1F],
        minSize: 0.5,
        maxSize: 1,
    });

    // Animation pausieren/fortsetzen bei Klick außerhalb von .navLink
    document.body.addEventListener('click', (ev) => {
        if (!ev.target.closest('.navLink')) {
            bg.togglePause();
        }
    });
}

// Change Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "light";

  // Theme anwenden
  applyTheme(savedTheme);

  // Initialen Zustand des Toggles setzen
  toggle.checked = savedTheme === "dark";

  // Event-Listener für Änderungen
  toggle.addEventListener("change", () => {
      const newTheme = toggle.checked ? "dark" : "light";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme); // Speichern
  });
});

function applyTheme(theme) {
  if (theme === "dark") {
      document.body.classList.add("dark-mode");
  } else {
      document.body.classList.remove("dark-mode");
  }
}

// Swiper
const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  speed: 600,
  preventClicks: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 900,
    modifier: 1,
    slideShadows: true
  },
  on: {
  click(event) {
      swiper.slideTo(this.clickedIndex)
    }
  },
  pagination: {
    el: '.swiper-pagination',
  }
});
