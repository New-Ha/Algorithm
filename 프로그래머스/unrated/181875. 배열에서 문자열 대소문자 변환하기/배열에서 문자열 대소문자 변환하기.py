def solution(strArr):
    return list(map(lambda e, i: e.upper() if i % 2 == 1 else e.lower(), strArr, list(x for x in range(len(strArr)))))