def solution(arr1, arr2):
    result = [];
    for i in range(len(arr1)):
        result.append([x for x in range(len(arr1[i]))]);
        for j in range(len(arr1[i])):
            result[i][j] = arr1[i][j] + arr2[i][j];
    return result
            