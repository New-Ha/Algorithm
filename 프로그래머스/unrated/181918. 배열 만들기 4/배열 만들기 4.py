def solution(arr):
    stk = [];
    i = 0;
    
    while i < len(arr):
        if not len(stk):
            stk.append(arr[i])
            i += 1;
        elif stk[len(stk) - 1] < arr[i]:
            stk.append(arr[i])
            i += 1;
        else:
            stk.pop(); 
            
    return stk;


    # stk = []
    # for i in range(len(arr)):
    #     while stk and stk[-1] >= arr[i]:
    #         stk.pop()
    #     stk.append(arr[i])
    # return stk