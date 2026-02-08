const fs = require('fs'); 
let [n, dasom, ...others] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

others.sort((a, b) => b - a);

let count = 0;
while (others.length > 0 && others[0] >= dasom) {
    others[0]--;
    dasom++;
    count++;

    others.sort((a, b) => b - a);
}

console.log(count);