def solution(arr, idx):
    # return arr[idx:].index(1) + idx if 1 in arr[idx:] else -1
    
    # index()의 두번째 인자로 시작 인덱스 번호를 받을 수 있다.
    return arr.index(1, idx) if 1 in arr[idx:] else -1