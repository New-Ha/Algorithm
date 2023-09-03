function solution(rank, attendance) {
    const possible = {}
    attendance.map((el, idx) => el ? possible[idx] = rank[idx] : "")
    const pickArr = Object.entries(possible).sort((a, b) => a[1] - b[1])
    return 10000 * Number(pickArr[0][0]) + 100 * Number(pickArr[1][0]) + Number(pickArr[2][0])
    
                                    
}