def solution(polynomial):
    splited = polynomial.split(' + ');
    n = sum([int(i) for i in splited if 'x' not in i])
    xnum = sum([1 if i == 'x' else int(i[0:-1]) for i in splited if 'x' in i])
    
    if xnum == 0:
        return str(n)
    elif xnum == 1:
        return 'x + '+str(n) if n != 0 else 'x'
    else:
        return str(xnum)+'x + '+ str(n) if n != 0 else str(xnum)+'x'