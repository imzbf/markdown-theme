import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import mdImport from './vitePlugins/markdownImport';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./themes/common.scss";@import "./themes/public.scss";'
      }
    }
  },
  plugins: [vue(), mdImport()]
});
