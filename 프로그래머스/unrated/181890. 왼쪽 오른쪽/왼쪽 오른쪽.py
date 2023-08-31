def solution(str_list):
    # ver 1
    # haveStr = [21, 21]
    # if 'l' in str_list:
    #     haveStr[0] = str_list.index('l')
    # if 'r' in str_list:
    #     haveStr[1] = str_list.index('r')
    # return [] if haveStr == [-1, -1] else str_list[: haveStr[0]] if haveStr[0] < haveStr[1] else str_list[haveStr[1] + 1:]
    
    # ver 2
    for i in range(len(str_list)):
        if str_list[i] == 'l': return str_list[:i]
        if str_list[i] == 'r': return str_list[i + 1:]
    return []