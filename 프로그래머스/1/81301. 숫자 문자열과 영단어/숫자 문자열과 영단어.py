def solution(s):
    strNumber = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for i in range(len(strNumber)):
        s = s.replace(strNumber[i], str(i))
    
    return int(s)