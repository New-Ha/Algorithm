def solution(myString, pat):
    pats = [];
    for i in range(len(myString) - len(pat) + 1):
        pats.append(myString[i:i+len(pat)])
    return len([i for i in pats if i == pat])