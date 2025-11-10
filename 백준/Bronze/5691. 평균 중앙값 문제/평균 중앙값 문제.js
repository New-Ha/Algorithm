const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

for(const line of input){
    if(line === '0 0') break;
    
    const [A, B] = line.split(' ').map(Number).sort((a, b) => a - b);
    const diff = B - A;
    console.log(A - diff)
}
