import { createApp, h } from 'vue';
import MdEditor from 'md-editor-v3';

import './themes/default/index.scss';
import './themes/vuepress/index.scss';
import './themes/github/index.scss';

createApp({
  components: { MdEditor },
  data() {
    return {
      theme: 'light',
      text: '',
    };
  },
  mounted() {
    fetch('/demo.md').then(async (res) => {
      this.text = await res.text();
    });
  },
  template: `
  <div class="app" :style="{background: theme === 'dark' ? '#000' : '#fff' }">
    <button @click="theme = theme === 'dark' ? 'light' : 'dark'">切换</button>
    <div :class="['container', theme === 'dark' ? 'md-dark' : '']">
      <MdEditor editorId="md-editor" editorClass="github-theme" previewOnly previewTheme="vuepress" v-model="text"  />
    </div>
  </div>`,
}).mount('#app');
