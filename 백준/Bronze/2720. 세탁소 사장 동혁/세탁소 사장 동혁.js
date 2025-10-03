const fs = require('fs');
const [T, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const coins = [25, 10, 5, 1];

for(let change of lines){
    const result = [];
    
    for(const coin of coins){
        result.push(Math.floor(change/coin));
        change = change % coin;
    }
    
    console.log(result.join(' '));
}