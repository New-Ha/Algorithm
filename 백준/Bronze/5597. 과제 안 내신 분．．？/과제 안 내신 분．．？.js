const fs = require('fs');
const nums = fs.readFileSync(0).toString().trim().split('\n').map(Number);

// case 1
// const check = Array(31).fill(false);
// for(const n of nums){
//     check[n] = true;
// }
// for(let i = 1; i <= 30; i++){
//     if(!check[i]) console.log(i);
// }

// case 2
const check = Array.from({ length: 31 }, (_, i) => i);
const missingId = check.slice(1).filter(n => !nums.includes(n));

console.log(missingId.join('\n'));