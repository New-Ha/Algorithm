const fs = require('fs'); 
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());

let sum = 0;
let cubes = 0;

for(let i = 1; i <= N; i++){
    sum += i;
    cubes += Math.pow(i, 3);
}

console.log(sum + '\n' + Math.pow(sum, 2) + '\n' + cubes)