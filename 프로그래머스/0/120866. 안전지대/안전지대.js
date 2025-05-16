function solution(board) {
    const n = board.length;
    const visited = board.map((row => [...row]));

    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1]; 
    
    for(let x = 0; x < n; x++){
        for(let y = 0; y < n; y++){
            if(board[x][y] === 1){
                for (let dir = 0; dir < 8; dir++) {
                    const nx = x + dx[dir];
                    const ny = y + dy[dir];

                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                        visited[nx][ny]++;
                    }
                }
            }
        }
    }

    return visited.flat().filter(el => el === 0).length;
}