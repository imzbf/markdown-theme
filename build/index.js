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
  const themePath = path.resolve(__dirname, `${themeFolder}/${themeName}`);

  // 目标主题目录不是目录是文件，退出
  if (fs.lstatSync(themePath).isFile()) {
    return false;
  }

  const entryPath = path.resolve(themePath, 'index.scss');

  // 没有入口文件，说明是未完成的主题目录，跳过
  if (!fs.existsSync(entryPath)) {
    console.warn(`skip ${themeName}: index.scss not found`);
    return false;
  }

  const result = sass.compile(entryPath, {
    charset: false,
    style: 'compressed'
  });

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  fs.writeFileSync(`${targetDir}/${themeName}.css`, result.css);
});
