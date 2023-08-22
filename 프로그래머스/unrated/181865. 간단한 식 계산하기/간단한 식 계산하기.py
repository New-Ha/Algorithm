def solution(binomial):
    [a, op, b] = binomial.split(' ')
    return int(a) + int(b) if op == '+' else int(a) - int(b) if op == '-' else int(a) * int(b)