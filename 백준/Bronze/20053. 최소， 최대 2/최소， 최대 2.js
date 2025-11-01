const fs = require('fs');
const [T, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = []

for(let i = 1; i < input.length; i += 2){
    const nums = input[i].split(' ');
    
    let max = -Infinity;
    let min = Infinity;
    for(let j = 0; j < nums.length; j++){
        const cur = Number(nums[j]);
        if(max < cur) max = cur;
        if(min > cur) min = cur;
    }
    
    result.push(`${min} ${max}`)
}

console.log(result.join('\n'))