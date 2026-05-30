// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable Nitro entirely so `vite build` produces a plain Vite + TanStack Start
  // build (no Cloudflare/Node deploy bundle). TanStack Start's own prerender plugin
  // (configured below) then renders every route to static HTML in dist/client.
  // Nitro is avoided because its output naming/crawler conflicts with the
  // prerenderer's preview server, which expects dist/server/server.js.
  // Production artifact to upload to Hostinger: the dist/client folder.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this. In a static build it is only used at build time
    // to render each page to HTML, then discarded — no server runs in production.
    server: { entry: "server" },
    // Prerender every route to static HTML at build time.
    // autoSubfolderIndex writes /about -> /about/index.html so Apache (Hostinger)
    // serves clean URLs without needing an .htaccess rewrite.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
    },
    // Explicit page list as a safety net in case link-crawling misses a route.
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/work" },
      { path: "/services" },
      { path: "/culture" },
      { path: "/insights" },
      { path: "/contact" },
    ],
  },
});
