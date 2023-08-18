function solution(numbers) {
//     const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     return zeroToNine.filter(el => !numbers.includes(el)).reduce((acc, cur) => acc + cur, 0)
    
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0)
}