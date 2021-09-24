# 1、一级标题

## 2、二级标题

### 3、三级标题

#### 4、四级标题

##### 5、五级标题

###### 6、六级标题

## md-editor-v3

Markdown 编辑器，基于 vue3，使用 jsx 和 typescript 语法开发，支持切换主题、prettier 美化文本等。

## 基本演示

**加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>[1]</sub>，`inline code`，[超链接](https://imbf.cc)

> 引用：这是一段引用

![ddd](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d93b5ac7338479fb7fd0b94ba6e003a~tplv-k3u1fbpfcp-watermark.image)

## 代码演示

```js
import { defineComponent, ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

export default defineComponent({
  name: 'MdEditor',
  setup() {
    const text = ref('');
    return () => (
      <MdEditor
        modelValue={text.value}
        onChange={(v: string) => (text.value = v)}
      />
    );
  },
});
```

## 文本演示

依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。

## 表格演示

| 昵称 | 猿龄（年） | 来自      |
| ---- | ---------- | --------- |
| 之间 | 3          | 中国-重庆 |
| 之间 | 3          | 中国-重庆 |
| 之间 | 3          | 中国-重庆 |
| 之间 | 3          | 中国-重庆 |
| 之间 | 3          | 中国-重庆 |

## 占个坑@！
