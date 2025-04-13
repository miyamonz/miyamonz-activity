import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  return {
    plugins:
      mode === "test"
        ? [react(), tailwindcss()]
        : [react(), cloudflare(), tailwindcss()],
    // test: {
    //   globals: true,
    //   environment: "node",
    //   exclude: [...configDefaults.exclude],
    // },
  };
});
