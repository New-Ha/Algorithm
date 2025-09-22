const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()
const result = input.split(' ').map(n => Number(n)**2).reduce((a, c) => a + c, 0) % 10
console.log(result)