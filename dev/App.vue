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
// * {
//   margin: 0;
//   padding: 0;
// }

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

<style>
.md-editor {
  --md-color: #3f4a54;
  --md-hover-color: #000;
  --md-bk-color: #fff;
  --md-bk-color-outstand: #f6f6f6;
  --md-bk-hover-color: #f5f7fa;
  --md-border-color: #e6e6e6;
  --md-border-hover-color: #b9b9b9;
  --md-border-active-color: #999;
  --md-modal-mask: #00000073;
  --md-scrollbar-bg-color: #e2e2e2;
  --md-scrollbar-thumb-color: #0000004d;
  --md-scrollbar-thumb-hover-color: #00000059;
  --md-scrollbar-thumb-active-color: #00000061;
}

.md-editor-dark {
  --md-color: #999;
  --md-hover-color: #bbb;
  --md-bk-color: #000;
  --md-bk-color-outstand: #111;
  --md-bk-hover-color: #1b1a1a;
  --md-border-color: #2d2d2d;
  --md-border-hover-color: #636262;
  --md-border-active-color: #777;
  --md-modal-mask: #00000073;
  --md-scrollbar-bg-color: #0f0f0f;
  --md-scrollbar-thumb-color: #2d2d2d;
  --md-scrollbar-thumb-hover-color: #3a3a3a;
  --md-scrollbar-thumb-active-color: #3a3a3a;
}
</style>
<style src="../src/themes/all/index.scss" lang="scss" />
<!-- <style src="../css/all.css" /> -->
