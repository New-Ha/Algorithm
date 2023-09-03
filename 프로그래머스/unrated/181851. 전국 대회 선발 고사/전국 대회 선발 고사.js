function solution(rank, attendance) {
    //ver 1
    // const possible = {}
    // attendance.map((el, idx) => el ? possible[idx] = rank[idx] : "")
    // const pickArr = Object.entries(possible).sort((a, b) => a[1] - b[1])
    // return 10000 * Number(pickArr[0][0]) + 100 * Number(pickArr[1][0]) + Number(pickArr[2][0])
    
    //ver 2
    const possible = rank.map((el, idx) => [el, idx, attendance[idx]])
                    .filter(el => el[2] === true)
                    .sort((a, b) => a[0] - b[0]);
    
    return 10000 * possible[0][1] + 100 * possible[1][1] + possible[2][1]
}