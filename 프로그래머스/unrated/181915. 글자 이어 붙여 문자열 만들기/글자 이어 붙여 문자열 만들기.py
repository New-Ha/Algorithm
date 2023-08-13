def solution(my_string, index_list):
    return ''.join(list(map(lambda n : my_string[n], index_list)))

    # return ''.join([my_string[idx] for idx in index_list])