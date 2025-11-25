const fs = require('fs');
const [first, ...input] = fs.readFileSync(0, 'utf8').trim().split('\n');
const [U, N] = first.split(' ').map(Number);  // U, N 안 써도 되지만 형식상 파싱

const priceMap = new Map();

for (const line of input) {
  const [name, strP] = line.split(' ');
  const P = Number(strP);

  if (!priceMap.has(P)) priceMap.set(P, []);
  priceMap.get(P).push(name);
}

let minCount = Infinity;
for (const names of priceMap.values()) {
  if (names.length < minCount) minCount = names.length;
}

const prices = [...priceMap.keys()].sort((a, b) => a - b);

for (const p of prices) {
  const names = priceMap.get(p);
  if (names.length === minCount) {
    console.log(names[0], p);
    break;
  }
}
