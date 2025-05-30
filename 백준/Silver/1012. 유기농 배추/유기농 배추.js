const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);
let idx = 1;

for(let i = 0; i < t; i++){
    const [M, N, K] = input[idx].split(' ').map(Number);
    const map = Array(N).fill(0).map(() => Array(M).fill(0));
    const visited = Array(N).fill(0).map(() => Array(M).fill(false));
    
    for(let i = 0; i < K; i++){
	    const [x, y] = input[idx + i + 1].split(' ').map(Number);
	    map[y][x] = 1;
    }
    
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    const dfs = (x, y) => {
        visited[y][x] = true;
	
	    for(let i = 0; i < 4; i++){
		    const nx = x + dx[i];
		    const ny = y + dy[i];
		
		    if((nx >= 0 && nx < M && ny >= 0 && ny < N) 
			    && !visited[ny][nx] && map[ny][nx] === 1){
			    dfs(nx, ny);
		    }
	    }
    }
    
    let bugs = 0;
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if (map[y][x] === 1 && !visited[y][x]) {
                dfs(x, y);
                bugs++;
            }
        }
    }
    console.log(bugs);
    
    idx += K + 1;
}
