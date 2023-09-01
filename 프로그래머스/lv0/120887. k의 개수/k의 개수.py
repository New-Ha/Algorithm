def solution(i, j, k):
    # return sum([1 for n in range(i, j + 1) for x in list(str(n)) if str(k) in x])
    return sum([ str(n).count(str(k)) for n in range(i, j + 1)])