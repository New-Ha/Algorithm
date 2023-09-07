function solution(s) {
    const strArr = s.split(' ');
    strArr.filter((el, idx) => el === 'Z' ? strArr[idx - 1] = '' : el)
    return strArr.reduce((acc, cur) => cur !== 'Z' ? acc + Number(cur) : acc, 0)
}