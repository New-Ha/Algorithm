const fs = require('fs');
const n = Number(fs.readFileSync(0, 'utf-8').trim());

let sum = 0;
for(let i = 1; i <= n; i++){
    sum += i;
}
console.log(sum)