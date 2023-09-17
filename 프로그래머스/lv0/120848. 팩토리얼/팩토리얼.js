function solution(n) {
    let count = 0;
    for (let i = 1; i <= n ; i++) {
        n /= i;
        count++;
    }
    return count
}