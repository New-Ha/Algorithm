function solution(n) {
    const cd = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0) cd.push(i)
    }
    return cd.reduce((acc, cur) => acc + cur, 0)
}