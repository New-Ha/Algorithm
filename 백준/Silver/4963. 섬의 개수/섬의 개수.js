const fs = require('fs');
const inputArr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1], 
    [-1, -1], [-1, 1], [1, -1], [1, 1]    
];

while(inputArr.length !== 0){
    const [w, h] = inputArr.shift().split(' ').map(Number);
    if (w === 0 && h === 0) break;
    
    const landMap = [];
    for (let i = 0; i < h; i++) {
        landMap.push(inputArr.shift().split(' ').map(Number));
    }
    
    let isLandCount = 0;
    const visited = Array.from({ length: h }, () => Array(w).fill(false));
    
    for(let y = 0; y < h; y++){
        for(let x = 0; x < w; x++){
            if(landMap[y][x] === 1 && !visited[y][x]){
                const queue = [[x, y]];
                visited[y][x] = true;
                
                while(queue.length !== 0){
                    const [curX, curY] = queue.shift();
                    for(let i = 0; i < 8; i++){
                        const [dx, dy] = directions[i]
                        const nextX = curX + dx;
                        const nextY = curY + dy;
                        if(nextX >= 0 && nextY >= 0 &&
                          nextX < w && nextY < h &&
                          !visited[nextY][nextX] &&
                          landMap[nextY][nextX] === 1){
                            visited[nextY][nextX] = true;
                            queue.push([nextX, nextY]);
                        }
                    }
                }
                isLandCount++;
            }
        }
    }
    console.log(isLandCount)
}
