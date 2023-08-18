def solution(my_string, is_suffix):
    suffix = [my_string[i:] for i in range(len(my_string))]
    return +(is_suffix in suffix)