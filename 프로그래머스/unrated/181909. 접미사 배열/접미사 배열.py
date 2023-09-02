def solution(my_string):
    # result = [];
    # for i in range(len(my_string)):
    #     result.append(my_string[i:])
    # return sorted(result)

    return sorted([my_string[i:] for i in range(len(my_string))])
    