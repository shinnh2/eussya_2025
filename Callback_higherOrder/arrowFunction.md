# 화살표 함수
화살표 함수는 함수 표현식 중의 하나로 다음과 같이 표현합니다.

```js
//함수 키워드 사용
function multi(num1, num2){
  return num1*num2;
}
//화살표 함수 사용
const multi=(num1, num2)=>{
  return num1*num2;
}
//위 화살표 함수는 다음처럼 줄일 수도 있습니다:
//const multi=(num1, num2)=>num1*num2
```
## 화살표 함수의 특징
화살표 함수는 일반 함수와 달리 다음과 같은 특징을 가지고 있습니다.
- 화살표 함수에는 자체 바인딩이 this에 없습니다.
- 인수 또는 super로 사용해야 하며, 메서드로 사용하면 안 됩니다.
- 화살표 함수는 생성자로 사용할 수 없습니다. new로 호출하면 TypeError가 반환됩니다. new.target 키워드에 대한 액세스 권한도 없습니다.

참고링크: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions
