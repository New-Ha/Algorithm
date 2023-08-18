function solution(strArr) {
    return strArr.map((el, idx) => idx % 2 == 1 ? el.toUpperCase() : el.toLowerCase())
}