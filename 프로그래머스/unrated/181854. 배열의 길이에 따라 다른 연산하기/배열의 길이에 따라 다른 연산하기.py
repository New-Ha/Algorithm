def solution(arr, n):
    idx = [x for x in range(len(arr))];
    if len(arr) % 2 == 1:
        return list(map(lambda x, i : x + n if i % 2 == 0 else x, arr, idx));
    else:
        return list(map(lambda x, i : x + n if i % 2 == 1 else x, arr, idx));
    
    # N=len(arr)
    # if N%2:
    #     for i in range(0,N,2): arr[i]+=n
    # else:
    #     for i in range(1,N,2): arr[i]+=n
    # return arr