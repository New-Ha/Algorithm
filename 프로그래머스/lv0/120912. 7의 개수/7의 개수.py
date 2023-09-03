def solution(array):
    return len([y for x in [list(str(n)) for n in array] for y in x if y == '7']);
    