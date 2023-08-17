import math

def solution(n):
    x = math.sqrt(n);
    return (x + 1)**2 if x == int(x) else -1 ;