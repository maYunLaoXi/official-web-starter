'use strict'
const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const pageList = require('../config/pages.js');

function pageResove(dir) {
  return path.join(__dirname, '../../', './src/pages', dir);
}

const Files = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>web</title>
</head>
<body>
  #include("../../assets/layout/head.html")

  <!-- footer -->
  #include("../../assets/layout/footer.html")
</body>
</html>`,
  js: function(name) {
    return `import 'bootstrap'
import $ from 'jquery'
import '@/assets/js/i18next'
import '@/assets/js/svg-icon/index.js'
import '@/assets/css/common.scss'
import './${name}.scss'`
  },
}

function buildFile() {
  var len = pageList.length,
    i = 0;
  while(i < len) {
    let item = pageList[i];
    i++;
    fs.access(pageResove(item.template), function(err) {
			
      if(!err) {
        return;
      }
			
      console.log('新建文件: ' + item.template)
			
      //新建html
      fileSave(pageResove(item.template))
			  .write(Files.html, 'utf8')
			  .end('\n');

      //新建js
      fileSave(pageResove(item.entry))
			  .write(Files.js(item.name), 'utf8')
			  .end('\n');

      //新建scss
      fileSave(pageResove(item.template.replace('.html', '.scss')))
			  .write('', 'utf8')
			  .end('\n');		
    })
  }
}

buildFile();