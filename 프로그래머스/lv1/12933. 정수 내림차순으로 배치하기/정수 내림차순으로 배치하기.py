def solution(n):
    return int(''.join(sorted(list(map(str,list(map(int,list(str(n)))))), reverse = True)))