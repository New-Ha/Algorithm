def solution(numbers):
    numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for i in range(10):
        numbers = numbers.replace(numStr[i], str(i))
    return int(numbers)