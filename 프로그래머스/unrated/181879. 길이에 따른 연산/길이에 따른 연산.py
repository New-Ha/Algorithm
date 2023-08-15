from functools import reduce

def solution(num_list):
    # if len(num_list) >= 11:
    #     return sum(num_list)
    # else:
    #     return reduce(lambda a, c: a * c, num_list)
    
    return sum(num_list) if len(num_list) >= 11 else reduce(lambda a, c: a* c, num_list)