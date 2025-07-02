const fs = require("fs");
const [X, Y] = fs.readFileSync("/dev/stdin").toString().trim().split(' ');


const getRev = (str) => {
    return Number(str.split('').reverse().join(''));
}

const sum = getRev(X) + getRev(Y);
const result = getRev(String(sum));

console.log(result);