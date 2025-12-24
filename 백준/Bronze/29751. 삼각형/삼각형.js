const fs = require('fs'); 
const [W, H] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const extent = W * H * 0.5
console.log(extent.toFixed(1))