// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rehabco.sa",

  i18n: {
      defaultLocale: "ar",
      locales: ["ar", "en"],
      routing: {
          prefixDefaultLocale: false
      }
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['x7md.local']
    }
  }
});