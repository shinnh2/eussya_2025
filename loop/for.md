# for문
자바스크립트 반복문 중 하나로 시작문, 조건문, 평가문 등으로 이루어져 있습니다.

- 예시
```js
for (let i=1; i<11; i+=1){
   console.log(i);
}
//실행결과 콘솔창에 1에서 10까지 차례대로 출력됩니다
```

- 구문
```js
for ([initialization]; [condition]; [final-expression]){
   statement
}
```
- initialization: 
for문에서 사용할 변수를 선언하여 초기값을 할당합니다. (이 변수는 for문 바깥 이전에 선언할 수도 있습니다. 이 경우 별도의 선언은 필요없이 할당만 하면 됩니다.)
- condition: 
condition 평가 결과가 참이라면 statement를 실행합니다. 만약 결과가 거짓이라면 다음 반복으로 건너뜁니다.
- final-expression: 
다음번 condition 평가 이전에 실행합니다. 주로 initialization에서 선언했던 카운터 변수(예시에서는 `i`)를 증감하거나 바꿀 때 사용합니다.
- statement: 
condition의 평가 결과가 참일 때 실행하는 문으로 중괄호 안에 작성합니다.

## for...of
for문을 좀 더 간편하게 사용할 수 있는 변형된 구문으로 주로 배열과 함께 사용합니다.
기존 for문과 다르게 배열과 배열의 각 요소만 변수로 지정하여 반복문을 편하게 사용할 수 있습니다.
참고로 객체는 안됩니다!

- 구문
```js
for (variable of iterable) {
  statement;
}
```
- variable: 
iterable의 개별 요소
- iterable: 
배열 등 반복 가능한 객체. 문자열도 해당됩니다. (다른 것도 있지만 강의에서 심도 있게 다루지 않았기 때문에 자세히 보시려면 하단 참고링크를 확인하세요.)

참고 링크: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of

## for...in
for문을 주로 객체 리터럴과 함께 사용하며, 
배열은 각 요소를 순회한다면 이 경우에는 객체의 키를 순회합니다.
하지만 잘 사용하지는 않습니다.

```js
for (variable of object) {
  statement;
}
```
- variable: 
object의 키, 즉 속성
- object: 
주로 객체 리터럴을 의미합니다.

만약 객체를 순회하면서 키와 그 값을 나타낸다면 주로 아래 예시처럼 활용합니다.
```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

참고 링크: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in
