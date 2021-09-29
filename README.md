# markdown theme

[md-editor-v3](https://github.com/imzbf/md-editor-v3)系列预览`markdown`内容主题。

- 默认风格
- vuepress 风格
- github 风格

> 该样式不完全与对应站点相同，只是部分复制~

## 安装

```shell
yarn add @vavt/markdown-theme
```

## 使用

```js
import '@vavt/markdown-theme/default.css';
import '@vavt/markdown-theme/github.css';
import '@vavt/markdown-theme/vuepress.css';
```

- 默认风格类名：`default-theme`
- Github 风格类名：`github-theme`
- Vuepress 风格类名：`vuepress-theme`

切换暗黑模式时，在上方类名所在的元素的祖级元素添加`class='md-dark'`
