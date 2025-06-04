const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let count = 0;
for(let i = 0; i < input.length; i++){
    for(let j = 0; j < input[0].length; j++){
        if((i + j) % 2 === 0 && input[i][j] === 'F'){
            count++
        }
    }
}

console.log(count)