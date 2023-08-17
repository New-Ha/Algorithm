function solution(a, b) {
    // if(a % 2 === 1 && b % 2 === 1) return a**2 + b**2
    // else if(a % 2 === 1 || b % 2 === 1) return 2 * (a + b)
    // else return Math.abs(a - b)
    
    const isOdd = (num) => {
        return num % 2 === 1;
    }
    
    return isOdd(a) && isOdd(b) ? a**2 + b**2 : isOdd(a) || isOdd(b) ? 2 * (a + b) : Math.abs(a - b);
}