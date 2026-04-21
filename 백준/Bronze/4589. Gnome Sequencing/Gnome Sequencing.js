const fs = require('fs');
const [N, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const isOrdered = (a, b, c) => {
    if ((a >= b && b >= c) || (a <= b && b <= c)) {
        return 'Ordered';
    } else {
        return 'Unordered';
    }
};

console.log('Gnomes:');
for (const line of input) {
    const [a, b, c] = line.split(' ').map(Number);
    console.log(isOrdered(a, b, c));
}