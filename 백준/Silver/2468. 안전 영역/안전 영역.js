const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const matrix = input.slice(1).map(line => line.split(' ').map(Number));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let visited;

function bfs(sy, sx, height) {
  const queue = [];
  queue.push([sy, sx]);
  visited[sy][sx] = true;

  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (
        ny >= 0 && ny < N &&
        nx >= 0 && nx < N &&
        !visited[ny][nx] &&
        matrix[ny][nx] > height
      ) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
}

function getNum(height) {
  visited = Array.from({ length: N }, () => Array(N).fill(false));

  let count = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!visited[y][x] && matrix[y][x] > height) {
        bfs(y, x, height);
        count++;
      }
    }
  }

  return count;
}

let answer = 0;
for (let h = 0; h <= 100; h++) {
  answer = Math.max(answer, getNum(h));
}

console.log(answer);
