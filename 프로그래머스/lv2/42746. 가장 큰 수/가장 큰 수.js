function solution(numbers) {
    const sorted = numbers.map(el => String(el).repeat(3)).sort().reverse();
    const result = sorted.map(el => el.slice(0, el.length / 3)).join('')
    return Number(result) === 0 ? "0" : result
   
}