const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for (const line of input) {
    if (line === "#") break;

    const ch = line[0];
    const str = line.slice(2).toLowerCase();

    const count = [...str].filter(el => el === ch).length;
    console.log(`${ch} ${count}`);
}