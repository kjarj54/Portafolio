export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";
export const showDefaultLang = false; // /es/about → /about (idioma por defecto oculto en URL)

export const ui = {
  es: {

    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.cv": "Currículum",
    "nav.closeMenu": "Cerrar menu",
    "nav.blog": "Blog",
    // SEO
    "site.title": "Portafolio & Blog",
    "site.description": "Desarrollador full-stack",
    // Hero
    "hero.greeting": "Hola, mi nombre es",
    "hero.name": "Kevin Arauz",
    "hero.title": "Construyo experiencias digitales",
    "hero.description":
      "Soy desarrollador full stack, tengo conocimientos de backend y frontend, gracias a mi conocimiento y experiencia, puedo desarrollar productos a la medida segun el cliente lo requiera. Actualmente me enfoco en construir productos accesibles, centrados en el usuario",
    "hero.company": "Proyecto Freelance",
    "hero.projects": "Ver mis proyectos",
    "hero.contact": "Contáctame",
    "hero.scroll": "scroll",
    // Páginas
    "blog.readMore": "Leer más",
    "blog.publishedOn": "Publicado el",

    // About
    "about.title": "Sobre mí",
    "about.paragraph1": "Hola! Mi nombre es",
    "about.paragraph1Name": "Kevin Arauz",
    "about.paragraph1Rest":
      "desde pequeño e tenido una afinidad por la tecnologia, esta creció con forme crecia y eventualmente me llevó a la eleccion de mi carrera profesional, ingeniería en sistemas, donde comencé a programar todo tipo de proyectos, esto comenzando en 2020 con los inicios de mi carrera, desde entonces he optenido conocimientos en distintas areas del desarrollo de software, desde el desarrollo de aplicaciones web, hasta el desarrollo de aplicaciones móviles, pasando por el desarrollo de APIs y bases de datos.",
    "about.paragraph2":
      "Avanzando hasta hoy, he tenido el privilegio de trabajar en",
    "about.company1": "GBSYS",
    "about.paragraph2Rest":
      "Mi enfoque principal en estos días es construir productos accesibles e inclusivos y experiencias digitales para una variedad de clientes.",
    "about.techTitle":
      "Aquí hay algunas tecnologías con las que he estado trabajando recientemente:",
    "about.techGroup.languages": "Lenguajes",
    "about.techGroup.frontend": "Frameworks Frontend",
    "about.techGroup.backend": "Frameworks Backend",
    "about.techGroup.databases": "Motores de Base de Datos",
    // Experience
    "experience.title": "Experiencia",
    "experience.company.current": "Mi Empresa Actual",
    "experience.role.current": "Senior Full Stack Developer",
    "experience.period.current": "2023 — Presente",
    "experience.item1":
      "Desarrollo y mantenimiento de componentes críticos utilizados para construir el frontend de la plataforma, en todo el producto.",
    "experience.item2":
      "Trabajo en estrecha colaboración con equipos multifuncionales, incluyendo desarrolladores, diseñadores y gerentes de producto.",
    "experience.item3":
      "Implementación de mejores prácticas de accesibilidad web para ofrecer una experiencia de usuario inclusiva.",
    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.featuredLabel": "Proyecto Destacado",
    "projects.otherTitle": "Otros Proyectos",
    "projects.archiveLink": "ver archivo",
    "projects.aria.github": "Ver código en GitHub",
    "projects.aria.live": "Ver proyecto en vivo",
    "projects.featured.1.title": "Plataforma E-commerce",
    "projects.featured.1.description":
      "Una plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos con Stripe, gestión de inventario y panel de administración.",
    "projects.featured.2.title": "App de Gestión de Tareas",
    "projects.featured.2.description":
      "Aplicación web para gestión de proyectos con funcionalidades de drag-and-drop, colaboración en tiempo real, y notificaciones push.",
    "projects.featured.3.title": "Dashboard Analytics",
    "projects.featured.3.description":
      "Panel de control interactivo para visualización de datos con gráficos dinámicos, filtros avanzados y exportación de reportes.",
    "projects.other.1.title": "CLI Weather App",
    "projects.other.1.description":
      "Herramienta de línea de comandos para obtener información meteorológica de cualquier ciudad del mundo.",
    "projects.other.2.title": "Portfolio v1",
    "projects.other.2.description":
      "Primera versión de mi portafolio personal construido con HTML, CSS y JavaScript vanilla.",
    "projects.other.3.title": "Blog Personal",
    "projects.other.3.description":
      "Blog personal con soporte para markdown, sistema de comentarios y modo oscuro.",
    "projects.other.4.title": "Chrome Extension",
    "projects.other.4.description":
      "Extensión de Chrome para mejorar la productividad bloqueando sitios distractores.",
    "projects.other.5.title": "API REST",
    "projects.other.5.description":
      "API RESTful completa con autenticación JWT, rate limiting y documentación Swagger.",
    "projects.other.6.title": "Mobile App",
    "projects.other.6.description":
      "Aplicación móvil de seguimiento de hábitos con recordatorios y estadísticas.",
    // Contact
    "contact.kicker": "04. ¿Qué sigue?",
    "contact.title": "Ponte en Contacto",
    "contact.description":
      "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible para responderte!",
    "contact.cta": "Escríbeme",
    // Footer
    "footer.designedBy": "Diseñado y Construido por Kevin Arauz",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.cv": "Curriculum",
    "nav.closeMenu": "Close menu",
    "nav.blog": "Blog",
    // SEO
    "site.title": "Portfolio & Blog",
    "site.description": "Full-stack developer",
    // Hero
    "hero.greeting": "Hi, my name is",
    "hero.name": "Kevin Arauz",
    "hero.title": "I build digital experiences",
    "hero.description":
      "I'm a full stack developer, I have knowledge of backend and frontend, fortunately to my knowledge and experience, I can develop custom products according to the client's needs. Currently I focus on building accessible, user-centered products and digital experiences",
    "hero.company": "Freelance Project",
    "hero.projects": "View my projects",
    "hero.contact": "Contact me",
    "hero.scroll": "scroll",
    // Pages
    "home.hero": "Welcome to my portfolio",
    "blog.readMore": "Read more",
    "blog.publishedOn": "Published on",

    // About
    "about.title": "About me",
    "about.paragraph1": "Hi! My name is",
    "about.paragraph1Name": "Kevin Arauz",
    "about.paragraph1Rest":
      "when I was a kid I had an affinity for technology, it grew as I grew and eventually led me to the choice of my professional career, systems engineering, where I started programming all kinds of projects, this starting in 2020 with the beginnings of my career, since then I have obtained knowledge in different areas of software development, from web application development, to mobile application development, passing through API development and databases.",
    "about.paragraph2":
      "Fast-forward to today, I have had the privilege of working at",
    "about.company1": "a digital agency",
    "about.company2": "a startup",
    "about.company3": "a large corporation",
    "about.paragraph2Rest":
      "My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.",
    "about.techTitle":
      "Here are a few technologies I have been working with recently:",
    "about.techGroup.languages": "Languages",
    "about.techGroup.frontend": "Frontend Frameworks",
    "about.techGroup.backend": "Backend Frameworks",
    "about.techGroup.databases": "Database Engines",
    // Experience
    "experience.title": "Experience",
    "experience.company.current": "My Current Company",
    "experience.role.current": "Senior Full Stack Developer",
    "experience.period.current": "2023 — Present",
    "experience.item1":
      "Development and maintenance of critical components used to build the platform frontend across the product.",
    "experience.item2":
      "Close collaboration with cross-functional teams, including developers, designers, and product managers.",
    "experience.item3":
      "Implementation of web accessibility best practices to deliver an inclusive user experience.",
    // Projects
    "projects.title": "Featured Projects",
    "projects.featuredLabel": "Featured Project",
    "projects.otherTitle": "Other Projects",
    "projects.archiveLink": "view archive",
    "projects.aria.github": "View code on GitHub",
    "projects.aria.live": "View live project",
    "projects.featured.1.title": "E-commerce Platform",
    "projects.featured.1.description":
      "A complete e-commerce platform with shopping cart, Stripe payment processing, inventory management, and an admin dashboard.",
    "projects.featured.2.title": "Task Management App",
    "projects.featured.2.description":
      "Web application for project management with drag-and-drop features, real-time collaboration, and push notifications.",
    "projects.featured.3.title": "Analytics Dashboard",
    "projects.featured.3.description":
      "Interactive dashboard for data visualization with dynamic charts, advanced filters, and report export.",
    "projects.other.1.title": "CLI Weather App",
    "projects.other.1.description":
      "Command-line tool to get weather information for any city in the world.",
    "projects.other.2.title": "Portfolio v1",
    "projects.other.2.description":
      "First version of my personal portfolio built with HTML, CSS, and vanilla JavaScript.",
    "projects.other.3.title": "Personal Blog",
    "projects.other.3.description":
      "Personal blog with markdown support, comment system, and dark mode.",
    "projects.other.4.title": "Chrome Extension",
    "projects.other.4.description":
      "Chrome extension to improve productivity by blocking distracting websites.",
    "projects.other.5.title": "REST API",
    "projects.other.5.description":
      "Complete RESTful API with JWT authentication, rate limiting, and Swagger documentation.",
    "projects.other.6.title": "Mobile App",
    "projects.other.6.description":
      "Habit tracking mobile app with reminders and statistics.",
    // Contact
    "contact.kicker": "04. What's next?",
    "contact.title": "Get In Touch",
    "contact.description":
      "I am currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I will do my best to get back to you!",
    "contact.cta": "Write me",
    // Footer
    "footer.designedBy": "Designed and Built by Kevin Arauz",
  },
} as const;

// Rutas traducidas: la URL /about en ES → /about, en EN → /about (mismo nombre aquí)
// Si quisieras rutas distintas: es: { 'about': 'sobre-mi' }
export const routes = {
  en: {
    "sobre-mi": "about",
    blog: "blog",
  },
  es: {
    about: "sobre-mi",
  },
} as const;
