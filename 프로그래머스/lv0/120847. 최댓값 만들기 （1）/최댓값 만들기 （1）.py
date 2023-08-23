def solution(numbers):
    sortList = list(reversed(sorted(numbers)))
    return sortList[0] * sortList[1]