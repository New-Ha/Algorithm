def solution(my_string, indices):
    return ''.join([my_string[x] for x in range(len(my_string)) if x not in indices])