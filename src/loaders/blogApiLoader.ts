import type { Loader } from 'astro/loaders';

type ApiBlogPost = {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string | number | Date;
  coverImage?: string | null;
  tags?: string[];
  draft?: boolean;
  createdAt?: string | number | Date | null;
  updatedAt?: string | number | Date | null;
};

type BlogApiLoaderOptions = {
  endpoint?: string;
};

export function blogApiLoader(options: BlogApiLoaderOptions = {}): Loader {
  return {
    name: 'blog-api-loader',
    async load({ store, logger }) {
      const endpoint = options.endpoint;

      if (!endpoint) {
        logger.warn(
          'BLOG_SOURCE=api pero BLOG_API_ENDPOINT no esta definido. No se cargaran posts.'
        );
        store.clear();
        return;
      }

      logger.info(`Cargando posts desde API: ${endpoint}`);

      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(
          `No fue posible cargar posts desde API (${response.status} ${response.statusText})`
        );
      }

      const items = (await response.json()) as ApiBlogPost[];

      store.clear();

      for (const post of items) {
        if (!post.slug) continue;

        store.set({
          id: post.slug,
          data: {
            title: post.title,
            description: post.description,
            publishedAt: post.publishedAt,
            coverImage: post.coverImage ?? undefined,
            tags: post.tags ?? [],
            draft: post.draft ?? false,
            createdAt: post.createdAt ?? undefined,
            updatedAt: post.updatedAt ?? undefined,
          },
          // Astro procesa markdown en body igual que los .md locales.
          body: post.content,
          rendered: undefined,
        });
      }

      logger.info(`${items.length} posts cargados desde API.`);
    },
  };
}