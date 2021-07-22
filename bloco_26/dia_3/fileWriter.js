const fs = require('fs');

function fileWriter(nameArc, content) {
  fs.writeFileSync(`./${nameArc}.txt`, content);
  return 'ok';
}

module.exports = fileWriter;
