const fs = require('fs'); 
const N = Number(fs.readFileSync(0, 'utf-8').toString().trim());
   
function getColorOfStars(n) {
    if (n < 380 || n > 780) return;
    
    const ranges = [
        { max: 425, color: "Violet" },
        { max: 450, color: "Indigo" },
        { max: 495, color: "Blue" },
        { max: 570, color: "Green" },
        { max: 590, color: "Yellow" },
        { max: 620, color: "Orange" },
        { max: 781, color: "Red" }
      ];

    return ranges.find(r => n < r.max).color;
}

console.log(getColorOfStars(N))