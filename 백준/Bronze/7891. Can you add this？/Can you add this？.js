const fs = require('fs'); 
const [t, ...input] = fs.readFileSync(0).toString().trim().split('\n');

for(const line of input){
    const [A, B] = line.split(' ').map(Number)
    console.log(A + B)
}