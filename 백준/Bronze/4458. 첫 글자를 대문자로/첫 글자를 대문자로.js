const fs = require('fs');
const [n, ...strings] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(const s of strings){
    const sArr = s.split('');
    sArr[0] = sArr[0].toUpperCase();
    console.log(sArr.join(''))
}