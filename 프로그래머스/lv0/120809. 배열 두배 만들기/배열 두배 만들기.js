function solution(numbers) {
    // return numbers.map(el => el * 2)
    return numbers.reduce((acc, cur) => [...acc, cur * 2], []);
}