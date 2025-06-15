function solution(skill, skill_trees) {
    let count = 0;
    for(let skill_tree of skill_trees){
        const filtered = [...skill_tree].filter(el => skill.includes(el));
        if(skill.startsWith(filtered.join(''))){
            count++;
        }
    }
    return count
}