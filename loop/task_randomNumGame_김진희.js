let input =  parseInt(prompt("숫자를 입력해주세요"));
while(!input){
    input = parseInt(prompt("유효하지 않으니 다시 입력해주세요"));
}
let randomNum = Math.floor(Math.random() * input) + 1;
let guess = parseInt(prompt("숫자를 추측해 보세요"))

   while(guess !== randomNum){
        if(randomNum > guess ){
             guess = parseInt(prompt("숫자가 높으니 다시 입력해주세요"));
        }else if(randomNum < guess){
            guess = parseInt(prompt("숫자가 낮으니 다시 입력해주세요"));
        }else if(guess=="q"){
            break;
        }else{
            guess = parseInt(prompt("유효하지 않으니 다시 입력해주세요"));
        }     
    } 
console.log("정답입니다");
 
