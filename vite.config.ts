import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import ssrHotReload from "vite-plugin-ssr-hot-reload";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [ssrHotReload(), cloudflare(), tailwindcss() as any],
});
