def solution(arr):
    return list(map(lambda el : el / 2 if el >= 50 and el % 2 == 0 else el * 2 if el < 50 and el % 2 == 1 else el, arr))