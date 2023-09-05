def get_difference(arr, n):
    # tree 만들기
    tree = {}
    for a, b in arr:
        if a in tree:
            tree[a].append(b);
        else:
            tree[a] = [b];
        if b in tree:
            tree[b].append(a);
        else:
            tree[b] = [a];
    
    # 순회
    checked = [];
    queue = [];
    queue.append(arr[0][0]);
    while queue:
        node = queue.pop();
        if node not in checked:
            checked.append(node);
            queue.extend(tree.get(node, [])) ;
    # 순회 길이를 이용히 차이 구하기
    return abs(len(checked) - (n - len(checked)))

def solution(n, wires):
    # wires 를 돌면서 간선 하나씩을 삭제하고 getDifference(차이를 구하는 함수)에 넣어줌
    difference = [get_difference(wires[:i] + wires[i+1:], n) for i in range(len(wires))];
    # 차이가 가장 적은 값 return 
    return min(difference)
