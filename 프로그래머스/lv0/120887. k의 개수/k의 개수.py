def solution(i, j, k):
    return sum([1 for n in range(i, j + 1) for y in list(str(n)) if str(k) in y])