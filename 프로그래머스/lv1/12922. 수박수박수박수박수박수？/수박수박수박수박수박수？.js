function solution(n) {
    const result = new Array(n).fill(0)
    return result.map((el,idx) => idx % 2 === 0 ? "수" : "박").join('')
}