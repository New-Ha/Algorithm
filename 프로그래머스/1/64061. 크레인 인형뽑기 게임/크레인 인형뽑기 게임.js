function solution(board, moves) {
    let removedCount = 0;
    
    const len = board.length;
    const columns = Array.from({length: len}, () => [])
    for(const line of board){
        for(let i = 0; i < len; i++){
            if(line[i] !== 0) columns[i].push(line[i])
        }
    }

    const pick = [];
    for(const move of moves){
        const item = columns[move - 1].shift();
        if (item === undefined) continue;

        if (pick[pick.length - 1] === item) {
            removedCount++;
            pick.pop();
        } else {
            pick.push(item);
        }
    }
    return removedCount * 2;
}