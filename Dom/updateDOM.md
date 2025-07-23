# DOM 조작하기

## getAttribute
대상 요소(element)의 속성을 읽어오는 메서드입니다.
```js
const elDiv1=document.querySelector("#div1");
elDiv1.getAttribute("id"); //div1
```

## setAttribute
대상 요소의 속성을 설정할 수 있는 메서드입니다.
```js
const elDiv1=document.querySelector("#div1");
elDiv1.setAttribute("data-animal","cat"); //setAttribute(속성, 값)
```

## classList
classList는 대상 요소의 클래스들로 이뤄진 배열 형태의 DOMTokenList객체입니다. 이름처럼 요소의 클래스 목록을 볼 수 있습니다.
이 객체는 읽기 전용이지만 뒤에 add(), remove(), toggle()등의 메서드를 덧붙여서 클래스들을 수정할 수 있습니다.
```js
const elDiv1=document.querySelector("#div1");
elDiv1.classList.add("div1Class"); //이러면 elDiv1요소에 div1Class라는 클래스가 추가됩니다.
```
