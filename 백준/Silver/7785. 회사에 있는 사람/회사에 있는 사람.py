n = int(input())

office = set()

for _ in range(n):
    name, state = input().split()
    if state == 'enter':
        office.add(name)
    else:
        office.discard(name)

print('\n'.join(sorted(office, reverse=True)))