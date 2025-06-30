import { defineConfig } from "vite";
import glob from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import string from "vite-plugin-string"; // 👈 Імпортуємо плагін

export default defineConfig({
  base: "/hw-js-vite/", // 👈 ВАЖЛИВО: вкажіть базу
  root: "src",
  build: {
    rollupOptions: {
      input: glob.sync("./src/**/*.html"), // ✅ Усі HTML
    },
    outDir: "../dist",
  },
  plugins: [
    injectHTML(),
    FullReload(["./src/**/**.html"]),
    string({ include: "**/*.hbs" }), // 👈 Додаємо обробку .hbs
  ],
});
