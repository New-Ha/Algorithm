def solution(sizes):
    row = [max(i) for i in sizes];
    column = [min(i) for i in sizes];
    
    # for r, c in sizes:
    #     if r > c:
    #         row.append(r);
    #         column.append(c);
    #     else:
    #         row.append(c);
    #         column.append(r);
    
    return max(row) * max(column)