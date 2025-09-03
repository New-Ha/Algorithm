const fs = require('fs');
const coordinates = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const xSet = new Set()
const ySet = new Set();
for(const c of coordinates){
    const [x, y] = c.split(' ').map(Number);
    xSet.has(x) ? xSet.delete(x) : xSet.add(x);
    ySet.has(y) ? ySet.delete(y) : ySet.add(y);  
}

console.log([...xSet, ...ySet].join(' '));