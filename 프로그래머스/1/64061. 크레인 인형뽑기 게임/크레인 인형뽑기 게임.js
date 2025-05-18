function solution(board, moves) {
    let removedCount = 0;
    
    const len = board.length;
    const columns = Array.from({length: len}, () => []);
    for (const row of board) {
        for (let col = 0; col < len; col++) {
            if (row[col] !== 0) columns[col].push(row[col]);
        }
    }

    const basket = [];

    for(const move of moves) {
        const picked = columns[move - 1].shift();

        if(!picked) continue;

        if(basket[basket.length - 1] === picked) {
            basket.pop();
            removedCount += 2;
        } else {
            basket.push(picked);
        }
    }
    return removedCount;
}