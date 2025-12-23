const fs = require('fs'); 
const first = fs.readFileSync(0, 'utf-8').toString().trim();

const clubMap = {
    'M': 'MatKor',
    'W': 'WiCys',
    'C': 'CyKor',
    'A': 'AlKor',
    '$': '$clear'
}

console.log(clubMap[first])