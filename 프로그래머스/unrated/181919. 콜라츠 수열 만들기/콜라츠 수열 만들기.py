def solution(n, arr = []): 
    arr.append(n);
    if n == 1:
        return arr;
    if n % 2 == 0:
        return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
    
    