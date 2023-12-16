def solution(name, yearning, photo):
    # result = [];
    # for el in photo:
    #     temp = sum(yearning[name.index(i)] if i in name else 0 for i in el)
    #     result.append(temp)
    # return result
    
    return [sum(yearning[name.index(i)] for i in el if i in name) for el in photo]
