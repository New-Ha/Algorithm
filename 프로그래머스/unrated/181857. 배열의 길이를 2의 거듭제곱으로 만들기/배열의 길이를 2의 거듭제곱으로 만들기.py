import math
def solution(arr):
    lenNum = 2 ** math.ceil(math.log2(len(arr)));
    result = [arr[idx] if idx < len(arr) else 0 for idx in range(lenNum)]

    return arr if len(arr) == 1 else result
