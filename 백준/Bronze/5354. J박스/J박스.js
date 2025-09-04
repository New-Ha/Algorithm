const fs = require('fs');
const [T, ...Js] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const makeBox = (n) => {
    const result = [];

    if (n === 1) {
        return '#';
    }

    const top = '#'.repeat(n);
    const mid = '#' + 'J'.repeat(n - 2) + '#';

    result.push(top);
    for (let i = 0; i < n - 2; i++) {
        result.push(mid);
    }
    result.push(top);

    return result.join('\n');
}

const result = Js.map(makeBox);
console.log(result.join('\n\n'));
