function solution(arr, queries) {
    queries.map(el => {
        let tmp = arr[el[0]];
        arr[el[0]] = arr[el[1]];
        arr[el[1]] = tmp;
    })
    return arr
}