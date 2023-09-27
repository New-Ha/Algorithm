from collections import deque

def solution(maps):
    visited = maps
    lenX = len(maps);
    lenY = len(maps[0]);
    dx = [-1, 1, 0, 0];
    dy = [0, 0, -1, 1];
    
    queue = deque();
    queue.append([0, 0]);
    
    while queue:
        x, y = queue.popleft();
        
        for i in range(4):
            nextX, nextY = x + dx[i], y + dy[i];
            if 0 <= nextX < lenX and 0 <= nextY < lenY and visited[nextX][nextY] == 1:
                visited[nextX][nextY] = visited[x][y] + 1;
                queue.append([nextX, nextY]);
                
    return visited[-1][-1] if visited[-1][-1] > 1 else -1