# setInterval
전달할 함수를 호출하는데 
콜백을 매 특정 밀리 초 마다 호출하는 함수입니다

setInterval(()=>{
 console.log("Hello)
},3000) //3초마다 작업을 반복

## clearInterval
setInterval은 멈추지 않기 때문에, **clearInterval()**을 사용해서 종료해야 합니다.
```js
const intervalId = setInterval(() => {
  console.log("반복 중...");
}, 1000);

// 5초 후 반복 종료
setTimeout(() => {
  clearInterval(intervalId);
  console.log("반복 종료");
}, 5000);

반복 중...  // 1초 후
반복 중...  // 2초 후
반복 중...  // 3초 후
반복 중...  // 4초 후
반복 중...  // 5초 후
반복 종료   // 5초 후 (clearInterval 실행)


```
