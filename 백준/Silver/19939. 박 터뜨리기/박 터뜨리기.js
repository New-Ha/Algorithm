const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let [N, K] = input.split(' ').map(Number);

const buckets = Array(K + 1).fill(0);

for(let i = 1; i < K + 1; i++){
    buckets[i] = i;
    N -= i;
}

if(N < 0){
    console.log(-1)
} else {
    while(N > 0){
        for(let i = K; i >= 1; i--){
            buckets[i] += 1;
            N--;
            
            if(N === 0) break;
        }
    }
    console.log(buckets[K] - buckets[1])
}