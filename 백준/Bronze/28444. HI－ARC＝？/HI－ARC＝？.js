const fs = require('fs'); 
const [H, I, A, R, C] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
const fir = H * I
const sec = A * R * C
console.log(fir - sec)