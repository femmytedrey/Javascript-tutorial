// var
// let
// const
// var age;

// Variable: a container for storing data values
// Keywords: Keywords are reserved words. const

// rules that are guiding variables in javascript
// 1. a variable name cannot start with a number, it must start with a letter or an underscore or a dollar sign
// 2. a variable cannot be a keyword
// 3. a variable name cannot contain spaces, it can use camelCase or snake_case
// 4. a variable name is case sensitive

// Algorithm is a step by step solution for solving a particular problem.
// Pseudocode: is a plain language description of the steps in an algorithm or another system. It is used to design and plan algorithms before writing the actual code.

// const $user1 = 100
// const userName = "smalldoctor"
// const username = "bigdoctor"

let age;
age = 20;
age = 12;

var name;
name = "ola";
name = "olaoluwa";

const dateOfBirth = "2000-01-01";

console.log(age);
console.log(name);
console.log(dateOfBirth);

function greetUser(name) {
  if ((name = "John")) {
    var greeting = "Hello John";
  }
  console.log(greeting);
}

greetUser("John");
