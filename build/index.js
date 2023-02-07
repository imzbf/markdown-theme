const sass = require('sass');
const fs = require('fs');
const path = require('path');
const { removeDir } = require('./u');

const themeFolder = '../src/themes';

// 获取到所有的主题文件夹
const themeEntryList = fs.readdirSync(path.resolve(__dirname, themeFolder));

// 处理生产环境目录
const targetDir = path.resolve(__dirname, '../css');
if (fs.existsSync(targetDir)) {
  removeDir(targetDir);
}

themeEntryList.forEach((themeName) => {
  // 目标主题目录不是目录是文件，退出
  if (fs.lstatSync(path.resolve(__dirname, `${themeFolder}/${themeName}`)).isFile()) {
    return false;
  }

  const scssCode = fs.readFileSync(
    path.resolve(__dirname, `${themeFolder}/${themeName}/index.scss`)
  );

  const result = sass.compile(path.resolve(__dirname, `${themeFolder}/${themeName}/index.scss`), {
    charset: false,
    style: 'compressed'
  });

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  fs.writeFileSync(`${targetDir}/${themeName}.css`, result.css);
});
