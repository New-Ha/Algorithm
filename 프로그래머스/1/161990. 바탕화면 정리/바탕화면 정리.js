function solution(wallpaper) {
  const rows = wallpaper.length;
  const cols = wallpaper[0].length;

  let lux = rows, luy = cols;
  let rdx = 0, rdy = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (wallpaper[i][j] === '#') {
        lux = Math.min(lux, i);
        luy = Math.min(luy, j);
        rdx = Math.max(rdx, i + 1);
        rdy = Math.max(rdy, j + 1);
      }
    }
  }

  return [lux, luy, rdx, rdy];
}
