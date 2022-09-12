web APIs : 자바스크립트 언어 자체에 포함된 것이 아니라 브라우저가 이해할 수 있는 함수들

자바스크립트의 공식 사이트 : ecma-international.org
but 보기가 어려워서 developer.mozilla.org

---

### script asyn과 defer의 차이점

 <br/>

#### asyn

```
<title>Document</title>
<script asyn src="main.js"></script>
```

- html이 위에서부터 아래로 parsing(코드를 읽음)하다가 asyn을 만나면 병렬적으로 src를 fetch도 하고, parsing도 하자고 명령을 내림 <br/>
- 그리고 fecth가 끝나면 fetch한 src를 execute 하기 위해 parsing을 멈추고, 다시 parsing
- src가 3개라도 3개가 순서대로 execute 되지 않고 다운로드된 순서대로 실행되어서 a,b,c로 선언해도 b,a,c로 실행될 수 있다

$\rightarrow$ html을 실행하다가도 execute를 위해 멈출 수 있고, src에서 html 요소를 가져와야 하는 경우 해당 html 요소가 아직 parsing 되지 않았다면 사용 불가

<br/>

#### defer

```
<title>Document</title>
<script defer src="main.js"></script>
```

- parsing 하다가 defer 만나면 병렬적으로 fetch, parsing하고, parsing이 다 끝난 후 src를 execute한다
- src가 3개라면 parsing하는 동안 모두 다운 받고 선언한 순서대로 실행한다

$\rightarrow$ parsing을 먼저 끝내기 때문에 사용자가 src가 execute 되지 않아도 페이지를 볼 수 있다

---

## var 쓰지 마라 : block scope 무시, hoisting 떄문에

```
age = 4;
var age;
```

$\rightarrow$ 선언 var age를 위로 끌어올려주는 hoisting 때문에 위와 같이 작성해도 에러가 나지 않는다

---

### variable

- Number : JS에서는 숫자 타입이 number 하나뿐! 1.4도 number, 2도 number
- String : JS에서는 문자 타입이 string 하나뿐! 'c'도 string, 'hello'도 string
- Symbol : 고유한 식별자를 만들 때 사용된다

```
const symbol1= Symbol('id');
const symbol2= Symbol('id');
console.log(symbol1 === symbole2); //false
```

---

### dynamic typing : 타입을 선언하지 않음

```
let text = 'hello'; //string
text = 1; //number
```

$\rightarrow$ 이름은 text인데 자료형은 number인 상황 발생 - typeScript이 생기게 된 원인
