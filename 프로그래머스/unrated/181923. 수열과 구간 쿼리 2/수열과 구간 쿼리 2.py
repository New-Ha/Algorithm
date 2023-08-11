def solution(arr, queries):
    def mapping(query):
        [s, e, k] = query
        temp = sorted(list(filter(lambda x: x > k, arr[s : e+1])))
        return temp[0] if len(temp) else -1
    
    return list(map(mapping, queries))