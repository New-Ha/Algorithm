const fs = require('fs'); 
const bottles = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').reduce((sum, cur) => sum + Number(cur), 0);
console.log(bottles * 5)