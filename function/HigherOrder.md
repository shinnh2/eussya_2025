# 고차함수(Higher-Order Function)
함수를 반환하거나 다른 함수들을 전달인자로서 사용하는 함수를 "고차 함수"라고 합니다.

## 고차함수를 인자로 받는경우
```js
function callTwice(func){
  func();
  func();
}

function laugh(){
  console.log("haha");
}

callTwice(laugh) 
```
laugh함수를 실행해서 반환되는 결과값이 아닌 laugh함수 그자체를 인자로 받아서 실행합니다.


## 함수를 반환하는 경우
```js
function multiply(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = multiply(2);
console.log(double(5)); // 10

```
multiply(2)는 x * 2를 계산하는 함수를 반환합니다.
double은 x * 2를 계산하는 함수이므로 double(5)는 10을 반환합니다.
