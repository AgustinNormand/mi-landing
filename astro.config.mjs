import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://agustinnormand.github.io",
  base: "/mi-landing",
  vite: { plugins: [tailwindcss()] },
});
