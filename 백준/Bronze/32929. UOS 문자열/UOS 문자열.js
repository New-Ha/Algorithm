const fs = require('fs'); 
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
const str = 'UOS';
const idx = Number((N - 1) % 3);
console.log(str[idx])