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

  const scssCode = fs.readFileSync(
    path.resolve(__dirname, `../themes/${themeName}/index.scss`)
  );

  const result = sass.renderSync({
    data: `@import "themes/common.scss";@import "themes/public.scss";${scssCode}`,
    includePaths: [path.resolve(__dirname, '../')],
  });

  //
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  fs.writeFileSync(`${targetDir}/${themeName}.css`, result.css);
});
