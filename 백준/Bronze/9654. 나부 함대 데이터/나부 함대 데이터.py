rows = [
    ("N2 Bomber",      "Heavy Fighter",  "Limited",   "21"),
    ("J-Type 327",     "Light Combat",   "Unlimited", "1"),
    ("NX Cruiser",     "Medium Fighter", "Limited",   "18"),
    ("N1 Starfighter", "Medium Fighter", "Unlimited", "25"),
    ("Royal Cruiser",  "Light Combat",   "Limited",   "4"),
]

print(f"{'SHIP NAME':<15}{'CLASS':<15}{'DEPLOYMENT':<11}{'IN SERVICE':<10}")
for a, b, c, d in rows:
    print(f"{a:<15}{b:<15}{c:<11}{d:<10}")