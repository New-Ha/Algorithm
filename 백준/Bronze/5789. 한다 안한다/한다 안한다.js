const fs = require('fs');
const [N, ...input] = fs.readFileSync(0).toString().trim().split('\n');

for(const line of input){
    const mid = line.length / 2;
    const str = line.slice(mid-1, mid + 1);
    console.log(str[0] === str[1] ? "Do-it" : "Do-it-Not")
}