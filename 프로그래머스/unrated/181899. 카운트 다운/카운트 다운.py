def solution(start, end):
    # return list(reversed([x for x in range (end, start + 1)]))
    return [x for x in range(start, end -1, -1)]