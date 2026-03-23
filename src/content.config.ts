import { defineCollection} from 'astro:content';
import { tursoLoader } from './db/loader';
import { z } from 'astro/zod'
const blog = defineCollection({
  loader: tursoLoader(),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    coverImage:  z.string().optional(),
    tags:        z.array(z.string()).default([]),
    publishedAt: z.coerce.date().optional(),
    createdAt:   z.coerce.date().optional(),
  }),
});

export const collections = { blog };