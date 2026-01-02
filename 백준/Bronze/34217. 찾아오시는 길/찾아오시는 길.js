const fs = require('fs'); 
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const times = Array(2).fill(0);
for(const line of input){
    const [h, y] = line.split(' ').map(Number);
    times[0] += h;
    times[1] += y;
}

console.log(times[0] > times[1] ? "Yongdap" : times[0] < times[1] ? "Hanyang Univ." : "Either")