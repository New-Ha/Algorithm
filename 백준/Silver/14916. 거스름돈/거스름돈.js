const fs = require('fs');
const n = Number(fs.readFileSync(0, 'utf-8').toString().trim());

let count = -1;
for(o = Math.floor(n / 5); o >= 0; o--){
    let charge = n - o * 5;
    
    if(charge % 2 === 0){
        count = o + charge / 2;
        break;
    }
}

console.log(count)