function solution(n, computers) {
    const visited = [];
    let count = 0;
    
    const dfs = (v) => {
        visited[v] = true;
        
        for(let edge = 0; edge < n; edge++){
            if(!visited[edge] && computers[v][edge]){
                dfs(edge);
            }
        }
    };
    
    for(let v = 0; v < n; v++){
        if(!visited[v]){
            dfs(v);
            count++
        }
    }
    return count
}