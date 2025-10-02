const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

for(let i = N; i > 0; i--){
    console.log(i)
}