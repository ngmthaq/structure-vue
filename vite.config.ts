import { fileURLToPath, URL } from "node:url";
import path from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import eslint from "vite-plugin-eslint";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  plugins: [
    vue(),
    vueJsx(),
    eslint(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, "./src/locales/**")],
    }),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        sourcemap: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
