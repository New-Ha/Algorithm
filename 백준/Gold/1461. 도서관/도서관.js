const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const locations = input[1].split(' ').map(Number);
const minus = locations.filter(el => el < 0).sort((a, b) => a - b);
const plus = locations.filter(el => el > 0).sort((a, b) => b - a);

const steps = [];

for(let i = 0; i < minus.length; i += M){
    steps.push(Math.abs(minus[i]))
}

for(let i = 0; i < plus.length; i += M){
    steps.push(Math.abs(plus[i]))
}

let count = 0;
const max = Math.max(...steps)
for(let i = 0; i < steps.length; i++){

    if(steps[i] !== max){
        count += steps[i] * 2
    } else {
        count += steps[i]
    }
}

console.log(count)