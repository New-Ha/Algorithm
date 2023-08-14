def solution(a, b, c, d):
    [a, b, c, d] = sorted([a, b, c, d])
    mySet = len(set([a, b, c, d]))
    
    if mySet == 1:
        return 1111 * a
    elif mySet == 2:
        if a == b & b == c:
            return (10 * a + d)**2
        elif b == c & c == d:
            return (10 * b + a)**2
        else:
            return (a + d) * abs(a - d)
    elif mySet == 3:
        if a == b:
            return c * d
        elif b == c:
            return a * d
        elif c == d:
            return a * b
    else:
        return a
