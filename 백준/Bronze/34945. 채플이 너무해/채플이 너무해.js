const fs = require('fs');
const x = Number(fs.readFileSync(0, 'utf-8').toString().trim());
console.log(x + 2 >= 8 ? 'Success!' : 'Oh My God!')