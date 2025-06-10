// Menu toggle
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
window.addEventListener("scroll", function () {
        const nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
    // Enable smooth scroll behavior for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Prevent default anchor behavior
    e.preventDefault();

    // Scroll to the target element smoothly
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});