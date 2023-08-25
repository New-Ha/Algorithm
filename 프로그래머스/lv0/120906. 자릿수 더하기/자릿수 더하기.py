def solution(n):
    # return sum(list(map(int, str(n))))
    return sum(int(i) for i in str(n))