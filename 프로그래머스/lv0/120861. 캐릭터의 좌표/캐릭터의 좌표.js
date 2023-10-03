function solution(keyinput, board) {
    const [x, y] = board.map(el => Math.floor(el / 2));
    const direction = {'up': [0, 1], 'down':[0, -1], 'left':[-1, 0], 'right' : [1, 0]};
    
    return keyinput.reduce((acc, cur) => {
        let moveX = acc[0] + direction[cur][0] > x ? x : acc[0] + direction[cur][0] < (x * -1) ? x * -1 : acc[0] + direction[cur][0];
        let moveY = acc[1] + direction[cur][1] > y ? y : acc[1] + direction[cur][1] < (y * -1) ? y * -1 : acc[1] + direction[cur][1];
       
        return [moveX, moveY] 
    }, [0, 0])
}