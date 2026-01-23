const fs = require('fs'); 
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n')

for(const line of input){
    const [a, b] = line.split(' ').map(Number);
    console.log(a + b)
}