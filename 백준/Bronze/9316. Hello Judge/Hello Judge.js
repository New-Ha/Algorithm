const fs = require('fs'); 
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

for(let i = 1; i <= N; i++){
    console.log(`Hello World, Judge ${i}!`)
}