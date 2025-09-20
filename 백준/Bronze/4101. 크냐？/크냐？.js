const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
for(const line of input){
    if(line === '0 0') break;
    const [A, B] = line.split(' ').map(Number);
    console.log(A > B ? 'Yes' : 'No')
}
