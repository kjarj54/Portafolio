// Mobile menu functionality
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
let isOpen = false;

menuBtn?.addEventListener("click", () => {
  isOpen = !isOpen;
  if (mobileMenu) {
    if (isOpen) {
      // Opening animation
      mobileMenu.classList.remove("translate-x-full", "opacity-0");
      mobileMenu.classList.add("translate-x-0", "opacity-100");
    } else {
      // Closing animation
      mobileMenu.classList.remove("translate-x-0", "opacity-100");
      mobileMenu.classList.add("translate-x-full", "opacity-0");
    }
  }
});
