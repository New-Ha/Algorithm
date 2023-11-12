function factorial(num) {
    if (num < 0) return -1;
    if (num === 0) return 1;
    return (num * factorial(num - 1));
}

function solution(balls, share) {
    let n = 1;
    for(let i = balls; i >= 1; i--){
        if(i === share) break;
        n *= i;
    }
    
    let m = 1;
    for(let i = balls - share; i >= 1; i--){
        m *= i;
    }
    
    return Math.floor(n / m)
}