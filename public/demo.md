# API

![](https://img.shields.io/github/stars/imzbf/md-editor-v3?style=social) ![](https://img.shields.io/npm/dw/md-editor-v3) ![](https://img.shields.io/bundlephobia/min/md-editor-v3)![](https://img.shields.io/github/license/imzbf/md-editor-v3) ![](https://img.shields.io/github/package-json/v/imzbf/md-editor-v3)

```
async onUploadImg(files: FileList, callback: (urls: string[]) => void) {
  const res = await Promise.all(
    Array.from(files).map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);

        axios
          .post('/api/img/upload', form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => rev(res))
          .catch((error) => rej(error));
      });
    })
  );

  callback(res.map((item: any) => item.data.url));
}
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
- 哈哈哈

## 全局配置

`Vue.config` 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改下列 property：

### silent

1. 类型：`boolean`
2. 默认值：`false`
3. 用法：

```js
Vue.config.silent = true;
```

取消 Vue 所有的日志与警告。

### optionMergeStrategies

- 类型：`{ [key: string]: Function }`
- 默认值：`{}`
- 用法：

```js
Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
  return child + 1;
};

const Profile = Vue.extend({
  _my_option: 1,
});

// Profile.options._my_option = 2
```

自定义合并策略的选项。

合并策略选项分别接收在父实例和子实例上定义的该选项的值作为第一个和第二个参数，Vue 实例上下文被作为第三个参数传入。

- 参考 [自定义选项的混入策略](自定义选项的混入策略)

<hr>

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
