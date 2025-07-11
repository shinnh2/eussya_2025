## 인수(Argument)
모든 함수 내에서 이용 가능한 지역 변수입니다. 함수에 전달된 모든 인자를 담고있습니다.
```js
function greet(name) {
  console.log('Hello, ' + name);
}

greet('kim'); // ← 'kim'이 인수
array.indexOf("hi") //hi가 인수 


```

## 매개변수
함수를 정의할 때 외부로부터 값을 전달받기 위해 함수 괄호 안에 선언한 변수입니다.
매개변수 이름은 JavaScript에서 허용되는 이름이어야 합니다.(function이나 if, let 같은건 쓸수 없습니다)
전달된 매개변수가 없을경우 기본적으로 undefind으로 정해집니다.


```js
function sum(a, b) { // a, b는 매개변수
  return a + b;
}
sum(3, 5); // 3, 5는 인자
```
