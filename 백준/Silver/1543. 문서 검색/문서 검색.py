text = input()
target = input()

count = 0
i = 0
while i < len(text):
    if text[i:i+len(target)] == target:
        count += 1
        i += len(target)
    else:
        i += 1

print(count)