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
      <MdEditor
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
import { reactive } from 'vue';
import MdEditor from 'md-editor-v3';
import mdAll from './md-all.md';
const state = reactive({ theme: 'dark', previewTheme: 'default', text: mdAll });

const changeTheme = () => (state.theme = state.theme === 'dark' ? 'light' : 'dark');
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
</style>
<style src="../themes/all/index.scss" lang="scss"></style>
