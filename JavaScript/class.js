"use strict";

//class : template
//object : instance of a class

//1. Class declaration
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`Hello, ${this.name}`);
  }
}

const ellie = new Person("ellie", 14);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and setters : 프로그램을 조금 더 방어적으로 만들어준다
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    //this.age : getter 호출 / age : setter 호출
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
    // _age로 쓰는 이유 : value가 this.age에 할당될 때 setter를 부르면서 무한정으로 할당이 되니까
    // _age로 getter와 setter가 한 번만 호출이 되도록 _age로 바꿔준다
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

//3. fields : 정말 최신 기능이라 아직 사용하지 마라
class Experiment {
  publicField = 2; //class 내외부에서 변경, 접근 가능
  privateField = 0; //class 내부에서만 변경, 접근 가능
}

const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //undefined

//4. Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color`);
  }
  getArea() {
    return this.width * this.height;
  }

  //Object의 toString() 오버라이딩
  toString() {
    console.log("This is a triangle");
  }
}

class Triangle extends Shape {
  //오버라이딩
  getArea() {
    console.log((1 / 2) * this.width * this.height);
  }
}

const triangle = new Triangle(20, 20, "blue");
triangle.draw();
triangle.getArea();
triangle.toString();

//5. instanceOf
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true
