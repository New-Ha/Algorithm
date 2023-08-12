function solution(n) {
    const result = [n];
    while(n !== 1){
        n % 2 === 0 ? n /= 2 : n = 3 * n + 1;
        result.push(n)
    }
    return result
    
    // 재귀적 풀이
    // arr.push(n)
    // if (n === 1) return arr
    // if (n % 2 === 0) return solution(n / 2, arr)
    // return solution(3 * n + 1, arr)
}