const fs = require("fs");
const [N, ...cars] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for (const car of cars) {
    const [alphaStr, numStr] = car.split('-');

    const alphaNum = alphaStr
        .split('')
        .map((ch, i) => (ch.charCodeAt(0) - 65) * (26 ** (2 - i)))
        .reduce((a, c) => a + c, 0);

    const num = Number(numStr);

    console.log(Math.abs(alphaNum - num) <= 100 ? "nice" : "not nice");
}