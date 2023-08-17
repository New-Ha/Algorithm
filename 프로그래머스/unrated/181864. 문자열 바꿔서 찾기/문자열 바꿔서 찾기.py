def solution(myString, pat):
    return int(pat in ''.join(map(lambda el : 'B' if el == 'A' else 'A', list(myString))))