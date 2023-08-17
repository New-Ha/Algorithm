def solution(arr):
    # return list(map(lambda el : el / 2 if el >= 50 and el % 2 == 0 else el * 2 if el < 50 and el % 2 == 1 else el, arr))

    return [n / 2 if n >= 50 and n % 2 == 0 else n * 2 if n < 50 and n % 2 == 1 else n for n in arr]