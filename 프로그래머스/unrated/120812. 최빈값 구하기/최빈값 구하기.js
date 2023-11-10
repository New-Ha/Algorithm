function solution(array) {
    const count = {};
    array.forEach(el => count[el] ? count[el]++ : count[el] = 1)
    
    const keys = Object.keys(count)
    const values = Object.values(count)
    const max = Math.max(...values)
    const maxs = keys.filter(el => count[el] === max)
    return maxs.length >= 2 ? -1 : Number(maxs)
}