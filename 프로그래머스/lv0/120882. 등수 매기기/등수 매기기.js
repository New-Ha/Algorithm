function solution(score) {
    const average = score.map(([e, m], idx) => (e + m) / 2);
    const rank = [...average].sort((a, b) => b - a);
    return average.map(el => rank.indexOf(el) + 1)
}
    