def solution(n):
    # numList = list(map(int, list(str(n))));
    # strList = list(map(str, sorted(numList, reverse = True)));
    # return int("".join(strList))

    return int(''.join(sorted(list(map(str,list(map(int,list(str(n)))))), reverse = True)))