function solution(strArr) {
    const count = [0];
    strArr.forEach(el => count[el.length] ? count[el.length] += 1 : count[el.length] = 1)
    return Math.max(...count)
}