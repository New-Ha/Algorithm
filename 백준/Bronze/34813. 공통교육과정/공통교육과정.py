subject = input()

subjects_map = {
    'F': 'Foundation',
    'C': 'Claves',
    'V': 'Veritas',
    'E': 'Exploration'
}

print(subjects_map.get(subject[0]))
