# Array.map();
forEach는 배열 메서드 중 하나로 배열의 각 요소를 다른 값으로 대체하여 새로운 배열을 반환합니다.
전달인자로 콜백함수를 받으며 이 콜백함수의 반환값은 각 요소를 대체하는 값이 됩니다. 요소 길이만큼 콜백함수가 반복해서 실행됩니다.

```js
const arr=[1,2,3,4,5];

const arrMap=arr.map((el, idx, arr)=>{
  return el*el;
});

console.log(arrMap);
//[1,4,9,16,25]
```

## 구문
```js
map(callbackFn, thisArg)
```
- callbackFn
배열의 각 요소에 대해 실행할 함수입니다. 반환 값은 새 배열의 요소가 됩니다. 콜백함수의 인수는 다음과 같습니다.
  - currentValue: 배열 내에서 처리할 현재 요소.
  - index: 배열 내에서 처리할 현재 요소의 인덱스.
  - array: map()을 호출한 배열.
- thisArg (Optional)
callback을 실행할 때 this로 사용되는 값. 순회 메서드를 참고하시기 바랍니다.


## 배열 메서드들의 차이
- forEach: 배열을 순회하며 내용을 실행한다.
- map: 각 요소를 각 반환값으로 대체하고 모아서 새로운 배열을 만든다.
- filter: 반환값이 참인 경우인 요소만 모아서 새로운 배열을 만든다.
- reduce: 각 요소를 활용해 값을 누적하고, 그 누적한 값을 반환한다. 
