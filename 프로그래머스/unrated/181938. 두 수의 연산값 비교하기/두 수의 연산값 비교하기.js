function solution(a, b) {
    const x = Number(a + '' + b)
    const y = 2 * a * b
    return x < y ? y : x
}