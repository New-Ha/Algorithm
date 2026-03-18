const fs = require('fs');
const [t, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');

for(let i = 0; i < Number(t); i++){
    const [a, b] = input[i].split(' ').map(Number);
    console.log(`Case ${i + 1}: ${a + b}`)
}