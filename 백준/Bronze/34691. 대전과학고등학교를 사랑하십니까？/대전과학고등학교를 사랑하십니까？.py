import sys

symbol_map = {
    'animal': 'Panthera tigris',
    'tree': 'Pinus densiflora',
    'flower': 'Forsythia koreana'
}

for line in sys.stdin:
    line = line.strip()
    if line == 'end':
        break
    print(symbol_map[line])