
export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';
export const showDefaultLang = false; // /es/about → /about (idioma por defecto oculto en URL)

export const ui = {
  es: {
    'nav.home':    'Inicio',
    'nav.about':   'Sobre mí',
    'nav.blog':    'Blog',
    // SEO
    'site.title':        'Tu Nombre | Portafolio',
    'site.description':  'Desarrollador web full-stack especializado en...',
    // Páginas
    'home.hero':         'Bienvenido a mi portafolio',
    'blog.readMore':     'Leer más',
    'blog.publishedOn':  'Publicado el',
    'about.title':       'Sobre mí',
  },
  en: {
    'nav.home':    'Home',
    'nav.about':   'About',
    'nav.blog':    'Blog',
    // SEO
    'site.title':        'Your Name | Portfolio',
    'site.description':  'Full-stack web developer specialized in...',
    // Pages
    'home.hero':         'Welcome to my portfolio',
    'blog.readMore':     'Read more',
    'blog.publishedOn':  'Published on',
    'about.title':       'About me',
  },
} as const;

// Rutas traducidas: la URL /about en ES → /about, en EN → /about (mismo nombre aquí)
// Si quisieras rutas distintas: es: { 'about': 'sobre-mi' }
export const routes = {
  en: {
    'sobre-mi': 'about',
    'blog':     'blog',
  },
  es: {
    'about': 'sobre-mi',
  },
} as const;