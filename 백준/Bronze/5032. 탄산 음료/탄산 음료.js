const fs = require('fs');
const [e, f, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let bottle = e + f;
let soda = 0;

while(bottle >= c){
    soda++;
    bottle = bottle - c + 1;
}

console.log(soda)