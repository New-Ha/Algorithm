def solution(s):
    numList = sorted(list(map(int, s.split(' '))));
    return str(numList[0]) + ' ' + str(numList[-1])