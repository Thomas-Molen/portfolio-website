import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/edge';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [react()],
  adapter: vercel({
    analytics: true,
  }),
  vite: {
    define: {
      'import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID),
    },
  },
});