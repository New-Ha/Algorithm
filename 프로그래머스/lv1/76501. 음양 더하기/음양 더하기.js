function solution(absolutes, signs) {
    return signs.reduce((acc, cur, idx) => cur ? acc + absolutes[idx] : acc - absolutes[idx], 0)
}