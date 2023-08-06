// The JS Way
// Chapter 02: Play with variables
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter02.md

// ********************
// Coding time!
// ********************
// Build a habit of choosing good variable names in all exercises, starting with these ones.

// ********************
// Improved hello
// ********************
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

const name = prompt("Hello, what is your name?")
alert(`Hello, ${name}`)

// ********************
// Final values
// ********************
// Observe the following program and try to predict the final values of its variables.

let a = 2;
// a === 2
a -= 1;
// a === 1
a++;
// a === 2
let b = 8;
// b === 8
b += 2;
// b === 10
const c = a + b * b;
// a === 2
// b === 10
// c = 2 + 10 * 10 = 2 + 100 = 102
const d = a * b + b;
// a === 2
// b === 10
// c === 102
// d = 2 * 10 + 10 = 20 + 10 = 30

const e = a * (b + b);
// a === 2
// b === 10
// c === 102
// d === 30
// e === 2 * (10 + 10) = 40

const f = a * b / a;
// a === 2
// b === 10
// c === 102
// d === 30
// e === 40
// f = 2 * 10 / 2 = 20 / 2 = 10

const g = b / a * a;
// a === 2
// b === 10
// c === 102
// d === 30
// e === 40
// f === 10
// g = 10 / 2 * 2 = 5 * 2 = 10

console.log(a, b, c, d, e, f, g);
// 2 10 102 30 40 10 10

// Check your prediction by executing it.

// ********************
// VAT calculation
// ********************
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

const rawPrice = prompt("Please provide the raw price.")
const finalPrice = rawPrice * 1.2
alert(`The final prce is ${finalPrice}`)

// ********************
// From Celsius to Fahrenheit degrees
// ********************
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
const celsius = prompt("Please provide the temperature in celsius")
const fahrenheit = celsius * (9/5) + 32
alert(`The temperature in fahrenheit is ${fahrenheit}`)

// !!! info
// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.

// ********************
// Variable swapping
// ********************
// Observe the following program.

let number1 = 5;
let number2 = 3;
let number1copy = number1
// number1copy = 5
number1 = number2
// number1 = 3
number2 = number1copy
// number2 = 5

// // TODO: type your code here (and nowhere else!)

console.log(number1); // Should show 3
console.log(number2); // Should show 5 
// Add the necessary code to swap the values of variables number1 and number2.

// !!! tip
// This exercise has several valid solutions. You may use more than two variables to solve it.