function solution(spell, dic) {
    spell = spell.sort().join('')
    const outOfLenth = dic.filter(el => el.length === spell.length);
    const sorted = outOfLenth.map(el => el.split('').sort().join(''))
    const check = sorted.filter(el => el === spell)
    return check.length === 1 ? 1 : 2
}