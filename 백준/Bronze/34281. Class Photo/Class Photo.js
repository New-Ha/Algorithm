const fs = require('fs'); 
const [W, H] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(W * H)