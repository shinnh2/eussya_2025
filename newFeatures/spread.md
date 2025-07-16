# 함수 호출 시의 스프레드 구문
배열이나 객체를 펼쳐서 개별 항목으로 분리하는 연산자입니다.
```js
const arr=[1,2,3,4,5,6,7,8,9,10];
Math.max(...arr); //10
```

## 배열을 인자로 쪼개 전달
```js
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
Math.max(..arr) // 가장 큰값을 반환
```

## 배열 합치기
```js
const cats=["Timmy", "sunny"];
const dogs=["Tom", "Jerry"];
const pets=[...cats, ...dogs];
//['Timmy', 'sunny', 'Tom', 'Jerry'] //배열이 복사되어 새로운 변수에 담긴다.
```

## 객체 합치기
두개 이상의 객체일 경우 충돌이 있으면 마지막 특성이 덮어집니다.
```js
const personA={name: "하은", level: 3, points: 450, grade: "gold"};
const personB={name: "서준", level: 2, points: 300};
const people={...personA, ...personB};
//{name: '서준', level: 2, points: 300, grade: 'gold'}
```
