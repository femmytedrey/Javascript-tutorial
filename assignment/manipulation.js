const items = [
  { name: "Item 1", price: 1000 },
  { name: "Item 2", price: 1500 },
  { name: "Item 3", price: 2000 },
  { name: "Item 4", price: 2500 },
  { name: "Item 5", price: 3000 },
];
const cart = items
  .filter((items) => items.price > 1000)
  .map((items) => ({ ...items, price: items.price + 100 + items.price * 0.1 }));

console.log(cart);
console.log(`The Price of ${cart[0].name} is ${cart[0].price}`);

// BODMAS, BEDMAS
// Brackets of Division, Multiplication, Addition, Subtraction
// Brackets of Exponents, Division, Multiplication, Addition, Subtraction

// (2+2)*4= 16
// 2+2*4=10
//2+2*2=6

// (2+2)*2=8

// console.log(8**2/10)
