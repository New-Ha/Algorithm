def solution(l, r):
    result = [];
    for i in range(l, r+1):
        temp = list(str(i));
        isFive = list(map(lambda el: 'True' if el == '0' or el == '5' else 'False', temp));
        if 'False' not in isFive: result.append(i)
        
    return [-1] if len(result) == 0 else result