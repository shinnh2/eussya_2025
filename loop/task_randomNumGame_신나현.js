let maxNumber=parseInt(prompt("<숫자 맞히기 게임>\n최대 숫자를 입력하세요!"));
while(!maxNumber){
    maxNumber=parseInt(prompt("잘못된 값입니다. 숫자를 입력해주세요!"));
}
const randomNumber=Math.floor(Math.random()*maxNumber)+1;
let attempts=5;
let guessNumber=prompt(`숫자를 맞혀보세요!\n숫자 범위는 1부터 입력하신 최대 숫자까지입니다.\n(남은 도전 횟수: ${attempts})`);
while (guessNumber!==randomNumber) {
    if(guessNumber==="q") break;
    if(attempts<=0) break;
    guessNumber=parseInt(guessNumber);
    if(guessNumber>randomNumber){
        attempts-=1;
        guessNumber=prompt(`입력하신 숫자보다 높은 값을 입력하셨네요!다시 입력해보세요~\n(남은 도전 횟수: ${attempts})`);        
    }else if(guessNumber<randomNumber){
        attempts-=1;
        guessNumber=prompt(`입력하신 숫자보다 낮은 값을 입력하셨네요!\n다시 입력해보세요~\n(남은 도전 횟수: ${attempts})`);
    }else{
        guessNumber=prompt("잘못된 값입니다. 숫자를 입력해주세요!");
    }
}
if(guessNumber==="q") alert("게임이 종료되었습니다.");
else if(attempts<=0) alert("GAME OVER! 도전 횟수를 다 써버렸어요!");
else{alert(`정답입니다!! 숫자는 ${randomNumber}이었습니다~`);}
