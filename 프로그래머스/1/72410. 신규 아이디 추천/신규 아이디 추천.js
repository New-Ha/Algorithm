function solution(new_id) {
  let id = '';
  const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789-_.';
  let prevChar = '';  
  for (let c of new_id.toLowerCase()) {
    if (!allowed.includes(c)) continue; 
    if (c === '.' && prevChar === '.') continue; 

    id += c;
    prevChar = c;
  }


  if (id[0] === '.') id = id.slice(1);

  if (id === '') id = 'a';

  if (id.length >= 16) {
    id = id.slice(0, 15);
  }
  
  if (id[id.length - 1] === '.') id = id.slice(0, -1);

  while (id.length < 3) {
    id += id[id.length - 1];
  }

  return id;
}
