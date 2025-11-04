const fs = require('fs');
const times = fs.readFileSync(0).toString().trim().split('\n').reduce((s, t) => s + Number(t), 0);
const x = Math.floor(times/60);
const y = times - (60 * x);
console.log(x + '\n' + y)