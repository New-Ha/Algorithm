function solution(arr, idx) {
    arr = arr.slice(idx);
    return arr.indexOf(1) === -1 ? -1 : arr.indexOf(1) + idx

    // return a.indexOf(1,i)
}