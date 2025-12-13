const fs = require('fs'); 
const N = fs.readFileSync(0, 'utf-8').toString().trim();
console.log(N === '0' ? 'YONSEI' : 'Leading the Way to the Future')