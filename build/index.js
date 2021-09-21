const sass = require('sass');
const fs = require('fs-extra');
const path = require('path');
const { removeDir } = require('./u');

const themeEntryList = fs.readdirSync(path.resolve(__dirname, '../src/themes'));

const targetDir = path.resolve(__dirname, '../dist');
if (fs.existsSync(targetDir)) {
  removeDir(targetDir);
}

themeEntryList.forEach((themeName) => {
  const result = sass.renderSync({
    file: path.resolve(__dirname, `../src/themes/${themeName}/index.scss`),
  });

  //
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  fs.writeFileSync(`${targetDir}/${themeName}.css`, result.css);
});
