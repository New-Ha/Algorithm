const fs = require('fs'); 
const nums = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
nums.sort((a, b) => a - b);
console.log(nums[1] - nums[0]);