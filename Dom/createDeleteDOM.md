# ✏ createElement
만들고 싶은 요소(태그)의 타입을 전달합니다.
document.creatElement(img)
# ✏ append
## append
· 부모 노드에 노드(Node)또는문자열을 자식으로 추가합니다.
· 노드+문자열 모두 가능하고 동시에 여러개 추가 가능합니다. 
· IE 지원이 불가능합니다.
· 반환값이 없습니다.

## appendChild
부모 노드에 노드(Node)를 자식으로 추가합니다. 
노드만 추가 가능하며 여러개 추가는 불가능합니다.
IE포함 모든 브라우저 지원가능합니다.

```js
const newImg = document.createElement('img');
document.body.appendChild(newImg);
결과값 // <body><img src=""></body>
```

# ✏ prepend
JavaScript에서 요소의 가장 앞쪽에 새 요소나 내용을 추가할 때 사용하는 메서드입니다.

```js
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = '첫 번째 항목';
ul.prepend(newLi); // ul의 가장 앞에 li가 들어감
```


# ✏ remove
### removeChild
 DOM Node에서 자식 노드를 제거하고 제거된 노드를 반환합니다.
부모 노드에 노드(Node)를 자식으로 삭제합니다. 
노드만 추가 가능하며 여러개 삭제는 불가능합니다.
IE포함 모든 브라우저 지원가능합니다.
```js
const firstLi = document.querySelector('li);
const ul = firstLi.parentElement;
ul.removeChild(firstLi);
```
### remove
해당 요소 자신을 직접 제거합니다. 
부모요소가 필요없습니다. 
IE에서는 지원하지 않습니다.  
```js
const firstLi = document.querySelector('li);
firstLi.remove();
```
# ✏  insertAdjacentElement
인터페이스 의 메서드는 호출 Element된 요소를 기준으로 주어진 위치에 주어진 요소 노드를 삽입합니다.

사용문법
```js
target.insertAdjacentElement(삽입할 위치,삽입할 노드);
```
삽입할 위치
"beforebegin" :	호출 Element된 요소 바로 앞에 삽입 <br>
"afterbegin" : 	호출 Element된 요소의 첫 자식으로 삽입 <br>
"beforeend" : 호출 Element된 요소의 마지막 자식으로 삽입 <br>
"afterend" : 호출 Element된 요소의 바로 뒤에 삽입 <br>

