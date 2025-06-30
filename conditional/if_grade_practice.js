//방법1
function score(userScore){
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
function score(userScore){
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
