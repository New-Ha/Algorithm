def solution(s):
    str = s.lower();
    return len(str.split('p')) == len(str.split('y'))