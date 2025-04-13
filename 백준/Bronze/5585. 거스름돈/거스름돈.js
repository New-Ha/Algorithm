const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let charge = 1000 - Number(input);
let coins = [500, 100, 50, 10, 5, 1];
let count = 0;


for(let coin of coins){
    count += Math.floor(charge / coin);
    charge -= coin * Math.floor(charge/coin);
}

console.log(count);

