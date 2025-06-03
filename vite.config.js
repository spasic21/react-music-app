import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  },
  plugins: [react()],
  base: mode === 'development' ? '/' : '/react-music-app/'
}));