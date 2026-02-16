const fs = require('fs');
const subject = fs.readFileSync(0, 'utf-8').toString().trim();
const subjectsMap = {
    'F': 'Foundation',
    'C': 'Claves',
    'V': 'Veritas',
    'E': 'Exploration'
}
console.log(subjectsMap[subject[0]])