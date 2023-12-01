def solution(sizes):
    row = [];
    column = [];
    
    for r, c in sizes:
        if r > c:
            row.append(r);
            column.append(c);
        else:
            row.append(c);
            column.append(r);
    return max(row) * max(column)