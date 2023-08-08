function solution(x, n) {
    return new Array(n).fill(x).map((el, idx) => x*(idx+1))
}