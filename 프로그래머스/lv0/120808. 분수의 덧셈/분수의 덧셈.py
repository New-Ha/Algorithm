def getGCD(n1, n2):
    return n1 if n2 == 0 else getGCD(n2, n1 % n2);

def solution(numer1, denom1, numer2, denom2):
    [numer, denom] = [(numer1 * denom2) + (numer2 * denom1),(denom1 * denom2)];
    gcd = getGCD(numer, denom);
    return [numer/gcd, denom/gcd]