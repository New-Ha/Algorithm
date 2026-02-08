const fs = require('fs'); 
let [n, dasom, ...others] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

let count = 0;
while(dasom <= Math.max(...others)){
    const max = Math.max(...others)
    const maxIdx = others.indexOf(max);
    others[maxIdx]--;
    dasom++;
    count++;
}

console.log(count)