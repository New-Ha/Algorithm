function solution(maps) {
    const visited = [...maps];
    const lenX = maps.length;
    const lenY = maps[0].length;
    const dx = [-1, 1, 0 ,0];
    const dy = [0, 0, -1, 1];
    
    const queue = [[0, 0]];
    
    while(queue.length){
        let [x, y] = queue.shift();
        for(let i = 0; i < 4; i++){
            let nextX = x + dx[i], nextY = y + dy[i];
            if(nextX >= 0 && nextX < lenX 
               && nextY >= 0 && nextY < lenY 
               && visited[nextX][nextY] === 1){
                    visited[nextX][nextY] = visited[x][y] + 1;
                    queue.push([nextX, nextY])
            }
        }
    }
    return visited[lenX - 1][lenY - 1] > 1 ? visited[lenX - 1][lenY -1] : -1
}