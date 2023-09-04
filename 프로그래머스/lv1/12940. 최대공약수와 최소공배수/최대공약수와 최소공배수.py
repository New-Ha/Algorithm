def gcd(a, b):
    if b == 0: return a;
    return gcd(b, a % b)

def lcm(a, b):
    return a * b / gcd(a, b);

def solution(n, m):
    return [gcd(n, m), lcm(n, m)]