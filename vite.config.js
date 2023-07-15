import { defineConfig } from 'vite'
import vitePluginGLSL from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePluginGLSL()],
  base: '/portfolio-3d/'
})
