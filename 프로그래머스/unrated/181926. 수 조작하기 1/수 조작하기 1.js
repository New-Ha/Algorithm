function solution(n, control) {
    const direction = {"w": 1, "s": -1, "d": 10, "a": -10}
    return control.split('').reduce((acc, cur) => acc + direction[cur], n)
}