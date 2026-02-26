const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const scores = [6, 3, 2, 1, 2]

const result = [];
for(const line of input){
    const [T, F, S, P, C] = line.split(' ').map((v, i) => Number(v) * scores[i]);
    const boxScore = T + F + S + P + C
    result.push(boxScore)
}
console.log(result.join(' '))