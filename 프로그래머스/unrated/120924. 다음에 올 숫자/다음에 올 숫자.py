def solution(common):
    diff = [];
    for i in range(len(common) - 1):
        diff.append(common[i+1] - common[i]);
    
    return common[len(common) - 1] + diff[0] if diff[0] == diff[1] else common[len(common) - 1] * (diff[1] / diff[0])