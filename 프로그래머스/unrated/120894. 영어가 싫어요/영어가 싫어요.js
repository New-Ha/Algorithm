function solution(numbers) {
    const numStr = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(let i = 0; i < 11 ; i++) {
        if(numbers.includes(numStr[i])) {
           numbers = numbers.replaceAll(numStr[i], i);
        }
    }
    return Number(numbers)
}