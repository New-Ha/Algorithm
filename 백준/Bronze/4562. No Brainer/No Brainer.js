const fs = require('fs');
const [N, ...input] = fs.readFileSync(0).toString().trim().split('\n');

for(const line of input){
    const [x, y] = line.split(' ').map(Number);
    console.log(x < y ? "NO BRAINS" : "MMM BRAINS")
}