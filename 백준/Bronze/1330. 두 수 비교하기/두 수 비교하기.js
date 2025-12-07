const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

if(A > B) console.log('>');
else if(A < B) console.log('<');
else if(A === B) console.log('==');