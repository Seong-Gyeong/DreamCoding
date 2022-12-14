const fruits = ["π", "π"];

//1. λ°°μ΄ μΆλ ₯
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
fruits.push("π", "π");
console.log(fruits);

//pop : remove an item from the end
fruits.pop();
console.log(fruits);

//unshift : add an item to the beginning -> pushλ³΄λ€ λλ¦Ό
fruits.unshift("π", "π");
console.log(fruits);

//shift : remove an item from the beginning -> popλ³΄λ€ λλ¦Ό
fruits.shift();
console.log(fruits);

//splice : remove an item by index position
console.log(fruits);
fruits.splice(1, 2); //1λ² μΈλ±μ€λΆν° 2κ° μ§μ°κΈ°
//κ°μ μ§μ μνλ©΄ μ§μ ν μΈλ±μ€ λΉΌκ³  λ€ μ§μλ²λ¦Ό
console.log(fruits);
//2κ° λΊ μλ¦¬μ μλ°μ΄λ λ§κ³  λ£κΈ°
fruits.splice(0, 2, "π", "π₯­");
console.log(fruits);

//combine two arrays
const fruits2 = ["π", "π₯"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
console.clear();
const fruitList = ["π", "π", "π", "π₯­", "π"];
console.log(fruitList.indexOf("π"));

//includes : λ°°μ΄μ ν΄λΉ μμκ° μλμ§ μλμ§
console.log(fruitList.includes("π"));
console.log(fruitList.includes("π»"));

//lastIndexOf
console.clear();
fruitList.push("π");
console.log(fruitList);
console.log(fruitList.indexOf("π")); //μ²«λ²μ§Έ μ¬κ³Όμ μΈλ±μ€
console.log(fruitList.lastIndexOf("π")); //λ§μ§λ§ μ¬κ³Όμ μΈλ±μ€
