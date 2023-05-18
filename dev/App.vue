<template>
  <div :class="state.theme">
    <ul class="dev-tools">
      <li><button @click="changeTheme">切换</button></li>
      <li><button @click="state.previewTheme = 'default'">默认</button></li>
      <li><button @click="state.previewTheme = 'github'">github</button></li>
      <li><button @click="state.previewTheme = 'vuepress'">vuepress</button></li>
      <li><button @click="state.previewTheme = 'smart-blue'">smart-blue</button></li>
      <li><button @click="state.previewTheme = 'cyanosis'">cyanosis</button></li>
      <li><button @click="state.previewTheme = 'mk-cute'">mk-cute</button></li>
    </ul>
    <div class="container">
      <MdPreview
        v-model="state.text"
        :theme="state.theme"
        :previewTheme="state.previewTheme"
        showCodeRowNumber
        previewOnly
      />
    </div>
  </div>
</template>
<script setup>
import { reactive, watch } from 'vue';
import { MdPreview } from 'md-editor-v3';
import mdAll from './md-all.md';
const state = reactive({
  theme: 'light',
  previewTheme: localStorage.getItem('preview-theme') || 'default',
  text: mdAll
});

const changeTheme = () => (state.theme = state.theme === 'dark' ? 'light' : 'dark');

watch(
  () => state.previewTheme,
  () => {
    localStorage.setItem('preview-theme', state.previewTheme);
  }
);
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.dark {
  background-color: #000;
}

.light {
  background-color: #fff;
}

.dev-tools {
  position: fixed;
  width: 200px;
  left: 20px;
  top: 20px;
  list-style: none;

  li {
    padding: 4px;
  }
}

.container {
  width: 1170px;
  margin: 0 auto;
  padding: 50px 0;
}

.md-editor-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  overflow: hidden;
}
</style>
<!-- 
<style>
.md-editor {
  --bg-color: rgba(224, 224, 224, 0.1);
  --blue: #37b2ff;
  --yellow: #feea1e;
  --orange: orange;
  --purple: #e699e6;
  --green: #a7ecad;
  --text: #333;
  --area: #f8f8f8;
  --line: #adb0b8;
  --border: rgb(245, 245, 247);
  --border-blue: #37b2ff;
  --table-bg-color: #fff;
}

.md-editor-dark {
  --bg-color: rgba(224, 224, 224, 0.1);
  --blue: #37b2ff;
  --yellow: #feea1e;
  --orange: orange;
  --purple: #e699e6;
  --green: #a7ecad;
  --text: #c9d1d9;
  --area: #1a1a1a;
  --line: #75787e;
  --border: rgb(78 78 78);
  --border-blue: #2781b9;
  --table-bg-color: var(--area);
}
</style> -->
<style src="../src/themes/all/index.scss" lang="scss" />
<!-- <style src="../css/all.css" /> -->
