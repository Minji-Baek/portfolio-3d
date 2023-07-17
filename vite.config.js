import { defineConfig } from 'vite'
import vitePluginGLSL from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vitePluginGLSL()],
  root: 'src',
  base: '/portfolio-3d/',
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: '../dist',
    emptyOutDir: true,
    },
})
