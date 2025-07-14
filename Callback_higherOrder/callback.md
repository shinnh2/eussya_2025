# 콜백함수
함수는 전달인자로 함수를 전달할 수 있는 일급객체입니다.
이처럼 다른 함수에 인자로 전달되는 함수를 콜백함수라고 합니다.

```js
//함수 정의
function strToUp(str){
  return str.toUpperCase();
}
function playTwice(func, str1, str2){
  console.log(func(str1));
  console.log(func(str2));
}

//함수 실행
playTwice(strToUp, "hi", "bye");
//"HI"
//"BYE"
```
위 코드에서 전달되는 `strToUp` 함수를 콜백함수라고 합니다.
