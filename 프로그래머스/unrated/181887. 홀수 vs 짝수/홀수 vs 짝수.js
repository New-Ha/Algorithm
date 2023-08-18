function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    num_list.forEach((el, idx) => idx % 2 === 0 ? oddSum += el : evenSum += el)
    return Math.max(oddSum, evenSum)
}