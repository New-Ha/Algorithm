def solution(arr, k):
    if k % 2 == 1:
        return list(map(lambda el: el * k, arr))
    else:
        return list(map(lambda el: el + k, arr))