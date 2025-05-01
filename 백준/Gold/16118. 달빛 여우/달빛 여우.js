const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b, d] = input[i].split(" ").map(Number);
  graph[a].push([b, d * 2]); 
  graph[b].push([a, d * 2]);
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent][0] <= this.heap[index][0]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  pop() {
    const top = this.heap[0];
    const bottom = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this.bubbleDown();
    }
    return top;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }

      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstraFox() {
  const dist = Array(N + 1).fill(1e9);
  dist[1] = 0;

  const pq = new MinHeap();
  pq.insert([0, 1]); 

  while (!pq.isEmpty()) {
    const [curCost, curNode] = pq.pop();

    if (dist[curNode] < curCost) continue;

    for (const [nextNode, weight] of graph[curNode]) {
      const nextCost = curCost + weight;
      if (dist[nextNode] > nextCost) {
        dist[nextNode] = nextCost;
        pq.insert([nextCost, nextNode]);
      }
    }
  }

  return dist;
}

function dijkstraWolf() {
  const dist = Array.from({ length: N + 1 }, () => [1e9, 1e9]);
  dist[1][0] = 0;

  const pq = new MinHeap();
  pq.insert([0, 1, 0]); 

  while (!pq.isEmpty()) {
    const [curCost, curNode, speed] = pq.pop();

    if (dist[curNode][speed] < curCost) continue;

    for (const [nextNode, weight] of graph[curNode]) {
      const nextSpeed = speed === 0 ? 1 : 0;
      const nextCost = curCost + (speed === 0 ? weight / 2 : weight * 2);
      if (dist[nextNode][nextSpeed] > nextCost) {
        dist[nextNode][nextSpeed] = nextCost;
        pq.insert([nextCost, nextNode, nextSpeed]);
      }
    }
  }

  return dist;
}

const fox = dijkstraFox();
const wolf = dijkstraWolf();

let count = 0;
for (let i = 2; i <= N; i++) {
  const wolfMin = Math.min(wolf[i][0], wolf[i][1]);
  if (fox[i] < wolfMin) count++;
}

console.log(count);
