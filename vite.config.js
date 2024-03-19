import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@phila/mapboard']
  },
  plugins: [vue()],
  resolve: {
    alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
        scss: {
            // additionalData: `@import "@/scss/_variables.scss";
            // @import "@/scss/_mixins.scss";`,
            additionalData: `@import "./node_modules/@phila/mapboard/src/scss/global.scss";`,
        },
    },
  },
})
