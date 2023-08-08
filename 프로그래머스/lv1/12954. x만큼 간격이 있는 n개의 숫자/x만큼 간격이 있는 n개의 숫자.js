function solution(x, n) {
    return Array(n).fill(x).map((el, idx) => x*(idx+1))
}