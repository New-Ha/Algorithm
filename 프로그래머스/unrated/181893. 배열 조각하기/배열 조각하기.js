function solution(arr, query) {
    const len = arr.length;
    query.forEach((el, idx) => idx % 2 === 0 ? arr.splice(el + 1, len - el) : arr.splice(0, el))
    return arr
}