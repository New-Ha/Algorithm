def solution(s):
    strList = s.split(' ');
    for i in range(len(strList)):
        if strList[i] == 'Z':
            strList[i - 1] = 0
            strList[i] = 0
        else: strList[i] = int(strList[i])
    return sum(strList)