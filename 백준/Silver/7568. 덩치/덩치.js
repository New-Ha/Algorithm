const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const people = input.slice(1).map(line => line.split(' ').map(Number));

const rankArr = Array(N).fill(1);

for (let i = 0; i < N; i++) {
    const [cw, ch] = people[i];
    
    for (let j = 0; j < N; j++) {
        if (i === j) continue;
      
        const [tw, th] = people[j];
        if (cw < tw && ch < th) rankArr[i]++;
    }
}

console.log(rankArr.join(' '));