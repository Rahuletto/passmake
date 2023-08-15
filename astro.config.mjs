import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  excludeMiddleware: true,
  experimental: {
    viewTransitions: true,
    optimizeHoistedScript: true
  },
});
