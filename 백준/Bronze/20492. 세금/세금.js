const fs = require('fs'); 
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
console.log(`${N * 0.78} ${N * 0.956}`)