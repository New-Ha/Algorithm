import sys

input_lines = sys.stdin.read().strip().split('\n')

for i in range(len(input_lines)):
    if input_lines[i] == '0':
        break
    print(f"Case {i + 1}: Sorting... done!")
