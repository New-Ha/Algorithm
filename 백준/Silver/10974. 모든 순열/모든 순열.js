const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const visited = Array(N + 1).fill(false);
const path = [];

function getCombinations() {
  if (path.length === N) {
    console.log(path.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    path.push(i);
    getCombinations();
    path.pop();
    visited[i] = false;
  }
}

getCombinations();