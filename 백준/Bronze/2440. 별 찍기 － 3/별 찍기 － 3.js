const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

for(let i = N; i > 0; i--){
    console.log('*'.repeat(i));
}