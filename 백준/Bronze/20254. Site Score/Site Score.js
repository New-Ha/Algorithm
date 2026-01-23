const fs = require('fs'); 
const [Ur, Tr, Uo, To] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
console.log((56 * Ur) + (24 * Tr) + (14 * Uo) + (6 * To))