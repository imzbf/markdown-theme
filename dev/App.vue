<script setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import '../themes/default/index.scss';
import '../themes/vuepress/index.scss';
import '../themes/github/index.scss';

const text = ref(localStorage.getItem('markdown-theme-dev-text') || '');

const saveText = (mdText) => {
  localStorage.setItem('markdown-theme-dev-text', mdText);
};
</script>

<template>
  <MdEditor
    editorClass="vuepress-theme"
    previewOnly
    previewTheme="vuepress"
    v-model="text"
    @onSave="saveText"
  />
</template>

<style>
* {
  margin: 0;
}

#app {
  width: 1170px;
  margin: 0 auto;
}
</style>
