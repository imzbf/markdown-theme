import { createApp } from 'vue';
import MdEditor from 'md-editor-v3';

import './themes/all/index.scss';

createApp({
  components: { MdEditor },
  data() {
    return {
      theme: 'dark',
      previewTheme: 'smart-blue',
      text: '',
    };
  },
  mounted() {
    fetch('/demo.md').then(async (res) => {
      this.text = await res.text();
    });
  },
  template: `
  <div class="app" :style="{background: theme === 'dark' ? previewTheme === 'github' ? '#0E1116' : '#000' : '#fff' }">
    <div style="position: fixed; left: 0;">
      <button @click="theme = theme === 'dark' ? 'light' : 'dark'">切换</button>
      <button @click="previewTheme = 'default'">默认</button>
      <button @click="previewTheme = 'github'">github</button>
      <button @click="previewTheme = 'vuepress'">vuepress</button>
    </div>
    <div :class="['container', theme === 'dark' ? 'md-dark' : '']">
      <MdEditor
        editorId="md-editor"
        :editorClass="previewTheme + '-theme'"
        highlightCss="https://cdn.jsdelivr.net/npm/highlight.js@11.5.0/styles/atom-one-dark.css"
        previewOnly
        :previewTheme="previewTheme"
        v-model="text"
        showCodeRowNumber />
    </div>
  </div>`,
}).mount('#app');
