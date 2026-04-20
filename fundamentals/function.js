// function doSomething() {
//   let a;
//   console.log("Doing something...");
//   return a;
// }

//Arrow Function
// let doSomethingElse = () => {
//     console.log("Doing something else")
// }

// console.log(doSomethingElse())

// console.log(doSomething());

// let sum = function (a, b) {
//   return a + b;
// };
// let minus = function (a, b) {
//   return a - b;
// }

// let multiply = function (a, b) {
//     return a * b;
// }

// console.log(sum(2, 3));

// const operations = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
// };

// const operationsInArrowSyntax = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
// };

// // console.log(operations.add(2, 3));
// // console.log(operations.subtract(5, 2));
// // console.log(operations.multiply(3, 4));

// console.log(operationsInArrowSyntax.add(2, 3));
// console.log(operationsInArrowSyntax.subtract(5, 2));
// console.log(operationsInArrowSyntax.multiply(3, 4));

// // Scope: it determines where a variable can be accessed.

// //Global scope
// let y = 13;

// //function scope
// function scopeDemo() {
//   let x = 10;
//   console.log(`Inside the function, y: ${y}`);
// }

// scopeDemo();
// console.log(`Outside the function, y: ${y}`);

// //block scope
// function blockScopeDemo() {
//   if (true) {
//     let z = 20;
//     console.log(`Inside the block, z: ${z}`);
//   }
//   console.log(`Outside the block, z: ${z}`);
// }

// blockScopeDemo();

function closureDemo() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

// function closureViolated(){
//   console.log(count)
// }
// closureViolated()

const makeCounter = closureDemo();
console.log(makeCounter()); 
console.log(makeCounter()); 
console.log(makeCounter()); 
