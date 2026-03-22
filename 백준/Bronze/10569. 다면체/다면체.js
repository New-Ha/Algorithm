const fs = require('fs');
const [t, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');

for(const line of input){
    const [v, e] = line.split(' ').map(Number);
    const f =  2 + e - v;
    console.log(f)
}