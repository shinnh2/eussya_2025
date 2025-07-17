# 구조 분해 할당
구조 분해 할당은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

## 구문
```js
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

##예시
구조 분해 할당을 사용해 다음과 같은 예시처럼 활용해볼 수 있습니다.
```js
//배열 분해
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934]
const highScore = scores[0];
const secondHighScore = scores[1];
const [gold, silver, bronze, ...everyonElse] = scores;
console.log(gold); //929321
console.log(silver); //899341
console.log(everyonElse); //[772739, 543671, 243567, 111934]

//객체 분해
const user = {
	email: Stacy@gmail.com',
	firstName: 'Stacy',
	lastName: 'Gonzlesz',
	born: 1987,
	city: 'Tulsa',
	state: 'Oklahoma'
}
const {city, state, died} = user; //중요! 객체의 키 이름이여야 함!
const {city, state, died='N/A'} = user; //기본값설정


//매개변수 분해
const movies = [
	{
		title:'Amadeus',
		score: 99,
		year: 1983
	},
	{
		title:'Sharknado',
		score: 35,
		year: 2013
	}
]
```
위와 같이 배열을 분해하면 원하는 변수에 요소를 쉽게 할당할 수 있고, <br/>
객체의 경우 객체 전체의 정보를 살피지 않아도 키 이름을 활용해 간편하게 필요한 정보를 활용해 볼 수 있습니다.  

참고 링크: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring
