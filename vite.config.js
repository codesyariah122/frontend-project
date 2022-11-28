import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3030,
  },
  build: {
    outdir: "./dist/",
  },
  root: "./src/",
});
