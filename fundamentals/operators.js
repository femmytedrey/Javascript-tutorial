// Arithemetic Operators
// Comparison Operators
// Logical Operators
// Assignment Operators: the assignment operators in js is =, +=, -=, *=, /=, **=, %=
// let x = 10
// x = x / 2
// x /= 2

// Arithemetic Operators
// console.log(10 % 4)
// console.log(10_000_000 % 9_000_000)

// function checkEvenNumber(num){
//     if(num % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// function greetUser(name) {
//   return `Hello ${name}`;
// }

// console.log(greetUser("Tunde"));

// console.log(checkEvenNumber(4))
// console.log(8 ** 2)
// console.log(10/2, 10+2)

// let x = 10;

// // x = x + 5
// // x += 5
// // x+=20
// x++;
// // x = x + 1
// x--;
// // x = x - 1

// // x = x - 5
// // x -= 5

// console.log(x);

// Comparison Operators
// ===, !==, >, <, >=, <=, ==

// const a = 10;
// const b = 20;
// const c = "10";

// console.log(a === b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(b >= a);
// console.log(a <= b);

// type coercion
// console.log(a === c)
// console.log(a == c)

// Logical Operators
// && (AND), || (OR), ! (NOT)

// && (AND) example
// const actualAge = 16;
// function accessControl(age) {
//   if (age && age >= 18) {
//     return "you are an adult";
//   }
// }

// console.log(accessControl());

const a = 10;
const b = 10;
const c = 20;
const d = 20;
// console.log((a === b) && (c === d))

// || (OR) example
// console.log(true || false);

// console.log(!true);

//template literals

const name = "Olaide";
const age = 30;

console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`);

function check() {
  throw new Error("Something went wrong in check()");
}

function functionExample() {
  try {
    check();
  } catch (error) {
    console.log("An error occurred: " + error.message);
  }
}

functionExample();
