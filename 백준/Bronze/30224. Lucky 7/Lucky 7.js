const fs = require('fs');
const N = fs.readFileSync(0, 'utf-8').toString().trim();

let result = 0;
if(N.includes('7')){
   result = Number(N) % 7 === 0 ? 3 : 2
}else{
    result = Number(N) % 7 === 0 ? 1 : 0
}

console.log(result)