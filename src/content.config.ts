import { defineCollection} from 'astro:content';
import { glob } from 'astro/loaders';
import { blogApiLoader } from './loaders/blogApiLoader';
import { z } from 'astro/zod';
const blogSource = import.meta.env.BLOG_SOURCE ?? 'markdown';

const blog = defineCollection({
  loader:
    blogSource === 'api'
      ? blogApiLoader({
          endpoint: import.meta.env.BLOG_API_ENDPOINT,
        })
      : glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { blog };