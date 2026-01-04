const fs = require('fs'); 
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
for(let i = 1; i <= 9; i++){
    console.log(`${N} * ${i} = ${N * i}`)
}