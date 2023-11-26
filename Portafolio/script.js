document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav a");
  const toggleButton = document.getElementById("toggle-button"); // Agrega un botón de alternancia en tu HTML

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    var currentTheme = toggleButton.innerHTML;

    if (currentTheme.includes("bi-sun")) {
      toggleButton.innerHTML = '<i class="bi bi-moon"></i>';
    } else {
      toggleButton.innerHTML = '<i class="bi bi-sun"></i>';
    }
    // Agrega más elementos que deben cambiar de estilo en el modo oscuro
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
