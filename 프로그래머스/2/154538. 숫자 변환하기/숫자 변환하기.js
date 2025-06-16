function solution(x, y, n) {
    const visited = new Set();
    const queue = [[x, 0]];
    let head = 0;

    while (head < queue.length) {
        const [current, steps] = queue[head++];
        if (current === y) return steps;

        for (const next of [current + n, current * 2, current * 3]) {
            if (next <= y && !visited.has(next)) {
                visited.add(next);
                queue.push([next, steps + 1]);
            }
        }
    }

    return -1;
}
