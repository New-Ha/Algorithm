function solution(s) {
    const strNumber = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    strNumber.forEach((el, idx) => s = s.replaceAll(el, idx))
    return Number(s)
}