function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b)
}

function solution(n, m) {
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return [gcd(n, m), lcm(n, m)]
}