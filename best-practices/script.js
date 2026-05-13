//spread operator ...
//rest operator ...
//optional chaining (?)
//Nullish coalescing(??)

// const original = [1, 2, 3];

// //bad practice
// // const bad = original
// // // bad.push(4)

// // const good = [...original]
// // good.push(4)

// console.log(...original)

// const fruits = ["apple", "mango", "orange"]
// const vegies = ["spinach", "ugwu", "carrot"]
// const all = [...fruits, ...vegies]

// const newArray = [...vegies, "flowers"]

// console.log(newArray)

// const user = {
//   id: 1,
//   name: "Olaide",
//   role: "student",
// };

// const cloneOlaide = { ...user };

// console.log(user)
// console.log(cloneOlaide)

// const { id, ...otherInfo } = user;

// const newUser = {
//   id: 2,
//   ...otherInfo,
// };

// console.log(newUser)

// function greetUser(...name){
//     return `Hello ${name}`
// }

// console.log(greetUser("Olaide", ""))

// sum(1,2,3,4,5,6) 1+2+3+4+5+6

// function sum(...numbers) {
//   return numbers.reduce((total, n) => total + n, 0);
// }

// console.log(sum(1, 2, 3, 5, 6, 7));

// const user = {
//   id: 1,
//   name: "Olaide",
//   role: "student",
//   profileInformation: null,
// };

// // console.log(user.extraData?.age);

// //Nullish coalescing(??)  (null or undefined)
// //OR || (null, undefined, empty string)

// const userName = "femidev"
// const firstName = "Oluwafemi"
// const lastName = 0

// //
// const userLastName = lastName ?? firstName

// console.log(userLastName)

const expenses = [
  {
    id: 1,
    category: "Food",
    description: "Jollof rice",
    amount: 3500,
    date: "2024-05-01",
  },
  {
    id: 2,
    category: "Transport",
    description: "Uber to Lekki",
    amount: 1800,
    date: "2024-05-01",
  },
  {
    id: 3,
    category: "Food",
    description: "Lunch at office",
    amount: 2200,
    date: "2024-05-02",
  },
  {
    id: 4,
    category: "Bills",
    description: "DSTV subscription",
    amount: 5000,
    date: "2024-05-02",
  },
  {
    id: 5,
    category: "Transport",
    description: "Bus to island",
    amount: 500,
    date: "2024-05-03",
  },
  {
    id: 6,
    category: "Shopping",
    description: "New shirt",
    amount: 12000,
    date: "2024-05-03",
  },
  {
    id: 7,
    category: "Food",
    description: "Suya with friends",
    amount: 4500,
    date: "2024-05-04",
  },
];

//map
// const description = expenses.map((expense) =>
//   console.log(`The description for this item is ${expense.description}`),
// );

// const foodExpenses = expenses.filter((expense) => expense.category === "Food");

// const bigSpend = expenses.filter((e) => e.amount > 3000);

// const total = expenses.reduce((sum, expense) => {
//   return sum + expense.amount;
// }, 0);

const firstFood = expenses.find((e) => e.category === "Food");

const allAmountIsGreaterThanZero = expenses.every((e) => e.amount > 0);
const allAmountIsGreaterThanZero_1 = expenses.some((e) => e.amount > 5000);

console.log(allAmountIsGreaterThanZero_1);