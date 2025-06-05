const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const origin = Number(input);

let count = 0;
let n = origin;

while(true){
    const newN = ((n % 10) * 10) + ((Math.floor(n / 10) + (n %10)) % 10);
    count++;
    
    if(newN === origin) break;
    n = newN;
}

console.log(count)