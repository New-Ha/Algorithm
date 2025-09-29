const fs = require('fs');
const [N, ...plays] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let max = 0;
for(const p of plays){
    const dice = p.split(' ').map(Number);
    const countMap = new Map();
    for(const n of dice){
        countMap.set(n, (countMap.get(n) || 0) + 1);
    }
    
    const vals = [...countMap.values()];
    let score = 0;
    if(vals.includes(4)){
        const [num] = [...countMap.keys()].filter(k => countMap.get(k) === 4);
        score = 50000 + num * 5000;
    } else if(vals.includes(3)){
        const [num] = [...countMap.keys()].filter(k => countMap.get(k) === 3);
        score = 10000 + num * 1000;
    } else if(vals.filter(v => v === 2).length === 2){
        const nums = [...countMap.keys()].filter(k => countMap.get(k) === 2);
        score = 2000 + nums[0] * 500 + nums[1] * 500;
    } else if (vals.includes(2)) {
        const [num] = [...countMap.keys()].filter(k => countMap.get(k) === 2);
        score = 1000 + num * 100;
    } else {
        const maxNum = Math.max(...dice);
        score = maxNum * 100;
    }
    
    max = Math.max(max, score);
}

console.log(max);