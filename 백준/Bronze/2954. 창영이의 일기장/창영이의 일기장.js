const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim().replace(/([aeiou])p\1/g, '$1');
console.log(str)