def solution(array):
    # ver 1
    # return len([y for x in [list(str(n)) for n in array] for y in x if y == '7']);

    #ver 2
    return ''.join(map(str, array)).count('7')
    