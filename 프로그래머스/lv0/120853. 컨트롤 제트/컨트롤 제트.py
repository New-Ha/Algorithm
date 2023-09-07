def solution(s):
    strList = s.split(' ');
    for i in range(len(strList)):
        if strList[i] == 'Z':
            strList[i] = int(strList[i - 1]) * -1
        else: strList[i] = int(strList[i])
    return sum(strList)