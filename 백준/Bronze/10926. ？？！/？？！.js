const fs = require('fs'); 
const id = fs.readFileSync(0, 'utf-8').toString().trim();
const suprise = '??!';
console.log(id + suprise)