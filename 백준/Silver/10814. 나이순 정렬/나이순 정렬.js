const fs = require('fs');
const [n, ...input] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const N = Number(n);

const users = [];
for(let i = 0; i < N; i++){
    const [age, name] = input[i].split(' ');
    users.push([Number(age), i, name]);
}

users.sort((a, b) => {
    if(a[0] === b[0]){
        return a[1] - b[1];
    }
    return a[0] - b[0];
})

for (const [age, , name] of users) {
    console.log(`${age} ${name}`);
}
