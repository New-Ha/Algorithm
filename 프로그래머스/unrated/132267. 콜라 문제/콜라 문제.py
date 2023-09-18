def solution(a, b, n):
    cokes = 0;
    while n >= a:
        temp = (n // a);
        cokes += temp * b;
        n = n - (temp * a) + (temp * b);
    return cokes