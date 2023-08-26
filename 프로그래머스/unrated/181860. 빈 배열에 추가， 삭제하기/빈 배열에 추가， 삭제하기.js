function solution(arr, flag) {
    const result = [];
    flag.forEach((el, idx) => el ? result.push(...Array(arr[idx] * 2).fill(arr[idx])) : result.splice(-arr[idx]))
    return result
}