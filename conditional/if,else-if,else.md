# if
if 문은 지정한 조건이 참인 경우 명령문(statement)을 실행합니다. 
조건은 소괄호 안에, 참인 경우 실행될 명령문은 중괄호 안에 작성합니다.
```js
  if (a > 0) {
    console.log("positive");
  } else {
    console.log("NOT positive");
  }
```
# else-if
앞선 if문에 작성한 조건이 거짓일 경우 중에서, else if의 조건이 참인 경우 명령문을 실행합니다.
# else
앞선 if문의 조건이 참인 경우 명령문이 실행된다면, 그 외의 나머지(즉, if문의 조건이 거짓인 경우)의 경우 명령문을 실행합니다.
# 참고
다음과 같이 if, else if, else 구문을 사용하여 명령문을 실행할 수 있습니다.
```
    if (조건1)
       명령문1
    else if (조건2)
       명령문2
    else if (조건3)
       명령문3
    ...
    else
       명령문N
```
위의 구문의 조건3까지는 아래와 같은 내용입니다.
```
    if (조건1)
       명령문1
    else
       if (조건2)
          명령문2
       else
          if (조건3)
    ...
```
