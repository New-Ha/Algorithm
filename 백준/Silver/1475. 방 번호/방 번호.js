const fs = require('fs');
const N = fs.readFileSync(0, 'utf8').trim();
const count = Array(10).fill(0);

for(const n of N){
    count[Number(n)]++;
}

const sixNine = Math.ceil((count[6] + count[9]) / 2);
count[6] = count[9] = sixNine;

console.log(Math.max(...count));