def solution(arr, intervals):
    return [n for [start, end] in intervals for n in arr[start: end + 1]]