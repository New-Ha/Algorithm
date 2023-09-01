function solution(emergency) {
    const rank = [...emergency].sort((a, b) => b - a);
    return emergency.map(el => rank.indexOf(el) + 1)
}