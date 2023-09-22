function solution(sides) {
    const sorted = sides.sort((a, b) => a- b);
    return 2 * sorted[0] - 1;
}