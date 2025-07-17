# 나머지(rest) 매개변수
함수에서 나머지 매개변수를 사용해 정해지지 않은 양의 매개변수를 받을 수 있습니다.

## 구문
```js
function f(...theArgs) {
  // ...
}
function f(a, b, ...theArgs) {
  // ...
}
```
위 구문처럼 매개변수 전체를 정해지지 않은 양을 받을 수도 있고 몇가지만 지정하고 나머지를 받을 수도 있습니다.

## 예시
```js
function raceResult(gold, silver, ...everyoneElse){
	console.log(`금상입니다. 축하합니다 ${gold}!`);
	console.log(`은상입니다. 축하합니다 ${silver}!`);
	console.log(`참가하신 모든 분들 축하합니다!: ${everyoneElse}`);
}
raceResult("abby","bark","colt","deel","emy");
//금상입니다. 축하합니다 abby!
//은상입니다. 축하합니다 bark!
//참가하신 모든 분들 축하합니다!: colt,deel,emy
```
위와 같이 나머지 매개변수를 활용해볼 수 있으며 배열을 받는 경우 나머지는 배열형태로 할당됩니다.
