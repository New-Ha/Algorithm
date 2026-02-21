const fs = require('fs');
const [N, C, P] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
console.log(C * P >= N ? 'yes' : 'no')