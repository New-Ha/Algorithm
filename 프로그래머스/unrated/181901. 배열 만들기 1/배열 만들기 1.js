function solution(n, k) {
    const result = [];
    for(let i = k; i <= n; i++){
        if(i % k === 0) result.push(i);
    }
    return result
}