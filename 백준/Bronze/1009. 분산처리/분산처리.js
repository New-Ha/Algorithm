const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);

const pattern = {
    0: [10],
    1: [1],
    2: [2, 4, 8, 6],
    3: [3, 9, 7, 1],
    4: [4, 6],
    5: [5],
    6: [6],
    7: [7, 9, 3, 1],
    8: [8, 4, 2, 6],
    9: [9, 1],
};

for(let i = 1; i <= t; i++){
    let [a, b] = input[i].split(" ").map(Number);
    a = a % 10;
    b = (b - 1) % pattern[a].length;
    console.log(pattern[a][b]);
}