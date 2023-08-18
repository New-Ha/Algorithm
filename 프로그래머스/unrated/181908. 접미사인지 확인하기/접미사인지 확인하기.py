def solution(my_string, is_suffix):
    suffix = [my_string[i:] for i in range(len(my_string))]
    return +(is_suffix in suffix)

    # if my_string[-len(is_suffix):] == is_suffix: return 1
    # return 0
    
    # return int(my_string.endswith(is_suffix))
    