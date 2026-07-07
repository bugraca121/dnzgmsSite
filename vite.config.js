import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bugun: resolve(__dirname, 'bugun.html'),
        ataturk: resolve(__dirname, 'ataturk.html'),
      },
    },
  },
})
