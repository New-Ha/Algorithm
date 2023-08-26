def solution(arr, flag):
    result = [];
    for i in range(len(arr)):
        if flag[i]:
            for j in range(arr[i] * 2):
                result.append(arr[i]);
        else:
            del result[-arr[i]:]
    return result