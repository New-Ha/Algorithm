const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0].split(' ')[0])
const K = Number(input[0].split(' ')[1])
const temperatures = input[1].split(' ').map(temperature => Number(temperature))

let result = -Infinity;;

for(let i = 0; i <= N - K; i++){
    let temp = 0;
    for(let j = 0; j < K; j++){
        temp += temperatures[i + j]
    }
    result = Math.max(result, temp)
}

console.log(result)