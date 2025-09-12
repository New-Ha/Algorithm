const fs = require("fs");
const [jahwan, doctor] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
console.log(jahwan.length >= doctor.length ? 'go' : 'no')