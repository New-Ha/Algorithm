const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

const max = 2 * N - 1;
for(let i = N; i > 0; i--){
    const stars = '*'.repeat(2 * i - 1);
    const half = " ".repeat((max - stars.length) / 2);
    console.log(half + stars)
}