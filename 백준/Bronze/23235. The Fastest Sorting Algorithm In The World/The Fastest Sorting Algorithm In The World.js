const fs = require('fs'); 
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

for(let i = 0; i < input.length; i++){
    if(input[i] === '0') break;
    console.log(`Case ${i + 1}: Sorting... done!`)
}