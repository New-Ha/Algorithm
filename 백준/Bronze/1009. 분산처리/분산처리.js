const fs = require("fs");
const [T, ...lines] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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

for(const line of lines){
    let [a, b] = line.split(" ").map(Number);
    a = a % 10;
    b = (b - 1) % pattern[a].length;
    console.log(pattern[a][b]);
}