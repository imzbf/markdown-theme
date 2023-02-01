import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import mdImport from './vitePlugins/markdownImport';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "./src/common/index.scss";'
      }
    }
  },
  plugins: [vue(), mdImport()]
});
