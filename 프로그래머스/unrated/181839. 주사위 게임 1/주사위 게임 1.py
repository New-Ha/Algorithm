def solution(a, b):
    def isOdd(num):
        return num % 2 == 1;
    
    if isOdd(a) & isOdd(b):
        return a**2 + b**2;
    elif isOdd(a) | isOdd(b):
        return 2 * (a + b);
    else:
        return abs(a - b)