/* ================= TYPING EFFECT ================= */
const text = "Frontend Developer";
let i = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 90);
  }
}

typeEffect();

/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

/* ================= ACTIVE NAV ================= */
function activateNav() {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 160) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

/* ================= EVENTS ================= */
window.addEventListener("scroll", () => {
  revealOnScroll();
  activateNav();
});

/* Trigger once on load */
revealOnScroll();
activateNav();

