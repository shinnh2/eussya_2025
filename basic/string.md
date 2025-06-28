# 문자열 속성과 메서드

## 속성(프로퍼티)
### .length
문자열의 길이를 나타내는 프로퍼티입니다. 길이는 1부터 시작합니다.

## 메서드
### str.indexOf(searchValue[, fromIndex])
문자열에서 특정 문자를 찾아 첫번째로 등장하는 문자의 인덱스를 반환합니다. 없으면 -1을 반환합니다.
- searchValue: 문자열에서 찾으려는 값입니다.
- fromIndex: 찾는 시작 지점 인덱스입니다. 생략 가능하며 생략시 0으로 전체 문자열에서 찾습니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

### str.slice(indexStart[, indexEnd])
문자열의 특정 위치를 잘라 반환하는 메서드입니다. 원본을 변경하지 않습니다.
- indexStart: 자른 문자열의 시작하는 인덱스
- indexEnd: 자른 문자열 다음의 인덱스. 생략 가능하며 생략시 문자열의 마지막까지 자릅니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 
### str.replace(pattern, replacement)
특정 문자열을 찾아 원하는 문자열로 바꾸는 메서드입니다. 원본을 변경하지 않습니다.
- pattern: 바꾸려고 하는 대상 문자열. 정규표현식이 될 수도 있습니다.
- replacement: 바꿀 문자열. pattern에 해당되는 문자열을 이 문자열로 바꿉니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace

### str.toLowerCase()
문자열을 모두 소문자로 변환하는 메서드입니다. 원본을 변경하지 않습니다.

### str.toUpperCase()
문자열을 모두 대문자로 변환하는 메서드입니다. 원본을 변경하지 않습니다.

### str.trim()
문자열 처음과 끝의 공백을 제거한 문자열을 반환합니다. 원본을 변경하지 않습니다.
