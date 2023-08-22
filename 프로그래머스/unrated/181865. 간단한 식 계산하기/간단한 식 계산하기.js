function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    return op === '+' ? Number(a) + Number(b) : op === '-' ? a - b : a * b
}