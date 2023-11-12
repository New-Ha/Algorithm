def solution(picture, k):   
    row = list(map(lambda el: ''.join(list(map(lambda pix: ''.join(pix * k), list(el)))), picture));
    
    result = [];
    for i in row:
        for j in range(k):
            result.append(i);
    return result

    
               