def solution(numbers):
    sortList = list(sorted(numbers))
    return max(sortList[0] * sortList[1], sortList[-1] * sortList[-2])