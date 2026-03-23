import type { Loader } from 'astro/loaders';
import { db } from './index';
import { posts } from './schema';
import { eq } from 'drizzle-orm';

export function tursoLoader(): Loader {
  return {
    name: 'turso-posts-loader',
    async load({ store, logger }) {
      logger.info('Cargando posts desde Turso...');

      const allPosts = await db
        .select()
        .from(posts)
        .where(eq(posts.published, true));

      store.clear();

      for (const post of allPosts) {
        store.set({
          id: post.slug,
          data: {
            title:       post.title,
            description: post.description,
            coverImage:  post.coverImage,
            tags:        post.tags ?? [],
            publishedAt: post.publishedAt,
            createdAt:   post.createdAt,
          },
          body: post.content, // ← el Markdown raw, Astro lo procesa nativamente
          rendered: undefined,
        });
      }

      logger.info(`${allPosts.length} posts cargados.`);
    },
  };
}