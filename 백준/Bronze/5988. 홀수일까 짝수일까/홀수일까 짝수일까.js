const fs = require('fs');
const [N, ...input] = fs.readFileSync(0).toString().trim().split('\n');

for(const line of input){
    const n = Number(line[line.length - 1]);
    console.log(n % 2 === 0 ? "even" : "odd")
}