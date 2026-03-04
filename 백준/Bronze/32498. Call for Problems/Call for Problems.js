const fs = require('fs');
const [n, ...nums] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
let count = 0;
for(const score of nums){
    if(score % 2 !== 0){
        count++
    }
}
console.log(count)