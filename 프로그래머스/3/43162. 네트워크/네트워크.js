function solution(n, computers){
    const visited = Array(n).fill(false);
    let count = 0;
    
    const dfs = (node) => {
        visited[node] = true;
        
        for(let edge = 0; edge < n; edge++){
            if(!visited[edge] && computers[node][edge]){
                visited[node][edge] = true;
                dfs(edge)
            }
        }
    }
    
    for(let node = 0; node < n; node++){
        if(!visited[node]){
            dfs(node)
            count++
        }
    }
    return count
}
