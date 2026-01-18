const fs = require('fs'); 
const [n, nums, v] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const count = nums.split(' ').filter(n => n === v);
console.log(count.length)