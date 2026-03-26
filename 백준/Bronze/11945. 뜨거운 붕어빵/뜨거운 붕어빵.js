const fs = require('fs');
const [size, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');

for(const line of input){
    console.log(line.split('').reverse().join(''))
}
