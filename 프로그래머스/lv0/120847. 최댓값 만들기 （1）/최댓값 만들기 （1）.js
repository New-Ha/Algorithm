function solution(numbers) {
    const numList = numbers.sort((a, b) => b - a)
    return numList[0] * numList[1]
}