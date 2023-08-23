def solution(n):
    sqrt = int(n ** 0.5)
    result = len([i for i in range(1, sqrt + 1) if n % i == 0]) * 2
    return  result - 1 if sqrt == n ** 0.5 else result

    #return len(list(filter(lambda v: n % (v+1) == 0, range(n))))