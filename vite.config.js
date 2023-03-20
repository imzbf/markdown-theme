import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import markdown from '@vavt/vite-plugin-import-markdown';

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
  plugins: [vue(), markdown()]
});
