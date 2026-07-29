import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is '/codebuddy/' in production for GitHub Pages hosting
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/codebuddy/' : '/',
  server: {
    port: 5199,
    strictPort: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
      },
    },
  },
}))
