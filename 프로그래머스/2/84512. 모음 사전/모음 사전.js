function solution(word) {
    const queue = ['A', 'E', 'I', 'O', 'U'];
    const words = [];

    while (queue.length) {
      const word = queue.shift();
      words.push(word);

      if (word.length < 5) {
        for (const ch of ['A', 'E', 'I', 'O', 'U']) {
          queue.push(word + ch);
        }
      }
    }

    return words.sort().findIndex(w => w === word) + 1;
}