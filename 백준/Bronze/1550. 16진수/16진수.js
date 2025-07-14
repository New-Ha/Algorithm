const fs = require('fs');
const hex = fs.readFileSync('/dev/stdin').toString().trim();
console.log(parseInt(hex, 16))