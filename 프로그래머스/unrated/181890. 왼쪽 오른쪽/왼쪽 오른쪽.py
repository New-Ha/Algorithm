def solution(str_list):
    haveStr = [21, 21]
    if 'l' in str_list:
        haveStr[0] = str_list.index('l')
    if 'r' in str_list:
        haveStr[1] = str_list.index('r')
    return [] if haveStr == [-1, -1] else str_list[0: haveStr[0]] if haveStr[0] < haveStr[1] else str_list[haveStr[1] + 1:]