const rows = [
  ["N2 Bomber",      "Heavy Fighter",  "Limited",   "21"],
  ["J-Type 327",     "Light Combat",   "Unlimited", "1"],
  ["NX Cruiser",     "Medium Fighter", "Limited",   "18"],
  ["N1 Starfighter", "Medium Fighter", "Unlimited", "25"],
  ["Royal Cruiser",  "Light Combat",   "Limited",   "4"],
];

const pad = (s, w) => String(s).padEnd(w, " ");

console.log(pad("SHIP NAME", 15) + pad("CLASS", 15) + pad("DEPLOYMENT", 11) + pad("IN SERVICE", 10));
for (const [a, b, c, d] of rows) {
    console.log(pad(a, 15) + pad(b, 15) + pad(c, 11) + pad(d, 10));
}
