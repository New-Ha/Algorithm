function solution(a, b) {
    return a + '' + b > b + '' + a ? Number(a + '' + b) : Number(b + '' + a)
}