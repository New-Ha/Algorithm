const fs = require('fs'); 
const [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

for(const line of input){
    const fir = line[0];
    const last = line[line.length - 1]
    console.log(fir + last)
}