const fs = require('fs');
const [jinho, n, ...friends] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 1 - 96ms
//console.log(friends.filter(f => f === jinho).length)

// 2 - 100ms
//console.log(friends.reduce((a, c) => c === jinho ? a + 1 : a, 0))

// 3 - 96ms
let count = 0;
for(let i = 0; i < Number(n); i++){
    if(jinho === friends[i]) count++
}
console.log(count)