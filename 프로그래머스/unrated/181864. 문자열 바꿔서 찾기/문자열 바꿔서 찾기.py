def solution(myString, pat):
    return int(pat in ''.join(map(lambda el : 'B' if el == 'A' else 'A', list(myString))))

    # pat을 반전시켜 찾기
    # return int(''.join(['A' if i == 'B' else 'B' for i in pat]) in myString)