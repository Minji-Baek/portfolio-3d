import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // root: 'src',
  base: '/portfolio-3d/',
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: '../dist',
    emptyOutDir: true,
    },
})
