// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // User page served from the domain root, so no `base` is needed.
  site: 'https://domhazza.github.io',
  integrations: [mdx()],
  // The CV is served as a PDF; keep the old page URL working.
  redirects: {
    '/cv': '/cv.pdf',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
