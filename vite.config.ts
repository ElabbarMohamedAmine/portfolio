import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base: the build works from any path (GitHub Pages project site,
// user site, or a local folder) without editing this file. Safe here because
// navigation is hash-based and there is no client-side router.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
