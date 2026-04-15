// Falsy Value
// false
// 0
// -0
// '', ""
// null
// undefined
// NaN

// let a = false
// let a = ''
// let b = -0
// console.log(Boolean(a))

// const username = ""

// if(username){
//     //truthy part
//     console.log(`Welcome ${username}`)
// } else {
//     //falsy part
//     console.log("Please provide your username")
// }

// if statement: we use this when we only have one condition to check
// if else statement: we use this when we have two conditions to check
// if else if statement: we use this when we have more than two conditions to check
// tenary operator: we use this when we have only one condition to check and we want to return a value based on that condition

const score = 40;

const students = [
  {
    id: 1,
    name: "John",
    score: 0,
    attendaance: false,
  },
  {
    id: 2,
    name: "Jane",
    score: 70,
    attendance: true,
  },
  {
    id: 3,
    name: "Ayo",
    score: 60,
    attendance: true,
  },
];

// //if stqtement
// if (score >= 80) {
//   console.log("A");
// }

// // if else statement
// if (score >= 80) {
//   console.log("A");
// } else {
//   console.log("You can do better");
// }

//tenary operator
// condition ? true : false
// const result = score >= 80 ? "A": "You can do better"
// console.log(`The result is ${result}`)

// if else if statement
// if (score >= 80) {
//   console.log("A");
// } else if (score >= 70) {
//   console.log("B");
// } else if (score >= 60) {
//   console.log("C");
// } else if (score >= 50) {
//   console.log("D");
// } else if (score >= 40) {
//   console.log("E");
// } else {
//   console.log("F");
// }

//ASSIGNMENT
// Replicate the same if else if logic that we have above in switch statement...

// switch statement: we use this when we have more than two conditions to check and we want to check the value of a variable against multiple cases
// syntax
// switch(variable){
// case value1:
// code to be executed if variable === value1
// break
// }

// const day = "January";

// switch (day) {
//   case "Monday":
//     console.log("I want to wash my clothes");
//     break;
//   case "Tuesday":
//     console.log("I want to go to the gymn");
//     break;
//   case "Wednesday":
//     console.log("I want to go to the park");
//     break;
//   case "Thursday":
//     console.log("I want to go to the beach");
//     break;
//   case "Friday":
//     console.log("I want to go to the movies");
//     break;
//   case "Saturday":
//     console.log("I want to go to the mall");
//     break;
//   case "Sunday":
//     console.log("I want to go to church");
//     break;
//   default:
//     console.log("I want to relax");
// }
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// i = i + 1

//for loop
// for (let i = 1; i <= 100; i++) {
//   // if(i % 2 === 1){
//   //     console.log(i)
//   // }
//   //   i % 2 === 1 ? console.log(i) : console.log(i);
//   console.log(i);
// }

//while loop
// let count = 0;

// while (count < 5) {
//   console.log(count);
//   count++
// }

// const students = ["Ayo", "Jane", "John"];
// // console.log(students)
// // console.log(students[2])
// // console.log(students[0])
// // console.log(students.length)

// // for(let i = 0; i  < students.length; i++){
// //     console.log(`${students[i]} is a student`)
// // }

// // ayo, jane, john

// //For each statement: we use this when we want to iterate over an array and we want to execute a function for each element in the array
// students.forEach(function (student) {
//   console.log(student);
// });
