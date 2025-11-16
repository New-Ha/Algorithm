function solution(babbling) {
  const pronunciation = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (const word of babbling) {
    let cur = word;

    while (cur.length > 0) {
      let matched = false;

      for (const sound of pronunciation) {
        if (cur.startsWith(sound)) {
          cur = cur.slice(sound.length);
          matched = true;
          break;
        }
      }

      if (!matched) break;
    }

    if (cur.length === 0) {
      count++;
    }
  }

  return count;
}