function solution(priorities, location) {
    const queue = priorities.map((priority, index) => ({ index, priority }));
    let printOrder = 0;

    while (queue.length) {
        const current = queue.shift();

        const hasHigherPriority = queue.some(task => task.priority > current.priority);

        if (hasHigherPriority) {
            queue.push(current);
        } else {
            printOrder++;
            if (current.index === location) {
                return printOrder;
            }
        }
    }
}