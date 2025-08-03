const fs = require('fs');
const [N, ...taps] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let computers = taps[0];
for(let i = 1; i < N; i++){
    computers += taps[i] - 1;
}

console.log(computers)