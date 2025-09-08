const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

for(let i = 1; i <= Number(input[0]); i++){
    console.log(`${i}. ${input[i]}`)
}