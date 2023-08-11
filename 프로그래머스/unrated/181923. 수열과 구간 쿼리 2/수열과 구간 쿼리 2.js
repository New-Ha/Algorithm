function solution(arr, queries) {
    return queries.map(([start, end, limit]) => {
        const temp = [...arr].slice(start, end+1).filter(el => el > limit).sort((a, b) => a - b)
        return temp.length !== 0 ? temp[0] : -1
    })
}