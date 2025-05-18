function isPrime(n){
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false
    }
    return true;
}

function solution(nums) {
    let count = 0;
    
    const getPrime = (start, temp) => {
        if(temp.length === 3){
            const sum = temp.reduce((a, c) => a + c, 0);
            if(isPrime(sum)) count++;
            return;
        }
        for(let i = start; i < nums.length; i++){
            getPrime(i + 1, [...temp, nums[i]]);
        }
    }
    
    getPrime(0, []);
    
    return count
    
}