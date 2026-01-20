const fs = require('fs'); 
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [n, x] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
const result = [];

for(const n of nums){
    if(n < x) result.push(n)
}

console.log(result.join(' '))