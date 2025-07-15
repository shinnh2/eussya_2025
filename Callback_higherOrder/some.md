# some
배열 안에 하나라도 조건을 만족하는 요소가 있으면 true, 없으면 false를 반환합니다.
이 메서드는 배열을 변경하지 않습니다.

```js
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (2, 4가 짝수라서)
```

