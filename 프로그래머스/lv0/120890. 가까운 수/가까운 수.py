def solution(array, n):
    sort = sorted(array)
    # absList = [abs(n - i) for i in sort]
    # return sort[absList.index(min(absList))]

    return sorted(sort, key = lambda i: abs(n - i))[0]