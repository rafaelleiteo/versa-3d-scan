// Trigger rebuild for Vercel deployment
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    // CRITICAL: override the Lovable wrapper's default `dist/` output dirs.
    // The Vercel preset writes to Vercel's Build Output API v3 layout under
    // `.vercel/output/`. If we leave the wrapper's `dist/server`+`dist/client`
    // defaults in place, Vercel sees only static files and no serverless
    // functions, which makes every SSR route 404.
    output: {
      dir: "{{ rootDir }}/.vercel/output",
      serverDir: "{{ output.dir }}/functions/__server.func",
      publicDir: "{{ output.dir }}/static/{{ baseURL }}",
    },
  },
});
