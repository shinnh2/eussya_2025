//아래의 코드는 setTimeout을 활용한 비동기 코드입니다.
const delayedColorChange = (newColor, delay, doNext) => {
	setTimeout(() => {
		document.body.style.backgroundColor = newColor;
		doNext && doNext();
	}, delay);
};

//이 비동기 코드를 동기적으로, 즉 원하는 순서대로 실행하려면 callback을 사용해야 합니다.
//보시는 바와 같이 콜백 헬 현상이 발생합니다. ('콜백 헬'이란?)
delayedColorChange("red", 1000, () => {
	delayedColorChange("orange", 1000, () => {
		delayedColorChange("yellow", 1000, () => {
			delayedColorChange("green", 1000, () => {
				delayedColorChange("blue", 1000, () => {
					delayedColorChange("violet", 1000, () => {});
				});
			});
		});
	});
});

//위의 코드를 주석 처리하고(선택 후 ctrl + /), 아래의 지시를 따라 코드를 입력해주세요.
//1. promise를 사용하여 delayedColorChange 함수의 내용을 새로 작성해 주세요.
//함수명은 delayedColorChange, 매개변수는 newColor, delay 만을 받습니다. 안의 내용은 promise 객체를 새로 만들어 setTimeout 내용을 작성해주세요.
//기존 함수와 비숫하게 작성하되, doNext는 없어지므로 그 대신에 promise 함수의 resolve가 실행되도록 해주세요.

//2. 콜백 헬 없이 delayedColorChange의 실행구문을 작성해주세요. 전달인자는 기존 코드와 같습니다. error가 생길 경우에는 콘솔 창에 error 문구가 뜨도록 해주세요.
