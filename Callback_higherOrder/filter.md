# Array.filter();
filter는 배열 메서드 중 하나로 배열의 각 요소를 판별하여 참인 경우만 모아서 새로운 배열을 반환합니다.
전달인자로 콜백함수를 받으며 이 콜백함수의 반환값은 boolean 타입으로 true인 경우인 요소만 새로운 배열에 포함됩니다. 요소 길이만큼 콜백함수가 반복해서 실행됩니다.

```js
const arr=[1,2,3,4,5];

const arrFilter=arr.filter((el, idx, arr)=>{
  return el%2===1;
});

console.log(arrFilter);
//[1,3,5]
```

## 구문
```js
filter(callbackFn, thisArg)
```
- callbackFn
배열의 각 요소에 대해 실행할 함수입니다. 반환값이 참이면 현재 요소를 유지하고 거짓이면 현재 요소가 새로운 배열에 포함되지 않습니다. 이 콜백함수의 인수는 다음과 같습니다.
  - element: 배열에서 처리 중인 현재 요소.
  - index: 배열에서 처리 중인 현재 요소의 인덱스.
  - array: filter()가 호출된 배열.
- thisArg (Optional)
callbackFn을 실행할 때 this 값으로 사용할 값입니다. 순회 메서드를 참조하세요.


## 배열 메서드들의 차이
- forEach: 배열을 순회하며 내용을 실행한다.
- map: 각 요소를 각 반환값으로 대체하고 모아서 새로운 배열을 만든다.
- filter: 반환값이 참인 경우인 요소만 모아서 새로운 배열을 만든다.
- reduce: 각 요소를 활용해 값을 누적하고, 그 누적한 값을 반환한다. 
