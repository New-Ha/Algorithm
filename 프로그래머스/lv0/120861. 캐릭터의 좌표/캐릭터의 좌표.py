def solution(keyinput, board):
    x, y = [i // 2 for i in board];
    direction = {'up' : [0, 1],'down' : [0, -1],'left' : [-1, 0],'right' : [1, 0]};
    keyinput = [direction[dir] for dir in keyinput];
   
    point = [0, 0];
    for moveX, moveY in keyinput:
        point[0] = x if point[0] + moveX > x else x * -1 if point[0] + moveX < x * -1 else point[0] + moveX;
        point[1] = y if point[1] + moveY > y else y * -1 if point[1] + moveY < y * -1 else point[1] + moveY;
    
    return point
    