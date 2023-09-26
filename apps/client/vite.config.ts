import { resolve }      from 'path'
import vue              from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import webfontDownload  from 'vite-plugin-webfont-dl'
import tsconfigPaths    from 'vite-tsconfig-paths'

const interFont = 'https://fonts.googleapis.com/css2?family=Inter&display=swap'

export default defineConfig({
  plugins: [vue(), tsconfigPaths(), webfontDownload([interFont])],
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`
    }
  },
  define: {
    'process.env': process.env
  },
  server: {
    host: 'localhost',
    port: 3000
  },
  preview: {
    host: 'localhost',
    port: 4000
  }
})
