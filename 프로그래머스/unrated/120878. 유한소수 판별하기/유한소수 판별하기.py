def solution(a, b):
    if b == 1: return 1

    while b > 1:
        if b % 2 != 0 and b % 5 != 0:
            if a % b == 0: return 1
            else: return 2
        if b % 2 == 0: b /= 2;
        if b % 5 == 0: b /= 5;
    return 1