function solution(a, d, included) {
    return included.reduce((acc, cur, idx) => cur === true ? acc + a + (d * idx) : acc + 0, 0)
}