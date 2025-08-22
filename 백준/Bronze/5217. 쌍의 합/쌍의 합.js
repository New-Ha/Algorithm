const fs = require('fs');
const [T, ...Ns] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const findPair = (n) => {
    const pairs = [];
    
    let left = 1;
    let right = n - 1;
    while(left < right){
        if(left + right === n){
            pairs.push(`${left} ${right}`);
            left++;
            right--;
        } else if(left + right > n){
            right--;
        } else if (left + right < n){
            left++;
        }
    }
    
    return pairs.join(', ')
}

for(let n of Ns){
    const result = findPair(n);
    console.log(`Pairs for ${n}: ${result}`)
}