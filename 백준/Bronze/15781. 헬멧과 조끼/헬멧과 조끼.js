const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const bestHats = input[1].split(' ').map(BigInt).reduce((max, cur) => cur > max ? cur : max, 0);;
const bestVests = input[2].split(' ').map(BigInt).reduce((max, cur) => cur > max ? cur : max, 0);;

console.log(String(bestHats + bestVests))
