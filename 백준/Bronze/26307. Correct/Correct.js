const fs = require('fs'); 
const [hh, mm] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log(((hh - 9) * 60) + mm)
