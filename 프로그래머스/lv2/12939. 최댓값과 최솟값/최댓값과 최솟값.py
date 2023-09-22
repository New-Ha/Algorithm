def solution(s):
    numList = sorted(list(map(lambda el: int(el), s.split(' '))));
    return str(numList[0]) + ' ' + str(numList[-1])