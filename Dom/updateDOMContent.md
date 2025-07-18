# DOM 내용 바꾸기(updateDOMContent)
## innerText

HTML 요소 안에 있는 "텍스트 콘텐츠"를 읽거나 바꾸는 속성입니다. 화면에 보이는 텍스트만 가져오거나 설정합니다. <br>

1.텍스트 가져오기
```js
<p id="greeting">안녕하세요!</p>
<script>
  const greeting = document.querySelector('#greeting');
  console.log(greeting.innerText);  // 출력: 안녕하세요!
</script>
```
 2. 텍스트 바꾸기
```js
greeting.innerText = '반가워요!';  // <p> 내용이 "반가워요!"로 바뀜니다.
```

## innerHTML
요소(element) 내에 포함 된 HTML 또는 XML 마크업을 가져오거나 설정합니다.
주의사항)innerHTML로 삽입하는 문자열에 **스크립트나 사용자 입력이 포함되면 XSS(보안 문제)**가 생길 수 있음
단순 텍스트만 바꿀 거면 textContent 사용을 권장
```js
<div id="box"></div>
<script>
  document.getElementById("box").innerHTML = "<strong>굵은 텍스트</strong>";
</script>
```

## textContent
javaScript에서 요소의 전체 텍스트 내용을 가져오거나 변경할 때 사용하는 속성입니다.
innerText와는 다르게, 보이지 않는 텍스트(숨겨진 요소 ex)display:none; 등)도 포함해서 가져옵니다.

기본문법
```js
element.textContent          // 텍스트 가져오기
element.textContent = '내용'; // 텍스트 바꾸기
<div id="demo">
  Hello <span style="display: none;">World</span>
</div>
<script>
  const demo = document.querySelector('#demo');
  console.log(demo.textContent); // 출력: "Hello World" //숨겨진 display:none의 텍스트 world도 가져옵니다.
</script>
```
