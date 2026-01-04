const fs = require('fs'); 
const nums = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

// 1
// nums.sort((a, b) => a - b);
// console.log(nums[1] - nums[0]);

// 2
console.log(Math.abs(nums[0] - nums[1]))