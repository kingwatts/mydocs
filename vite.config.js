import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-vite-plugin";
import { version } from "./package.json";

const repoName = process.env.GITHUB_REPOSITORY?.split("/").at(-1);

// https://vite.dev/config/
export default defineConfig({
  base: repoName ? `/${repoName}/` : "/",
  plugins: [tanstackRouter(), react(), tailwindcss()],
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
});
