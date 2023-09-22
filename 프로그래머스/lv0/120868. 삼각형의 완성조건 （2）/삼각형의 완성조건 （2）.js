function solution(sides) {
    // const sorted = sides.sort((a, b) => a- b);
    return 2 * Math.min(...sides) - 1;
}