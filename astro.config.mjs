// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [],
  site: 'https://arauzdev.netlify.app',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});