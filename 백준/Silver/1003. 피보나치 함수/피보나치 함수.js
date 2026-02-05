const fs = require('fs'); 
const [T, ...Ns] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

const fibo = []
fibo[0] = [1, 0];
fibo[1] = [0, 1];
for(let n = 2; n <= Math.max(...Ns); n++){
    const z = fibo[n - 1][0] + fibo[n - 2][0]
    const o = fibo[n - 1][1] + fibo[n - 2][1]
    fibo.push([z, o])
}

for(const N of Ns){
    console.log(fibo[N].join(' '))
}