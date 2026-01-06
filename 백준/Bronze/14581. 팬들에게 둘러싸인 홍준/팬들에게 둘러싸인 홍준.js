const fs = require('fs'); 
const name = fs.readFileSync(0, 'utf-8').toString().trim();
console.log(`:fan::fan::fan:
:fan::${name}::fan:
:fan::fan::fan:`)
