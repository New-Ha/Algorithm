def solution(my_string):
    # ver 1
    return ''.join(list(dict.fromkeys(my_string)))
    
    # ver 2
    # return ''.join(sorted(set(my_string), key = lambda i : my_string.index(i)))
    
    # ver 3
    # newStr = '';
    # for i in my_string:
    #     if i not in newStr:
    #         newStr += i;
    # return newStr