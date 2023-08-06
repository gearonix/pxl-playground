import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  server: {
    host: 'localhost',
    port: 3000
  },
  preview: {
    host: 'localhost',
    port: 4000
  }
})
