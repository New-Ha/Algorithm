const fs = require('fs');
const [x, y, w, h] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(Math.min(x, y, h - y, w - x));