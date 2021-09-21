const sass = require('sass');
const fs = require('fs');
const path = require('path');
const { removeDir } = require('./u');

const themeEntryList = fs.readdirSync(path.resolve(__dirname, '../themes'));

const targetDir = path.resolve(__dirname, '../css');
if (fs.existsSync(targetDir)) {
  removeDir(targetDir);
}

themeEntryList.forEach((themeName) => {
  if (
    fs.lstatSync(path.resolve(__dirname, `../themes/${themeName}`)).isFile()
  ) {
    return false;
  }

  const result = sass.renderSync({
    file: path.resolve(__dirname, `../themes/${themeName}/index.scss`),
  });

  //
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  fs.writeFileSync(`${targetDir}/${themeName}.css`, result.css);
});
