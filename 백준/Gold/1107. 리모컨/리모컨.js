const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);
const brokenSet = new Set(input[2] ? input[2].split(' ') : []);

function isPossible (num){
    const str = num.toString();
    for(let i = 0; i < str.length; i++){
        if(brokenSet.has(str[i])) return false;
    }
    return true;
}

let minPress = Math.abs(N - 100);
for(let i = 0; i <= 999999; i++){
    if(isPossible(i)){
        const pressCount = i.toString().length + Math.abs(i - N);
        minPress = Math.min(minPress, pressCount);
    }
}

console.log(minPress)