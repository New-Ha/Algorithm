function solution(new_id) {
    let id = new_id.toLowerCase();

    const ALLOWEDCHAR = 'abcdefghijklmnopqrstuvwxyz0123456789-_.';
    id = [...id].filter(char => ALLOWEDCHAR.includes(char)).join('');
    
    let collapsed = '';
    for (let i = 0; i < id.length; i++) {
        if (!(id[i] === '.' && collapsed[collapsed.length - 1] === '.')) {
            collapsed += id[i];
        }
    }
    id = collapsed;
    
    if(id[0] === '.') id = id.slice(1);
    if(id.length >= 16) id = id.slice(0, 15);
    if(id[id.length - 1] === '.') id = id.slice(0, -1);
    
    if (id === '') id = 'a';
    
    while(id.length < 3){
        id += id[id.length -1];
    }
    
    return id;
}
