# every
배열 안의 모든 요소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false를 반환합니다.
```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// 결과값 true반환
```
