def solution(n):
    arr = [i if i >= 2 else 0 for i in range(n + 1)]
    for i in range(2, int(n**0.5) + 1):
        for j in range(i*2, n + 1, i):
            if arr[j] == 0: continue;
            if arr[j] % i == 0: arr[j] = 0
    return len([i for i in arr if i != 0])