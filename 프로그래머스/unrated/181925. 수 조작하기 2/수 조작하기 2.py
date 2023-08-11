def solution(numLog):
    result = '';
    memo = numLog[0]
    
    for n in numLog:
        if n == memo + 1:
            result += 'w'
            memo = n;
        elif n == memo - 1:
            result += 's'
            memo = n;
        elif n == memo + 10:
            result += 'd'
            memo = n;
        elif n == memo - 10:
            result += 'a'
            memo = n;
    
    return result
        
    