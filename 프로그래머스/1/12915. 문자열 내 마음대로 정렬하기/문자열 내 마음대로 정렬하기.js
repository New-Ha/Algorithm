function solution(strings, n) {
    const sortedStr = strings.sort();
    const nSorted = sortedStr.map((el, idx) => [el[n], idx]).sort((a, b) => {
        if(a[0] === b[0]) {
            return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
        }else if(a[0] > b[0]) {
            return 1;
        }else {
            return -1;
        }
    })
    return nSorted.map(([_, idx]) => sortedStr[idx])
}