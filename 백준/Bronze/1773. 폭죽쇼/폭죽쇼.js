const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, C] = input[0].split(' ').map(Number);
const intervals = input.slice(1).map(Number);

const fireworkTimes = Array(C + 1).fill(false);

for(const interval of intervals){
    for(let i = interval; i <= C; i++){
        if(i % interval === 0) fireworkTimes[i] = true;
    }
}

let count = 0;
for (let i = 1; i <= C; i++) {
    if (fireworkTimes[i]) count++;
}

console.log(count)