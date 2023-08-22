def solution(my_string, m, c):
    str = my_string[c-1:]
    return str[::m]