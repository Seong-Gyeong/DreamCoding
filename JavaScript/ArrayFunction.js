//Q1. make a string out of an array
const fruits = ["apple", "banana", "orange"];
console.log(fruits.join(""));

//Q2. make an array out of a string
const fruit = "🍒,🍇,🍉,🥑";
const fruitList = fruit.split(",");
console.log(fruitList);

//Q3. make this array look like this : [5,4,3,2,1]
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();
console.log(reversedArray);

//Q4. make new array without the first two elements
const array2 = [1, 2, 3, 4, 5];
const array3 = array2.slice(2, 5);
console.log(array3);

// Q5. find a student with the score 90
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

const s = students.filter((s) => s.score >= 90);
console.log(s);

//Q6. make an array of enrolled students
const s2 = students.filter((s) => s.enrolled === true);
console.log(s2);

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
const s3 = students.map((s) => s.score);
console.log(s3);

// Q8. check if there is a student with the score lower than 50
const trueOrNot = students.some((s) => s.score < 50);
console.log(trueOrNot);

// Q9. compute students' average score
let sum = 0;
for (let s of students) {
  sum += s.score;
}
const avg = sum / students.length;
console.log(avg);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
let str = "";
for (let s of students) {
  str += s.score;
}
console.log(str);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
const arr = students.map((s) => s.score);
arr.sort();
console.log(arr);
