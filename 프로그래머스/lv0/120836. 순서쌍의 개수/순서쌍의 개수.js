function solution(n) {
    const sqrt = Math.sqrt(n);
    let result = 0;
    for(let i = 1; i <= sqrt; i++){
        if(n % i === 0) result++
    }
    return sqrt === Math.floor(sqrt) ? result * 2 - 1 : result * 2
}