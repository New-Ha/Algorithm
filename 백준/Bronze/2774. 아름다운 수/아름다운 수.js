const fs = require('fs');
const [T, ...Xs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(const X of Xs){
    const nums = new Set(X);
    console.log(nums.size)
}