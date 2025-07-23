# HTMLCollection
HTMLCollection이란 웹문서에서 선택한 DOM 요소(element)들을 문서 내 순서대로 정렬하여 나타낸 객체입니다. 
arguments 객체와 같이 배열과 유사한 형태를 가졌습니다. 
HTMLCollection은 리스트에서 선택할 때 필요한 속성과 메서드를 제공하며 문서가 바뀔 때 실시간으로 업데이트됩니다. 

## 속성
- HTMLCollection.length (읽기 전용): 
컬렉션 항목의 갯수를 반환합니다.

## 메서드
- HTMLCollection.item(): 
리스트에서 주어진 인덱스의 노드를 반환합니다. 인덱스가 범위 밖일 경우 null을 반환합니다.

- HTMLCollection.namedItem(): 
리스트에서 ID 또는 이름 속성이 주어진 문자열과 일치하는 노드를 반환합니다. 이름 속성 판별은 HTML에서만 최후의 수단으로 쓰이며 참조하는 요소가 name 속성을 지원해야 합니다. 일치하는 요소가 없으면 null을 반환합니다.

```js
let elem1 = document.forms[0]; // document.forms은 HTMLCollection
let elem2 = document.forms.item(0);

alert(elem1 === elem2); // "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // "true"
```

참고 링크: https://developer.mozilla.org/ko/docs/Web/API/HTMLCollection
