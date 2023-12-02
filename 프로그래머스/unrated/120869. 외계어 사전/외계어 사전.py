def solution(spell, dic):
    spell = ''.join(sorted(spell))
    check = [''.join(sorted(list(i))) if len(i) == len(spell) else '' for i in dic]
    return 1 if spell in check else 2