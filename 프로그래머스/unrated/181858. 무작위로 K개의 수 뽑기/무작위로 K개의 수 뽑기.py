def solution(arr, k):
    kindNum = [arr[0]];
    for i in arr:
        if i not in kindNum:
            kindNum.append(i);
            if len(kindNum) == k: break;
            
    if len(kindNum) < k:
        for i in range(k - len(kindNum)):
            kindNum.append(-1)
    return kindNum