import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('posts', {
  id:          integer('id').primaryKey({ autoIncrement: true }),
  slug:        text('slug').notNull().unique(),
  title:       text('title').notNull(),
  description: text('description').notNull(),
  content:     text('content').notNull(),       // ← el .md completo aquí
  coverImage:  text('cover_image'),
  tags:        text('tags', { mode: 'json' })
                 .$type<string[]>()
                 .default(sql`'[]'`),
  published:   integer('published', { mode: 'boolean' }).default(false),
  publishedAt: integer('published_at', { mode: 'timestamp' }),
  createdAt:   integer('created_at', { mode: 'timestamp' })
                 .default(sql`(unixepoch())`),
  updatedAt:   integer('updated_at', { mode: 'timestamp' })
                 .default(sql`(unixepoch())`),
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;