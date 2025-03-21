// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind(), sitemap()],
    site: template.website_url,
    base: template.base,
});
// import { defineConfig } from 'astro/config';

//If we want to use gh-pages instead of netlify
// import staticAdapter from '@astro/adapter-static';

// export default defineConfig({
//   site: 'https://yaseswini.github.io/Yaseswini_Portfolio/', // Replace with your details
//   build: {
//     outDir: './dist',
//   },
//   adapter: '@astro/adapter-static',
// });