n = int(input())

users = [(int(age), name) for age, name in (input().split() for _ in range(n))]
users.sort(key=lambda x: x[0])

print('\n'.join(f"{age} {name}" for age, name in users))