const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {
  name: "ellie",
  age: 4,
};

print(ellie);

ellie.hasJob = true; //이렇게 뒤늦게 속성과 값을 추가할 수도 있음
console.log(ellie.hasJob);

delete ellie.hasJob; //속성 삭제도 가능
console.log(ellie.hasJob);

//2.Computed Properties
console.log(ellie.name);
console.log(ellie["name"]); //computed properties

ellie["hasjob"] = true;
console.log(ellie.hasjob);

function printValue(obj, key) {
  console.log(obj[key]); //key가 name일지, age일지, hasjob일지 코딩하는 그 순간에는 모르기 떄문에 이렇게 써줌
  console.log(obj.key); //ellie에 key라는 property는 없어서 undefined
}

printValue(ellie, "name");
printValue(ellie, "age");

//3. property value shorthand
const person1 = {
  name: "Bob",
  age: 2,
};
const person2 = {
  name: "Steve",
  age: 12,
};
const person3 = {
  name: "Jack",
  age: 22,
};

const person4 = new makePerson("ellie", 30);
console.log(person4);

function makePerson(name, age) {
  return {
    // name: name, //이렇게 key와 value의 이름이 동일하다면 생략 가능
    name,
    age,
  };
}

//위와 같이 class와 같은 함수를 constructor function이라고 하고 보통 이렇게 쓴다
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age;
  //return this;
}

//5. in operator : property가 있는지 없는지 확인
console.log("name" in ellie);

//6.for ..in vs for ..of
// for(key in obj)

for (key in ellie) {
  console.log(key); //name, age, hasjob
}

//for (value of iterable)
const array = [1, 2, 3];
for (value of array) {
  console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1,obj2,obj3...])
const user = {
  name: "Heather",
  age: "23",
};
const user2 = user; //user,user2 모두 같은 값을 가리키고 있다

user2.name = "SeongGyeong";
console.log(user);
//user2 name의 value를 변경했는데 user name의 value도 같이 바뀜

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

//new way
const user4 = Object.assign({}, user3);
console.log(user4);
user3.name = "Heather";
console.log(user4); //user4의 name은 변하지 않음

//another example
const fruit1 = {
  color: "red",
};

const fruit2 = {
  color: "blue",
  size: "big",
};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
console.log(mixed.color); //blue -> 덮어씌움
console.log(mixed.size); //big
