const fruits = ["apple", "banana", "orange", "avocado"];
const numbers = [3, 1, 4, 1, 5, 9];
// assignment: filter numbers that are more than 4 out

const user = [
  { name: "Alice", age: 30 },
  { name: "David", age: 30 },
  { name: "Bob", age: 25 },
  {
    name: "Charlie",
    age: 35,
  },
];
//assignment: add 4 other users and extra property "score", and filter users that score below 80 out of the array

// console.log(fruits[2]);
// console.log(fruits.length)

// if(Array.isArray(obj)) {
//     console.log('fruits is an array');
// }
console.log(fruits);

//push: to add an item to the end of an array
// fruits.push("grape");
// console.log(fruits);

// //unshift: to add an item to the beginning of an array
// fruits.unshift("kiwi");
// console.log(fruits);

// //pop: to remove the last item from an array
// fruits.pop();
// console.log(fruits);

// //shift: to remove the first item from an array
// fruits.shift();
// console.log(fruits);

// const replacement = ["mango", "pear"];
// console.log(...replacement)

// splice: to add or remove items from an array
// splice(start, deleteCount, ...itemToInsert)
// fruits.splice(1, 2, ...replacement);
// console.log(fruits);

// console.log(fruits.sort());
// console.log(fruits.sort().reverse());
// console.log(numbers.sort((a, b) => a - b)); //ascending order
// console.log(numbers.sort((a, b) => b - a)); //descending order

// console.log(fruits.slice(1,2))

//.push, .pop. .shift, .unshift, .splice, .sort, .reverse, .slice, .concat, .join, .indexOf, .lastIndexOf, .includes
// const incrementBy2 = numbers.map((number) => number + 2);
// console.log(incrementBy2);

// const formatFruits = fruits.map((fruit) => `This is ${fruit}`);
// console.log(formatFruits);

// const getUserNames = user.map((user) => user.name);
// console.log(getUserNames);

// const youngUsers = user.filter(user => user.age <= 30)
// const youngUserNames = youngUsers.map(user => user.name);

// console.log(youngUsers);
// console.log(youngUserNames);

// item 1: 1000
// item 2: 500
// item 3: 2000
// item 4: 1500
// item 5: 3000

const cart = [
  { name: "item 1", price: 1000 },
  { name: "item 2", price: 500 },
  { name: "item 3", price: 2000 },
  { name: "item 4", price: 1500 },
  { name: "item 5", price: 3000 },
];

//Chaining methods in javascript: this is mostly based on what is needed, there's not perfect or constantn solution to achieving this. Just undersand your problem and structure your chaining basee on it
const result = cart
  .filter((item) => item.price > 1000)
  .sort((a, b) => a.price - b.price)
  .map((item) => item.name);

// assignment: filter items that are more than 1000, add 100 naira to each item, then sort the item in descending order based on the price, and then return the name and the price with a template literial in the format "The price of item 1 is 1100"


console.log(result);
// total: 0 + 1000
// total: 1500
// total: 3500
// total: 5000
// total: 8000

//reducer: to calculate the total price of the items in the cart
// variable.reduce(accumulator, initialValue) => accumulator + initialValue

// const grandTotal = cart.map((item) => item.price)
// console.log(grandTotal);

// const grandTotal = cart.reduce((total, item) => total + item.price, 0)
// console.log(grandTotal)

// console.log(numbers.includes(9));
// console.log(numbers.every((num) => num > 20));
// console.log(numbers.some((num) => num > 20));

// console.log(user.findIndex((u) => u.age === 25));
