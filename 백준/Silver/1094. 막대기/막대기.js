const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const X = Number(input).toString(2);
const result = X.split('').filter(n => n === '1').length;

console.log(result);
