const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

for(let i = N; i > 0; i--){
    const curStar = '*'.repeat(i);
    console.log(curStar.padStart(N));
}