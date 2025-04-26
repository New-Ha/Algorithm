const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const students = input[1].split(' ');
const counts = {};  

for (let i = 0; i < n; i++) {
    counts[students[i]] = 0;
}

for (let i = 2; i < input.length; i++) {
    const words = input[i].split(' ');
    for (const word of words) {
        if (counts.hasOwnProperty(word)) {
            counts[word]++;
        }
    }
}

const studentInfos = [];
for (const name of students) {
    studentInfos.push({ name: name, likes: counts[name] });
}

studentInfos.sort((a, b) => {
    if (b.likes === a.likes) {
        return a.name.localeCompare(b.name);
    }
    return b.likes - a.likes;
});

for (const student of studentInfos) {
    console.log(`${student.name} ${student.likes}`);
}