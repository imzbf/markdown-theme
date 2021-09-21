import { createApp, h } from 'vue';
import MdEditor from 'md-editor-v3';

import '../themes/default/index.scss';
import '../themes/vuepress/index.scss';
import '../themes/github/index.scss';

createApp({
  components: { MdEditor },
  data() {
    return {
      text: localStorage.getItem('markdown-theme-dev-text') || '',
    };
  },
  methods: {
    saveText(mdText) {
      localStorage.setItem('markdown-theme-dev-text', mdText);
    },
  },
  template: `<MdEditor editorId="md-editor" editorClass="vuepress-theme" previewOnly previewTheme="vuepress" v-model="text" @onSave="saveText" />`,
}).mount('#app');
