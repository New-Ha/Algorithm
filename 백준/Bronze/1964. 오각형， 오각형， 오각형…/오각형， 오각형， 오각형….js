const fs = require('fs');
const num = BigInt(fs.readFileSync('/dev/stdin').toString().trim());

// 1. 시뮬레이션
// let sum = 5n;
//
// if (num > 1n) {
// for (let i = 2n; i <= num; i++) {
//     const diff = 3n * (i - 1n) + 4n;
//     sum += diff;
//   }
// }
//
// console.log((sum % 45678n).toString());


// 2.
// num = 1일때, 5
// num = 2일때, 12 (+7 증가)
// num = 3일때, 22 (+10 증가)
// 등차수열에 따라 증가량 = 3(i − 1) + 4 = 3i + 1 (i ≥ 2부터) 가 됨.
// 따라서 정답은 (3n² + 5n + 2) / 2n 이 됨.

const result = ((3n * num * num) + (5n * num) + 2n) / 2n  % 45678n;
console.log(result.toString());


