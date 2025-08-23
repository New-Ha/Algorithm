const fs = require('fs');
const [N, F] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let result = Math.floor(N / 100) * 100;

for (let i = 0; i < 100; i++) {
    if ((result + i) % F === 0) {
        console.log(String(i).padStart(2, '0'));
        break;
    }
}
