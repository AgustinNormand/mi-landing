import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://piranhasoftware.com.ar",
  vite: { plugins: [tailwindcss()] },
});
