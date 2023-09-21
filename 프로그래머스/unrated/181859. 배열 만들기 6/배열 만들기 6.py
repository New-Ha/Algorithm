def solution(arr):
    stk = [];
    
    for i in arr:
        if not stk: stk.append(i);
        elif stk[-1] == i: stk.pop();
        else: stk.append(i);
        
    return stk if len(stk) > 0 else [-1]
