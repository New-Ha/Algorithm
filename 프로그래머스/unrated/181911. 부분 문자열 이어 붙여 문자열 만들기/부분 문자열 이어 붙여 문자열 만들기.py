def solution(my_strings, parts):
    result = '';
    for i in range(len(parts)):
        result += my_strings[i][parts[i][0]:parts[i][1] + 1]
    return result

    #return ''.join([x[y[0]:y[1]+1] for x,y in zip(my_strings, parts)])