# 기본매개 변수
매개변수가 있으면 그 값을 사용하고 매개변수가 없으면 디폴트 매개변수를 받습니다.
```js
function multiBy1(num1, num2=1){
	return num1*num2;
}
multiBy1(7); //7
```
매개변수가 전부 전달 되지 않을경우 첫번째순서에 디폴트 매개변수를 쓰면 undefind가 출력됩니다. <br>
반드시 디폴트 매개변수는 2번째이후에 작성해야합니다.
```js
function  greet(msg="hello", person) {
    return `${msg}, ${person}!`;
}
greet("jenny") // 결과값 jenny undefind

function  greet(person, msg="hello") { //첫번째 순서에 디폴트 매개변수를 넣지 않는다.
    return `${msg}, ${person}!`;
} //결과값 hello, jenny


```
