import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/enes-halit-portfolio/', // Use your repository name here
  build: {
    outDir: 'build',
  },
})
