const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for(const line of input){
    let [N, B, M] = line.split(' ').map(Number);
    let count = 0;
    
    while(N < M){
        N += (N * 0.01 * B);
        count++;
    }
    
    console.log(count)
}