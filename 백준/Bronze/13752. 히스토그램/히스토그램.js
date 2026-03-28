const fs = require('fs');
const [n, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);
for(const bar of input){
    console.log('='.repeat(bar));
}