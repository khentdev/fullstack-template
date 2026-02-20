import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [vue(), tailwindcss(),
  Sitemap({
    robots: [{
      allow: "/",
      userAgent: "*"
    }]
  })],
})
