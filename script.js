document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav a");
  const toggleButton = document.getElementById("toggle-button"); // Agrega un botón de alternancia en tu HTML
  document.getElementById("footer").classList.add("hidden");

  async function getGitHubRepos() {
    try {
      const response = await fetch(
        "https://api.github.com/users/kjarj54/repos"
      );
      const repos = await response.json();
      return repos;
    } catch (error) {
      console.error("Error fetching GitHub repos:", error);
      return [];
    }
  }

  async function renderGitHubRepos() {
    const proejctsContainer = document.querySelector(".repos-container");

    const repos = await getGitHubRepos();

    proejctsContainer.innerHTML = "";

    repos.forEach((repo) => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");

      const projectTitle = document.createElement("h2");
      projectTitle.textContent = repo.name;

      const projectDescription = document.createElement("p");
      projectDescription.textContent =
        repo.description || "No description provided.";

      const projectIconContainer = document.createElement("div");
      projectIconContainer.classList.add("icons-container");

      const githubLink = document.createElement("a");
      githubLink.href = repo.html_url;
      githubLink.target = "_blank";
      const githubIcon = document.createElement("i");
      githubIcon.classList.add("devicon-github-original");
      githubLink.appendChild(githubIcon);

      projectIconContainer.appendChild(githubLink);
      projectItem.appendChild(projectTitle);
      projectItem.appendChild(projectDescription);
      projectItem.appendChild(projectIconContainer);

      proejctsContainer.appendChild(projectItem);
    });
  }

  renderGitHubRepos();

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

  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const backToTopButton = document.getElementById("back-to-top-button");

    if (currentScrollTop < lastScrollTop) {
      document.getElementById("footer").classList.add("hidden");
      backToTopButton.style.display = "none";
    } else {
      document.getElementById("footer").classList.remove("hidden");
      backToTopButton.style.display = "block";
    }

    lastScrollTop = currentScrollTop;
  });

  const backToTop = document.getElementById("back-to-top-button");
  backToTop.addEventListener("click", () => {
    e.preventDefault();
    document.body.scrollIntoView({ block: "smooth", behavior: "start" });
  });
});
