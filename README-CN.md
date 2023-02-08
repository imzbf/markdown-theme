# markdown-theme

[English](https://github.com/imzbf/markdown-theme) \| 中文

[md-editor-v3](https://github.com/imzbf/md-editor-v3)系列预览`markdown`内容主题。

| 主题名 | 来源 |
| --- | --- |
| default |  |
| vuepress |  |
| github |  |
| cyanosis | [juejin-markdown-theme-cyanosis](https://github.com/linxsbox/juejin-markdown-theme-cyanosis) |
| mk-cute | [juejin-markdown-theme-mk-cute](https://github.com/Jacky-Summer/juejin-markdown-theme-mk-cute) |
| smart-blue | [juejin-markdown-theme-smart-blue](https://github.com/cumt-robin/juejin-markdown-theme-smart-blue) |

> 样式不完全与原主题相同，仅部分参考。此仓库为编辑器默认主题库。如果您有优秀的主题，鼓励前往扩展库[md-editor-extension](https://github.com/imzbf/md-editor-extension)参与贡献。

## 安装

```shell
yarn add @vavt/markdown-theme
```

## 使用

引入单个主题（按需替换[name].css）

```js
import '@vavt/markdown-theme/default.css';
```

引入全部主题

```js
import '@vavt/markdown-theme/all.css';
```

如果是编辑器的仅预览模式：

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
// 仅预览不需要编辑器的样式，只需要引入主题样式即可
import '@vavt/markdown-theme/all.css';
</script>
```
