const fs = require('fs');
const [seven25, N, ...others] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const stores = [seven25, ...others];
const result = Math.min(...stores.map(s => {
    const [Y, X] = s.split(' ').map(Number);
    return Y / X * 1000
}))

console.log(result.toFixed(2))