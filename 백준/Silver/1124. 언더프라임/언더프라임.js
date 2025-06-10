const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [A, B] = input.split(' ').map(Number);

function isPrime(n){
	if(n < 2) return false;
	
	for(let i = 2; i * i <= n; i++){
        
		if (n % i === 0) return false;
	}
	
	return true;
}

function primeFactorization(n){
    const result = [];
    
    for(let i = 2; i * i <= n; i++){
        while (n % i === 0) {
          result.push(i);
          n /= i;
        }
    }
    
    if (n > 1) result.push(n);
    return result;
}

let count = 0;
for(let i = A; i <= B; i++){
    const list = primeFactorization(i);
    if(isPrime(list.length)) count++;
}

console.log(count)