def solution(answers):
    one = [1, 2, 3, 4, 5]
    two = [2, 1, 2, 3, 2, 4, 2, 5]
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    counts = [0, 0, 0]
    for i in range(len(answers)):
        if answers[i] == one[i % len(one)]: counts[0] += 1
        if answers[i] == two[i % len(two)]: counts[1] += 1
        if answers[i] == three[i % len(three)]: counts[2] += 1

    maxNum = max(counts);
    result = []
    for i in range(len(counts)):
        if counts[i] == maxNum:
            result.append(i + 1)
    return result