import { ui, defaultLang, showDefaultLang, routes } from './ui';

export type Lang = keyof typeof ui;

/** Detecta el idioma desde la URL */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/** Devuelve la función t() para obtener traducciones */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

/** Genera paths con o sin prefijo del idioma por defecto */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: string = lang): string {
    const pathName = path.replaceAll('/', '');
    const hasTranslation =
      defaultLang !== l &&
      routes[l as keyof typeof routes] !== undefined &&
      (routes[l as keyof typeof routes] as Record<string, string>)[pathName] !== undefined;

    const translatedPath = hasTranslation
      ? '/' + (routes[l as keyof typeof routes] as Record<string, string>)[pathName]
      : path;

    return !showDefaultLang && l === defaultLang
      ? translatedPath
      : `/${l}${translatedPath}`;
  };
}

/** Obtiene la clave de ruta canónica desde la URL actual */
export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname.split('/');
  const path = parts.pop() || parts.pop();
  if (!path) return undefined;

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const firstRoute = Object.values(routes)[0] as Record<string, string>;
    return firstRoute[path] ?? undefined;
  }

  const langRoutes = routes[currentLang as keyof typeof routes] as Record<string, string> | undefined;
  if (!langRoutes) return path;

  const reversedKey = Object.keys(langRoutes).find((key) => langRoutes[key] === path);
  return reversedKey ?? path;
}

/** Devuelve hreflang alternates para SEO */
export function getAlternateLinks(url: URL, siteUrl: string) {
  const langs = Object.keys(ui) as Lang[];
  const route = getRouteFromUrl(url);

  return langs.map((l) => {
    const translatePath = useTranslatedPath(l);
    const href = siteUrl + translatePath(`/${route ?? ''}`);
    return { lang: l, href };
  });
}