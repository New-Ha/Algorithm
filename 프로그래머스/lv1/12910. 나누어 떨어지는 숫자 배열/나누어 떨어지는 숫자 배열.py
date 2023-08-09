def solution(arr, divisor):
    result = sorted(list(filter(lambda x : x % divisor == 0, arr)))
    return result if len(result) else [-1]