function solution(n) {
    const sorted = String(n).split('').map(el => Number(el)).sort((a, b) => b - a)
    return Number(sorted.join(''))
}