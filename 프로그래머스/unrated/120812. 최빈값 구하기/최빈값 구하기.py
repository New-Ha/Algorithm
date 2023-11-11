def solution(array):
    keys = [];
    count = [];

    for i in range(len(array)):
        if array[i] not in keys:
            keys.append(array[i]);
            
    for i in range(len(keys)):
        count.append(array.count(keys[i]));
        
    return -1 if count.count(max(count)) >= 2 else keys[count.index(max(count))]