const fs = require('fs'); 
const [N, M] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const money = N * 100;
console.log(money >= M ? "Yes" : "No")