//score 함수 예시
//방법1
function score_1(userScore){
    if(userScore<0 || userScore>100){
        return "유효한 점수가 아닙니다.";
    }else{
        if(userScore>=90){
            return "A";
        }else if(userScore>=80){
            return "B";
        }else if(userScore>=70){
            return "C";
        }else if(userScore>=60){
            return "D";
        }else if(userScore<60){
            return "F"
        }   
    }
}
//방법2
function score_2(userScore){
    if(userScore<0 || userScore>100){
        return "유효한 점수가 아닙니다.";
    }else if(userScore>=90){
        return "A";
    }else if(userScore>=80){
        return "B";
    }else if(userScore>=70){
        return "C";
    }else if(userScore>=60){
        return "D";
    }else if(userScore<60){
        return "F"
    } 
}
//방법3
function score_3(userScore){
    if(userScore > 100){
       return "유효한 점수가 아닙니다.";
    }else if(userScore>=90){
        return "A";
    }else if(userScore>=80){
        return "B";
    }else if(userScore>=70){
        return "C";
    }else if(userScore>=60){
        return "D";
    }else if(userScore<60 && userScore > 0){
        return "F"
    }else{
        return "유효한 점수가 아닙니다.";
    }
}

//testScore 함수 예시 
function testScore(){
    if(score(92)==="A"){
        console.log("테스트1을 통과했습니다.");
    }else{
        console.log("테스트를 모두 통과하지 못했습니다.");
        return;
    }
    if(score(84)==="B"){
        console.log("테스트2를 통과했습니다.");
    }else{
        console.log("테스트를 모두 통과하지 못했습니다.");
        return;
    }
    if(score(76)==="C"){
        console.log("테스트3을 통과했습니다.");
    }else{
        console.log("테스트를 모두 통과하지 못했습니다.");
        return;
    }
    if(score(63)==="D"){
        console.log("테스트4를 통과했습니다.");
    }else{
        console.log("테스트를 모두 통과하지 못했습니다.");
        return;
    }
    if(score(47)==="F"){
        console.log("테스트5를 통과했습니다.");
    }else{
        console.log("테스트를 모두 통과하지 못했습니다.");
        return;
    }
    if(score(-99)==="유효한 점수가 아닙니다."){
        console.log("테스트6을 통과했습니다.");
    }else{
        console.log("테스트를 모두 통과하지 못했습니다.");
        return;
    }  
    if(score(102)==="유효한 점수가 아닙니다."){
        console.log("테스트7을 통과했습니다.");
    }else{
        console.log("테스트를 모두 통과하지 못했습니다.");
        return;
    }
    console.log("축하합니다! 모든 테스트를 통과했습니다!");
}

//testScore함수 심화
function testCase(inputScore, grade, passMsg){
    if(score(inputScore)===grade){
        console.log(passMsg);
        return true;
    }else{
        console.error("테스트를 모두 통과하지 못했습니다.");
        return false;
    }
}

function testScore_advanced(){
    testCase(92, "A", "테스트1을 통과했습니다.");
    testCase(84, "B", "테스트2를 통과했습니다.");
    testCase(76, "C", "테스트3을 통과했습니다.");
    testCase(63, "D", "테스트4를 통과했습니다.");
    testCase(47, "F", "테스트5를 통과했습니다.");
    testCase(-99, "유효한 점수가 아닙니다.", "테스트6를 통과했습니다.");
    testCase(102, "유효한 점수가 아닙니다.", "테스트7를 통과했습니다.");
    console.log("축하합니다! 모든 테스트를 통과했습니다!");
}
