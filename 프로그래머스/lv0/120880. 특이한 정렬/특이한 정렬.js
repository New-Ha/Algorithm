function solution(numlist, n) {
    const abslist = numlist.map(el => [Math.abs(n - el), el])
    abslist.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1]
        else return a[0] - b[0]
    })
    return abslist.map(el => el[1])
}