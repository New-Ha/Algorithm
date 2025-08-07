const fs = require('fs');
const nums = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);
console.log(nums[1])
