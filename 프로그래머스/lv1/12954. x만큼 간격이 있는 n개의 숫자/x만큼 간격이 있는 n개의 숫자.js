function solution(x, n) {
    const result = new Array(n).fill(1)
    return result.map((el, idx) => x*(idx+1))
}