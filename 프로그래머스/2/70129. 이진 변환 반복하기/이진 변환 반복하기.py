def solution(s):
    count = 0;
    zero = 0;
    
    while len(s) > 1:
        newS = '';
        for i in s:
            if i == '0': zero += 1;
            if i == '1': newS += '1';
        s = format(len(newS), 'b')
        count += 1

    return [count, zero]
