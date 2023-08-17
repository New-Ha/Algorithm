def solution(num_list, n):
    # ver 1
    # result = [];
    # for i in range(len(num_list)):
    #     if i % n == 0:
    #         result.append(num_list[i]);
    # return result;

    # ver 2
    # return [num_list[i] for i in range(0,len(num_list),n)]

    #ver 3
    return num_list[::n]
