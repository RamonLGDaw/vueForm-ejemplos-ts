import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueForm from '@vueform/vueform/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),vueForm()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
