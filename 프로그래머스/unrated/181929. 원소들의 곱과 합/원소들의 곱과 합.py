from functools import reduce

def solution(num_list):
    sumPow = sum(num_list)**2
    muti = reduce(lambda a, c: a * c, num_list)
    return 1 if muti < sumPow else 0