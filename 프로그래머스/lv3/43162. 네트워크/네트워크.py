def solution(n, computers):
    visited = [False for i in range(n)];
    count = 0;
    
    def dfs(v):
        visited[v] = True;
        
        for edge in range(n):
            if not visited[edge] and computers[v][edge]:
                dfs(edge);
    
    for v in range(n):
        if not visited[v]:
            dfs(v);
            count += 1;
    
    return count

