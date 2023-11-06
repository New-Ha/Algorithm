def solution(s):
    arr_S = list(map(lambda el: list(el), s.split(' ')))
    temp = [];
    for arr in arr_S:
        for i in range(len(arr)):
            arr[i] = arr[i].upper() if i % 2 == 0 else arr[i].lower();
        temp.append(''.join(arr));
    return ' '.join(temp)
        
        
   
