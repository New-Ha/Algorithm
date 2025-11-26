const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf8').trim().split('\n').map(BigInt);

const sum = A + B;
const diff = A - B;
const product = A * B;
console.log(sum + '\n' + diff + '\n' + product)