# 객체
단순한 배열은 각자의 값이 무엇을 뜻하는지 알수가 없다. 객체란 각각의 값이  무엇을 뜻하는지 key 와 value값을 저장할 수 있는 자료형입니다.

## 객체리터럴
객체를 중괄호 {} 안에 직접 key-value 쌍으로 정의하는 표현 방식입니다.
```js
const car = {
  brand: "Hyundai",
  year: 2022
};
```


## 객체외부데이터에 엑세스하기
객체외부데이터에 엑세스 하기위해서는 두가지 방법이 있습니다.
1. 점 표기법 (Dot notation)<br>
   가장 많이 사용하는 방법입니다. 변수명.key값 입니다.
   
   ```js
   const person = {
    name: "Alice",
    age: 25};
    console.log(person.name); // "Alice"
    ```

2. 대괄호 표기법 (Bracket notation)<br>
  속성 이름을 문자열로 지정합니다

    ```js
    console.log(person["name"]); 
    ```

## 객체 수정하기
   1. 속성표기법 수정
  ```js
        const person = {
        name: "Alice",
        age: 25};
        person.name = "Tom"; // {name: "Tom", age: 25}
  ```

  2. 대괄호 표기법으로 수정
     속성 이름이 변수일 경우 또는 특수문자/공백이 있는 경우 사용합니다

     ```js
     const key = "hobby";
     person[key] = "reading";
     console.log(person.hobby); // "reading"
     ```






