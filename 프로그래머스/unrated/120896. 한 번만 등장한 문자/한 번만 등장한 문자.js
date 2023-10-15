function solution(s) {
    return [...s].filter(el => s.split(el).length === 2).sort().join('')
}