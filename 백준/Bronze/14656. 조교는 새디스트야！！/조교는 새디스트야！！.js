const fs = require('fs');
const [n, nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const students = nums.split(' ').map(Number);
let count = 0;
for(let i = 1; i <= Number(n); i++){
    if(students[i - 1] !== i) count++
}

console.log(count)