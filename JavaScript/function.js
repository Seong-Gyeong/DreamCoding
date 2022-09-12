//JS에서 함수는 object.
//따라서 변수에 할당할 수도 있고, return할 수도 있다

//1. default parameters
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage("Hi"); //from 부분은 undefined

//2. Rest Parameters
function printAll(...args) {
  //... 붙이면 배열 전체를 인자에 넣는 역할
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(args);
  }
}
printAll("hi", "hello", "bye");

//3. Early return, early exit

//bad
function upgradeUser(user) {
  //포인트가 10을 초과한 사람들을 업그레이드하는 함수
  if (user.point > 10) {
    //long upgrade logic
  }
}

//good
function upgradeUser(user) {
  //포인트가 10을 초과한 사람들을 업그레이드하는 함수
  if (user.point <= 10) {
    return;
  }
  //upgrade logic
}

//4. function expression, declaration

//function declaration : hoisting이 되어서 함수 정의 전에 선언해도 사용 가능

//expression : hoisting이 안됨
const print = function () {
  console.log("print");
};
print();

//5. callback : function expressiont을 이용하여 매개변수에 넣어줌
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

//6.arrow function
const add = (a, b) => {
  return a * b;
};

//7. IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})(); //함수를 괄호로 감싸고 뒤에 함수 호출하듯이 괄호 넣어주면 선언 없이도 바로 호출됨

//Quiz
