const fs = require('fs');
const [M, N] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);


const numMap = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
}

const nums = []
for(let i = M; i <= N; i++){
    const strN = String(i).split('').map(n => numMap[n]).join(' ');
    nums.push({n: i, strN})
}

nums.sort((a, b) => a.strN.localeCompare(b.strN));

const result = nums.map(obj => obj.n);
for (let i = 0; i < result.length; i++) {
    process.stdout.write(result[i] + ' ');
    if ((i + 1) % 10 === 0) console.log();
}