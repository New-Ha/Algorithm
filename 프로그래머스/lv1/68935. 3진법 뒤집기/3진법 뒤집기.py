def changeNum(n, base):
        result = '';
        while n:
            result += str(n % base);
            n = n // base;
        return result

def solution(n):
    return int(changeNum(n, 3), 3)