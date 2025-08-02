// Navigation functionality
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
let isOpen = false;

// Handle scroll effect on navbar
function handleScroll() {
  const scrolled = window.scrollY > 50;
  if (navbar) {
    if (scrolled) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-slate-900/95", "backdrop-blur-sm", "shadow-lg");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("bg-slate-900/95", "backdrop-blur-sm", "shadow-lg");
    }
  }
}

// Smooth scroll to section
function scrollToSection(href: string) {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  // Close mobile menu if open
  if (isOpen) {
    toggleMobileMenu();
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  isOpen = !isOpen;
  if (mobileMenu && menuIcon && closeIcon) {
    if (isOpen) {
      mobileMenu.classList.remove("hidden");
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  }
}

// Event listeners
window.addEventListener("scroll", handleScroll);

menuBtn?.addEventListener("click", toggleMobileMenu);

// Handle navigation clicks
document.querySelectorAll(".nav-link, .nav-link-mobile").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = (e.target as HTMLElement).getAttribute("data-href");
    if (href) {
      scrollToSection(href);
    }
  });
});

// Initialize scroll state
handleScroll();
