### Logical operators 사용할 때 Tip

```
console.log(`or : ${value1 | value2 | check()}`);
```

$\rightarrow$ 연산이 많은 함수의 경우 비교(||,&&) 연산자를 쓸 때 꼭 마지막에 써서 앞에 조건들이 true가 아닐 경우에만 마지못해 실행이 되게!

---

### ==과 ===의 차이

== : 타입 변환해서 비교한다.(loose equality) '5'와 5는 같다고 판별
=== : 타입 변환하지 않고 비교한다. (strict equality) '5'와 5는 같지 않다고 판별

```
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false
```

### object : 값과 자료형이 모두 같더라도 object가 저장되어 있는 메모리가 다르기 때문에 다른 값으로 판별이 된다

```
const ellie1 = {name ='ellie'};
const ellie2 = {name ='ellie'};
const ellie3 = eliie1;

console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 == ellie3); //true
```
