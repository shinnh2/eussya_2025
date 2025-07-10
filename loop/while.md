
# while문
조건이 참(true)인 동안 계속 반복하는 반복문입니다. 
반복 횟수가 정해져 있지 않을 때 while 루프를 사용하면 더 유용합니다
기본 문법은 다음과 같습니다:

```js
while (조건) {
  // 조건이 true인 동안 실행되는 코드
}

```

사용자가 "exit"을 입력할 때까지 계속 prompt()로 입력을 받습니다.

```js
let input = "";

while (input !== "exit") {
  input = prompt("exit를 입력하면 종료됩니다:");
}

```
## break
while루프문에서 무한반복이 되지않게 강제로 빠져나가는 구문
```js
let i = 1;

while (true) {
  console.log(i);
  if (i === 5) {
    break; // i가 5일 때 반복 종료
  }
  i++;
}

```
