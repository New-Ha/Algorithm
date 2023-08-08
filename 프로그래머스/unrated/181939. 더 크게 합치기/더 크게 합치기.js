function solution(a, b) {
    const x = String(a) + b
    const y = String(b) + a
    return x > y ? Number(x) : Number(y)
}