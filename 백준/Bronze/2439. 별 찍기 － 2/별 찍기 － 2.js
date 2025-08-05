const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const stars = Array(N).fill('').forEach((e, i) => {
    e = e.padStart(N - i - 1, ' ') + e.padEnd(i + 1, '*')
    console.log(e)
});
