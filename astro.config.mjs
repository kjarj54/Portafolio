// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.astrojs.com',
  integrations: [sitemap()],
  output: 'server',
  adapter: netlify()
});