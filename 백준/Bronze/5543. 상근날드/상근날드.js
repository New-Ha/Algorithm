const fs = require('fs');
const [S, J, H, coke, soda] = fs.readFileSync(0).toString().trim().split('\n').map(Number);
const minSetPrice = Math.min(S, J, H) + Math.min(coke, soda) - 50;
console.log(minSetPrice)