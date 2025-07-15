# SetTimeOut
만료된 후 함수나 지정한 코드 조각을 한 번 실행하는 타이머를 설정합니다.
```js
setTimeOut (()=>
  실행할 함수,지연시간)
```

```js
setTimeOut(()=>  {
	console.log("Hello")
},3000)
```

```js
setTimeout(() => {
  console.log("첫 번째 메시지");
}, 5000);
setTimeout(() => {
  console.log("두 번째 메시지");
}, 3000);
setTimeout(() => {
  console.log("세 번째 메시지");
}, 1000);

// 콘솔 출력:

// 세 번째 메시지
// 두 번째 메시지
// 첫 번째 메시지

```

setTimeout은 비동기 함수이며, 지정된 시간이 지난 뒤 콜백 함수를 실행합니다.
실행 순서는 코드의 위치가 아니라 지연 시간(delay) 에 따라 결정됩니다.
즉, 어떤 코드가 먼저 작성되었든, 더 짧은 시간에 예약된 코드가 먼저 실행됩니다.
