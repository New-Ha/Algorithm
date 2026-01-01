const fs = require('fs'); 
const fourth = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').reduce((sum, sec) => sum + Number(sec), 0);
console.log(fourth + 300 <= 1800 ? "Yes" : "No")