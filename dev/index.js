import { createApp } from 'vue';
import App from './App.vue';

import { config } from 'md-editor-v3';

config({
  markdownItPlugins(plugins, { editorId }) {
    return plugins.map((item) => {
      if (item.type === 'taskList') {
        return {
          ...item,
          options: {
            ...item.options,
            enabled: true
          }
        };
      }

      return item;
    });
  }
});

createApp(App).mount('#app');
