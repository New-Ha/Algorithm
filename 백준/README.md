# 💻 백준(BOJ)에서 JavaScript(Node.js)로 문제 풀기

프론트엔드 공부를 하며 코딩테스트 준비를 시작하셨다면 ✨ **JavaScript로 코테를 푸는 것** ✨ 은 자연스러운 선택입니다.  
하지만 막상 **백준(BOJ)** 에서 JS로 문제를 풀려고 하면, 약간의 “당황스러움”이 찾아오죠 😅

특히, 백준 이전에 프로그래머스와 같은 플랫폼을 사용해 코딩테스트 문제를 풀어봤다면 더더욱 당황스럽습니다.

우선 언어 선택에 자바스크립트가 없고, `node.js` 로 풀어야 하는 걸 눈치껏(자바스크립트가 node 위에서 동작하는 언어이므로 눈치껏 알 수 있죠!) 선택하더라도 코드를 제출하면 런타임 에러가 납니다 😱

그 이유는 👉🏻 백준은 **입출력 방식을 직접 처리해야 하기 때문**입니다.  
프로그래머스처럼 자동으로 입력이 주어지지 않아요.

| 플랫폼 | 언어 지원 | 특징 |
|:--|:--|:--|
| **프로그래머스** | ✅ JavaScript 지원 | UI 깔끔 💅, 카카오 등 기업 코테 연습에 최적 |
| **백준** | ⚙️ `Node.js` 로만 가능 | 다양한 알고리즘 문제를 유형벌, 난이도별 등으로 연습할 수 있음 |

<br>

## 📥 입력값 다루기

백준은 `/dev/stdin` 에 테스트 케이스 입력값이 저장되어 있고,  
이를 읽어서 문제 풀이 코드에 넣어 검사해야 합니다.

따라서 입력값이 들어있는 파일을 읽어와 입력값을 정제하여 사용해야 합니다.
이 때, readline과 fs 두 가지 모듈을 사용해 입력받는 방법이 있습니다. 

여기서는 우선 fs 모듈을 사용해 입력받는 방법을 소개합니다.

### ✅ `fs` 모듈 사용법
file system modul로 파일 읽기, 쓰기, 생성 등을 할 수 있게 도와주는 모듈입니다. readline보다 간단하게 입력을 처리할 수 있습니다.

#### 1️⃣ 모듈 가져오기
백준의 Node.js 환경에서 모듈을 불러올 때는 require만 가능합니다.(import 불가)
```jsx
const fs = require('fs');
```

#### 2️⃣ 파일 읽기
가져온 모듈을 사용해서 테스트 케이스 파일을 읽어줍니다.

> #### 💡 런타임 에러(EACCES)
파일을 읽어 오기위해, 파일의 경로를 지정힙니다.
이 때, 일부 문제에서 `/dev/stdin` 경로를 직접 지정하면 런타임 에러(EACCES)가 발생할 수 있습니다.
(https://www.acmicpc.net/board/view/137718)

이 에러는 권한이 없어서 생기는 에러로, readline 모듈을 사용해 해결할 수도 있지만, 
fs모듈을 사용하면서도 `fs.readFileSync(0, 'utf-8')` 방식으로 경로를 넣어줄 경우 안전하게 해결할 수 있습니다.

따라서 `dev/stdin`보다 이 경로를 적극 권장한다고 합니다!

```jsx
const inputValue = fs.readFileSync(0, ‘utf-8’).toString().trim();

// 숏코딩 코드상 'utf-8'로 인코딩 형식을 지정하지 않아도 자동으로 인코딩 되는 것 같습니다.
const inputValue = fs.readFileSync(0).toString().trim(); // 가능👍🏻
```

<br>

---

<br>

## 🔧 입력값 정제하기 (Input Parsing)
입력값은 문제마다 형식이 다르므로, 적절히 가공해야 합니다.

#### 1. 입력값이 한 개의 문자일 때('a')
```jsx
const inputWord = fs.readFileSync(0).toString().trim();
// toString으로 문자열로 만들어주고, trim으로 입력값 외의 공백이나 문자열을 제거합니다.
```

#### 2. 입력값이 한 줄의 여러 문자일 때('a b c' -> 'a', 'b', 'c'로 사용해야 하는 경우)
```jsx
const inputWords = fs.readFileSync(0).toString().trim().split(' ');

// 구조 분해 할당을 사용해 입력값을 바로 사용하도록 할 수도 있습니다.
const [A, B, C] = fs.readFileSync(0).toString().trim().split(' ');
```

#### 3. 입력값이 여러 줄의 문자일 때
입력값이 여러 줄에 걸쳐서 들어오는 경우에 각 줄로 나누어 배열로 사용합니다.
예를 들면,
```
2
abc
def
```
형식으로 입력값이 들어오는 경우입니다.

```jsx
const inputValues = fs.readFileSync(0).toString().trim().split('\n');
// 구조 분해 할당을 사용해 입력값을 바로 사용하도록 할 수도 있습니다.
const [N, ...inputValue] = fs.readFileSync(0).toString().trim().split('\n');
```

#### 4. 입력값이 숫자인 경우
```jsx
// 한 개의 숫자인 경우(2)
const inputNum = Number(fs.readFileSync(0).toString().trim());

// 한 줄로 된 여러 숫자인 경우(1 2 3)
const inputNums = fs.readFileSync(0).toString().trim().map(Number);
```

<br>

## 💡 추가 팁
### ✅ 출력 시 주의
console.log() 를 여러 번 호출해도 되지만,
대량의 출력은 문자열에 미리 합쳐 한 번에 출력하는 게 효율적입니다.(여러 번 호출하는 경우 시간 초과가 발생할 수 있습니다.)
```jsx
// ⚠️ ❌
for(const line of input){
  console.log(line)
}

// ✅
const result = [];
for(const line of input){
  result.push(line) 
}
console.log(result.join('\n'))
```

<br>

---

<br>

## ✚ 덧,
런타임에러 외에도 입력값이 매우 큰 경우에도 fs모듈로 불러오는 데 한계가 있어 readline 모듈이 권장되기도 합니다.
우선은 fs모듈로 풀이를 하다, 해당 문제를 만나는 경우 readline 방식도 추가하겠습니다.

<br>
