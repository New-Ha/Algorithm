const fs = require('fs');
const [D, H, W] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// D² = (H * scal)² + (W * scal)²
// D² = (H² + W²) * scal²
// D = Math.squr((H² + W²) * scal²)
// scal² = D² / (H² + W²)
// scal = D /  Math.squr((H² + W²))

const scal = D / Math.sqrt(H ** 2 + W ** 2);
console.log(`${Math.floor(H * scal)} ${Math.floor(W * scal)}`)