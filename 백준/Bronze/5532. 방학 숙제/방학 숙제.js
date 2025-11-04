const fs = require('fs');
const [L, A, B, C, D] = fs.readFileSync(0).toString().trim().split('\n').map(Number);
const homeworkDay = Math.ceil(Math.max(B/D, A/C));
console.log(L - homeworkDay)