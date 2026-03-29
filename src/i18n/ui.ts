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
    "site.description": "Desarrollador web full-stack especializado en...",
    // Hero
    "hero.greeting": "Hola, mi nombre es Kevin Arauz",
    "hero.name": "Kevin Arauz",
    "hero.title": "Construyo experiencias digitales",
    "hero.description":
      "Soy un desarrollador full stack especializado en crear experiencias web excepcionales. Actualmente enfocado en construir productos accesibles y centrados en el usuario en",
    "hero.company": "Mi Empresa",
    "hero.projects": "Ver mis proyectos",
    "hero.contact": "Contáctame",
    "hero.scroll": "scroll",
    // Páginas
    "home.hero": "Bienvenido a mi portafolio",
    "blog.readMore": "Leer más",
    "blog.publishedOn": "Publicado el",
    "about.title": "Sobre mí",
    "about.paragraph1": "Hola! Mi nombre es Kevin Arauz",
    "about.paragraph1Name": "Kevin Arauz",
    "about.paragraph1Rest":
      "y disfruto creando cosas que viven en internet. Mi interés en el desarrollo web comenzó en 2018 cuando decidí probar a crear temas personalizados para WordPress; resulta que hackear juntos un tema personalizado me enseñó mucho sobre HTML y CSS!",
    "about.paragraph2":
      "Avanzando hasta hoy, he tenido el privilegio de trabajar en",
    "about.company1": "una agencia digital",
    "about.company2": "una startup",
    "about.company3": "una gran corporación",
    "about.paragraph2Rest":
      "Mi enfoque principal en estos días es construir productos accesibles e inclusivos y experiencias digitales para una variedad de clientes.",
    "about.techTitle":
      "Aquí hay algunas tecnologías con las que he estado trabajando recientemente:",
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
    "site.description": "Full-stack web developer specialized in...",
    // Hero
    "hero.greeting": "Hi, my name is Kevin Arauz",
    "hero.name": "Kevin Arauz",
    "hero.title": "I build digital experiences",
    "hero.description":
      "I'm a full stack developer specialized in creating exceptional web experiences. Currently focused on building accessible, user-centered products at",
    "hero.company": "My Company",
    "hero.projects": "View my projects",
    "hero.contact": "Contact me",
    "hero.scroll": "scroll",
    // Pages
    "home.hero": "Welcome to my portfolio",
    "blog.readMore": "Read more",
    "blog.publishedOn": "Published on",
    "about.title": "About me",
    "about.paragraph1": "Hi! My name is Kevin Arauz",
    "about.paragraph1Name": "Kevin Arauz",
    "about.paragraph1Rest":
      "and I enjoy creating things that live on the internet. My interest in web development started in 2020 when I decided to try building custom WordPress themes; turns out hacking together a custom theme taught me a lot about HTML and CSS!",
    "about.paragraph2":
      "Fast-forward to today, I have had the privilege of working at",
    "about.company1": "a digital agency",
    "about.company2": "a startup",
    "about.company3": "a large corporation",
    "about.paragraph2Rest":
      "My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.",
    "about.techTitle":
      "Here are a few technologies I have been working with recently:",
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
