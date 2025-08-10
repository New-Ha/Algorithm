const fs = require('fs');
const [N, ...gifts] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = 0;
for(const gift of gifts){
    const period = Number(gift.slice(2));
    if(period <= 90) count++
}

console.log(count)