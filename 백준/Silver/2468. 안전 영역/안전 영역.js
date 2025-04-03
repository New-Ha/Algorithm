const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄은 N (지도 크기)
const N = +input[0];

// 이후 N줄은 지도의 높이 정보 (2차원 배열로 변환)
const map = input.slice(1).map(line => line.split(' ').map(Number));

// 상하좌우 탐색을 위한 방향 벡터
const dx = [0, 1, 0, -1]; // x축: 그대로, 오른쪽, 그대로, 왼쪽
const dy = [-1, 0, 1, 0]; // y축: 위, 그대로, 아래, 그대로

// 방문 여부를 저장할 2차원 배열 (전역으로 선언해 사용)
let visited;

// 깊이 우선 탐색 (DFS) 함수 정의
const dfs = (x, y, h) => {
    // 현재 위치 방문 표시
    visited[x][y] = true;

    // 4방향으로 탐색
    for (let i = 0; i < 4; i++) {
        const nextX = x + dx[i]; // 다음 x 좌표
        const nextY = y + dy[i]; // 다음 y 좌표

        // 범위 안에 있고, 방문하지 않았고, 물에 잠기지 않은 경우
        if (
            nextX >= 0 && nextX < N &&
            nextY >= 0 && nextY < N &&
            !visited[nextX][nextY] &&
            map[nextX][nextY] > h // 비 높이보다 높은 땅이면 안전 영역
        ) {
            dfs(nextX, nextY, h); // 다음 위치로 DFS 호출 
        }
    }
};

// 특정 높이 h에서 안전 영역 개수를 구하는 함수
const getCount = (h) => {
    // visited 배열 초기화 (false로 설정)
    visited = Array.from({ length: N }, () => Array(N).fill(false));

    let count = 0; // 안전 영역 개수

    // 전체 좌표를 순회
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < N; y++) {
            // 방문하지 않았고, 물에 잠기지 않은 경우 → 새로운 영역 시작
            if (!visited[x][y] && map[x][y] > h) {
                dfs(x, y, h); // DFS로 연결된 안전 영역 탐색
                count++;      // 안전 영역 1개 증가
            }
        }
    }
    return count; // 안전 영역 개수 반환
};

// 지도에서 가장 높은 높이를 구함 (최대 비 높이 설정용)
let maxHeight = 0;
for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
        maxHeight = Math.max(maxHeight, map[x][y]);
    }
}

// 정답 변수 (최대 안전 영역 개수)
let result = 0;

// 비의 높이를 0부터 최대 높이까지 바꿔가며 안전 영역 개수 탐색
for (let h = 0; h <= maxHeight; h++) {
    result = Math.max(result, getCount(h)); // 최대값 갱신
}

// 결과 출력
console.log(result);