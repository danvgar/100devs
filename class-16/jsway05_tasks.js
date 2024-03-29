// The JS Way
// Chapter 04: Write functions
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter05.md

// ********************
// Coding time!
// ********************

// ********************
// Improved hello
// ********************
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// // Say hello to the user
function sayHello(firstName, lastName) {
  firstName = prompt("First Name:")
  lastName = prompt("Last Name:")
  const message = `Hello, ${firstName} ${lastName}!`;
  console.log(message)
  return message;
}

sayHello()

// // TODO: ask user for first and last name
// // TODO: call sayHello() and show its result


// ********************
// Number squaring
// ********************
// Complete the following program so that the square1() and square2() functions work properly.

// // Square the given number x
function square1(x) {
  //   // TODO: complete the function code
  return x ** 2
}

// // Square the given number x
const square2 = x => x ** 2
// TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
// When it's done, update the program so that it shows the square of every number between 0 and 10.

// !!! info
// Writing 10 dumb calls to `square()` is forbidden! You know how to repeat statements, don’t you? ;)


// ********************
// Minimum of two numbers
// ********************
// Let's pretend the JavaScript Math.min() function doesn’t exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

function min(num1, num2) {
  return num1 < num2 ? num1 : num2
}

// // TODO: write the min() function
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1


// ********************
// Calculator
// ********************
// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2
    case "-":
      return num1 - num2
    case "*":
      return num1 * num2
    case "/":
      return num1 / num2
    default:
      console.log("Something went wrong! Please ensure you've entered a number, an operator as a string, and another number.")
  }
}

// // TODO: complete program
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity


// ********************
// Circumference and area of a circle
// ********************
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

function circleCircum(r) {
  const PI = Math.PI
  // circumference = 2 * pi * radius
  return 2 * PI * r
}

circleCircum(3) // 18.849


function circleArea(r) {
  const PI = Math.PI
  // area = pi * radius ** 2
  return PI * r ** 2
}

circleArea(3) // 28.274

// Here are some tips for solving this exercise:
//  - Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
//  - The value of number π (Pi) is obtained with Math.PI in JavaScript.
//  - You might want to use the exponentiation operator ** to perform computations.
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3