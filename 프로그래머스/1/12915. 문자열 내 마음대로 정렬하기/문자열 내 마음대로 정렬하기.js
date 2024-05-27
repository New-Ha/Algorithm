function solution(strings, n) {
// case 1)
//     const sortedStr = strings.sort();
//     const nSorted = sortedStr.map((el, idx) => [el[n], idx]).sort((a, b) => {
//         if(a[0] === b[0]) {
//             return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
//         }else if(a[0] > b[0]) {
//             return 1;
//         }else {
//             return -1;
//         }
//     })
    
//     return nSorted.map(([_, idx]) => sortedStr[idx])

// case 2)
    return strings.map((el) => el[n] + el).sort().map(el => el.slice(1));
}