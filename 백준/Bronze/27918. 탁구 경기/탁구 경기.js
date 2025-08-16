const fs = require('fs');
const [N, ...predictions] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let D = 0;
let P = 0;
for(let i = 0; i < Number(N); i++){
    const cur = predictions[i];
    if(cur === 'D') D++;
    else if(cur === 'P') P++;
    
    if(Math.abs(D - P) === 2) break;
}

console.log(`${D}:${P}`)