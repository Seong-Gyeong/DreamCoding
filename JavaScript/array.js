const fruits = ["🍎", "🍒"];

//1. 배열 출력
//a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//b.for of
for (let fruit of fruits) {
  console.log(fruit);
}

//c.forEach
fruits.forEach((fruit) => console.log(fruit));

//2. Addition, deletion , copy
//push : add
fruits.push("🍌", "🍇");
console.log(fruits);

//pop : remove an item from the end
fruits.pop();
console.log(fruits);

//unshift : add an item to the beginning -> push보다 느림
fruits.unshift("🍑", "🍐");
console.log(fruits);

//shift : remove an item from the beginning -> pop보다 느림
fruits.shift();
console.log(fruits);

//splice : remove an item by index position
console.log(fruits);
fruits.splice(1, 2); //1번 인덱스부터 2개 지우기
//개수 지정안하면 지정한 인덱스 빼고 다 지워버림
console.log(fruits);
//2개 뺀 자리에 수박이랑 망고 넣기
fruits.splice(0, 2, "🍉", "🥭");
console.log(fruits);

//combine two arrays
const fruits2 = ["🍈", "🥑"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
console.clear();
const fruitList = ["🍎", "🍒", "🍉", "🥭", "🍇"];
console.log(fruitList.indexOf("🍎"));

//includes : 배열에 해당 요소가 있는지 아닌지
console.log(fruitList.includes("🍎"));
console.log(fruitList.includes("🍻"));

//lastIndexOf
console.clear();
fruitList.push("🍎");
console.log(fruitList);
console.log(fruitList.indexOf("🍎")); //첫번째 사과의 인덱스
console.log(fruitList.lastIndexOf("🍎")); //마지막 사과의 인덱스
