const fs = require('fs'); 
const [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

for(const line of input){
    const [A, B, X] = line.split(' ').map(Number);
    const W = A * (X - 1) + B
    console.log(W)
}