# 스코프
javascript에서 스코프는 변수의 범위를 의미합니다.
이 범위를 나누는 기준은 보통 중괄호({}) 또는 함수입니다.

## 스코프의 특징
스코프의 특징은 아래와 같습니다.

1) let으로 안쪽에서 선언한 변수는 바깥쪽에서 사용이 불가능하다.
2) 바깥쪽에서 선언한 변수는 안에서도 사용이 가능하다.
3) 스코프는 중첩이 가능하며 마찬가지로 안에서 let으로 선언한 변수는 그 바깥에서 사용하지 못한다.
4) 지역 변수는 전역 변수보다 더 높은 우선순위를 가진다.

위 특징 중 몇가지를 좀 더 자세히 살펴보겠습니다.

### 변수의 사용 범위(특징 1,2,3)
가장 바깥쪽의 스코프는 전역 스코프(Global Scope)라고 합니다.
그 반대는 지역 스코프(Local Scope)라고 합니다.
만약 범위를 벗어나서 let으로 변수를 선언하면 콘솔 창에 `Uncaught ReferenceError: 변수 is not defined` 가 뜹니다.

```js
const y="전역변수";
function exampleFunction() {
  const x = "declared inside function"; // 변수 x는 안에서만 사용 가능합니다.
  console.log("Inside function");
  console.log(x);
  console.log(y);
}

console.log(x); // 에러가 뜹니다.
```

위 코드에서 코드의 전체 영역은 바깥쪽 스코프(전역 스코프),
exampleFunction 함수 안의 영역은 안쪽 스코프라고 합니다.
바깥쪽 스코프에서 사용한 변수 y는 안에서도 사용할 수 있지만 
안쪽 스코프에서 사용한 변수 x는 안에서만 사용할 수 있고 바깥쪽에서는 사용할 수 없습니다.

### 변수의 우선순위(특징 4)
전역 스코프와 안쪽 스코프에서 같은 이름의 변수를 선언하면, 우선순위는 안쪽에서 선언한 변수입니다.

```
let best="나는 김전역, 내가 제일 잘 나가"
function whoIsTheBest(){
	let best="나는 나지역, 내가 제일 잘 나가"
    console.log(`1. 누가 제일 잘 나가? : ${best}`);
	//1. 누가 제일 잘 나가? : 나는 나지역, 내가 제일 잘 나가
}
console.log(`2. 누가 제일 잘 나가? : ${best}`);
//2. 누가 제일 잘 나가? : 나는 김전역, 내가 제일 잘 나가
whoIsTheBest();
console.log(`3. 누가 제일 잘 나가? : ${best}`);
//3. 누가 제일 잘 나가? : 나는 김전역, 내가 제일 잘 나가
```

위의 코드를 보면 변수 best의 우선순위는 
함수 whoIsTheBest안에서는 함수 내부에서 선언한 변수 best 입니다. 즉 나지역이 제일 잘나가지요.
만약 안쪽에서 선언하지 않고 재할당만 했다면 전역으로 선언한 best의 값이 함수 안에서 재할당 값으로 바뀌게 됩니다.

## 스코프의 종류
- 블록 스코프(block scope) : 중괄호를 기준으로 범위가 구분된다.(화살표 함수는 블록 스코프이다.)
- 함수 스코프(function scope) : 함수로 둘러쌓인 범위를 의미한다.

변수 선언에 따라 그 사용이 영향을 받을 때 이 범위(스코프)를 유효범위라고 합니다.
이제까지의 예제에서는 let으로 변수를 선언할 때 유효범위는 함수 스코프였지만, 이외에 let은 유효범위로 블록 스코프도 있습니다. 
즉 정리하자면 let은 스코프의 특징에서 언급한 것처럼 블록 스코프의 영향을 받습니다.
변수 키워드별로 스코프의 유효범위를 정리하면 다음과 같습니다.

- var: 함수 스코프의 영향을 받는다. 블록 스코프의 영향은 받지 않는다.
- let, const: 함수 스코프, 블록 스코프의 영향을 받는다.
