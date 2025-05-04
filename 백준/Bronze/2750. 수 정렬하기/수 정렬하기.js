const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = input.slice(1).sort((a, b) => a - b);

nums.forEach(num => console.log(num))