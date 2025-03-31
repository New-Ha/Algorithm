const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const [a, b] = input.split(" ").map(v => Number(v));
const range = Array(b - a + 1).fill(0).map((e, i) => e = i + a)

const isPrime = (num) => {
    if(num <= 1) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

const result = range.filter(el => isPrime(el))
console.log(result.join("\n"));