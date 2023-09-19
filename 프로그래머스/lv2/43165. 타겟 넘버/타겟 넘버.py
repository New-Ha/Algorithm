def solution(numbers, target):
    cases = [0];
    for i in numbers:
        temp = [];
        for j in cases:
            temp.append(j + i);
            temp.append(j - i);
        cases = temp;
    count = 0;
    for i in cases: 
        if i == target: count += 1;
    return count