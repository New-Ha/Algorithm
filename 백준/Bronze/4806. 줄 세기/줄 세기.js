const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').filter(line => line !== '');
console.log(input.length)