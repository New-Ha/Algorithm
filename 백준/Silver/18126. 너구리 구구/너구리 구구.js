const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input[0]);
const adjacencyList = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < input.length; i++) {
  const [from, to, weight] = input[i].split(' ').map(Number);
  adjacencyList[from].push([to, weight]);
  adjacencyList[to].push([from, weight]);
}

let maxDistance = 0;

function explore(curNode, parentNode, distance) {
  maxDistance = Math.max(maxDistance, distance);

  for (const [nextNode, weight] of adjacencyList[curNode]) {
    if (nextNode !== parentNode) {
      explore(nextNode, curNode, distance + weight);
    }
  }
}

explore(1, 0, 0);
console.log(maxDistance);
