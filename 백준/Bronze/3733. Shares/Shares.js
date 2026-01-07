const fs = require('fs'); 
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

for(const line of input){
    const [N, S] = line.split(' ').map(Number);
    console.log(Math.floor(S / (N + 1)))
}