// - h1#main-title의 색깔을 `#ff5478` 으로 바꿔주세요.
// - ul.menu의 세번째 자식요소인 `<li>Java</li>` 를 삭제해주세요.
// - ul.menu의 자식요소 li를 하나 추가하는데, 텍스트는 Git이여야 합니다.
// - p태그에 `content` 라는 이름의 클래스를 추가해주세요.
// - p태그 안의 내용을 `으쌰으쌰! 화이팅합시다!` 로 바꿔주세요.
const elMainTitle = document.querySelector("#main-title");
elMainTitle.style = "color:#ff5478";
const elMenuList = document.querySelector(".menu");
const elMenuItemJava = elMenuList.children[2];
elMenuItemJava.remove();
const newMenuItem = document.createElement("li");
newMenuItem.textContent = "Git";
elMenuList.append(newMenuItem);
const elPContent = document.querySelector("p");
elPContent.classList.add("content");
elPContent.textContent = "으쌰으쌰! 화이팅합시다!";
