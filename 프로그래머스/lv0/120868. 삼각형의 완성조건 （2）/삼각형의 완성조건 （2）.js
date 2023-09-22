function solution(sides) {
    // b - (b - a) + (a + b - 1) - b;
    // - b + a + a + b - 1;
    // 2a - 1;
    
    return 2 * Math.min(...sides) - 1;
}