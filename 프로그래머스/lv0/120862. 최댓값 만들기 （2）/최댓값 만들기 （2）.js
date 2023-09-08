function solution(numbers) {
    const top1 = numbers.sort((a, b) => a - b).slice(-2);
    const top2 = numbers.sort((a, b) => a - b).slice(0, 2);
    return Math.max(top1[0] * top1[1], top2[0] * top2[1])
}