<h1>Switch문</h1>

하나의 값을 여러케이스와 비교해서 처리할수 있는 조건문입니다. <br>
각 case문 마다 순차적으로 실행되다가 case가 일치하는 경우 break문으로 빠져나갑니다.  <br>
break를 쓰지않으면 조건에 맞는 case 다음에 있는 case도 같이 출력되어버리므로 주의 해야합니다. <br>
케이스 어디에도 조건이 일치하지 않는경우 default절이 실행됩니다.
 ```js
switch(day){ 
case 1: 
 console.log("monday") 
break;
case 2:
 console.log("tuesday")
break; 
default: 
console.log("i dont know")  
}
```
