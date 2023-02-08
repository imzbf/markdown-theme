# markdown-theme

English \| [中文](https://github.com/imzbf/markdown-theme/blob/develop/README-CN.md)

Themes for [md-editor-v3](https://github.com/imzbf/md-editor-v3) series.

| Name | Source |
| --- | --- |
| default | - |
| vuepress | - |
| github | - |
| cyanosis | [juejin-markdown-theme-cyanosis](https://github.com/linxsbox/juejin-markdown-theme-cyanosis) |
| mk-cute | [juejin-markdown-theme-mk-cute](https://github.com/Jacky-Summer/juejin-markdown-theme-mk-cute) |
| smart-blue | [juejin-markdown-theme-smart-blue](https://github.com/cumt-robin/juejin-markdown-theme-smart-blue) |

> The styles are not exactly the same as the original. If you have an excellent suggestion, clone project [md-editor-extension](https://github.com/imzbf/md-editor-extension) and create PR to share your theme.

## Install

```shell
yarn add @vavt/markdown-theme
```

## Usage

Import some one([name].css):

```js
import '@vavt/markdown-theme/default.css';
```

Import all themes:

```js
import '@vavt/markdown-theme/all.css';
```

If you want editor to render article only, import theme which you need like this:

```vue
<template>
  <MdEditor
    v-model="state.text"
    :theme="state.theme"
    :previewTheme="state.previewTheme"
    showCodeRowNumber
    previewOnly
  />
</template>

<script setup>
import MdEditor from 'md-editor-v3';
// import theme which you need
import '@vavt/markdown-theme/all.css';
</script>
```
