import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./themes/public.scss";',
      },
    },
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [vue()],
});
