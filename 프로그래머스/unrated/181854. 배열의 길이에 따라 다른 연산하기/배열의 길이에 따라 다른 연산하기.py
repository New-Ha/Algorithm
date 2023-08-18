def solution(arr, n):
    idx = [x for x in range(len(arr))];
    if len(arr) % 2 == 1:
        return list(map(lambda x, i : x + n if i % 2 == 0 else x, arr, idx));
    else:
        return list(map(lambda x, i : x + n if i % 2 == 1 else x, arr, idx));