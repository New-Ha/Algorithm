const fs = require('fs'); 
const char = fs.readFileSync(0, 'utf-8').toString().trim();
const isN = char.toLowerCase() === 'n';
console.log(isN ? "Naver D2" : "Naver Whale")