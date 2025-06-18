const fs = require('fs');
const [W, H, f, c, x1, y1, x2, y2] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt); 

const overlapWidth = f < W - f ? f : W - f;
const height = y2 - y1;
const width = x2 - x1;
const layer = c + 1n;

let paintingArea = width * height * layer;

if (x2 <= overlapWidth) {
  paintingArea *= 2n;
} else if (x1 < overlapWidth && x2 > overlapWidth) {
  const left = overlapWidth - x1;
  const right = x2 - overlapWidth;

  paintingArea =
    left * height * layer * 2n +
    right * height * layer;
}

const total = W * H;
console.log((total - paintingArea).toString());
