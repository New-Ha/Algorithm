a, b = list(map(int, input().split()))
bank = a + b
chicken = int(input()) * 2

print((bank - chicken) if chicken <= bank else bank)