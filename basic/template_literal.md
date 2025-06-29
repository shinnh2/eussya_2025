<h1>템플릿리터럴</h1>
자바스크립트에서 문자열을 작성할 때 자바스크립트 표현식을 포함하여 편하게 작성하는 최신 문법 중 하나입니다. 
백틱으로 전체 문자열을 감싸서 표현하며, 자바스크립트 표현식은 ${} 안에 작성하여 나타냅니다. 
기존의 + 연결 방식보다 훨씬 직관적입니다.

<h2>기본문법</h2>
백틱(`)안에 ${변수명}으로 표현합니다.
<ul>
<li> 변수일 경우<br>
const name = "지훈";
console.log(`안녕하세요, ${name}님!`);
  </li>
 <li> 표현식일 경우<br>
const a = 5;<br>
const b = 10;<br>
console.log(`결과는 ${a + b}입니다.`); // 결과는 15입니다.
 </li> 
  <li> 여러줄일 경우 <br>
    const text = `<br>
이것은 여러 줄<br>
문자열입니다.`;<br>

console.log(text);

  </li>
  <li> 함수호출<br>
  function greeting(){<br>
    return "반가워요"<br>
  }<br>
  console.log(`인사: ${greeting}`);
  </li>
</ul>
