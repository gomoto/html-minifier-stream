const fs = require('fs');
const htmlMinifierStream = require('../index');

fs.createReadStream('index.html')
.pipe(htmlMinifierStream({
  collapseWhitespace: true
}))
.pipe(fs.createWriteStream('minified.html'));
