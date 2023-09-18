def solution(a, b, n):
    cokes = 0;
    while n >= a:
        cokes += (n // a) * b;
        n = (n % a) + ((n // a) * b);
    return cokes