def solution(n, arr = []): 
    # arr.append(n);
    # if n == 1:
    #     return arr;
    # if n % 2 == 0:
    #     return solution(n / 2, arr)
    # return solution(3 * n + 1, arr)
    
    result = [n]
    while n > 1:
        if n % 2 == 0:
            n /= 2
        else:
            n = 3 * n + 1
        result.append(n)
    return result