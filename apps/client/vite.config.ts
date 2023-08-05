import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: 'localhost',
    port: 3000
  },
  preview: {
    host: 'localhost',
    port: 4000
  }
})
