const fs = require('fs');
const nums = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number);

for(const n of nums){
    if(n === 0) break;
    
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    console.log(sum)
}