const fs = require('fs'); 
const [T, S] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log(T >= 12 && T <= 16 && S === 0 ? 320 : 280)