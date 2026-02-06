const fs = require('fs'); 
const [t, ...nums] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const result = nums.reduce((sum, cur) => sum + cur, 0)
console.log(result)