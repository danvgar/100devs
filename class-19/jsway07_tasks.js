// The JS Way
// Chapter 07: Store data in arrays
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter07.md

// ********************
// Coding time!
// ********************
// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// ********************
// Musketeers
// ********************

// Write a program that:
//  - Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
//  - Shows each array element using a for loop.
//  - Adds the "D'Artagnan" value to the array.
//  - Shows each array element using the forEach() method.
//  - Remove poor Aramis.
//  - Shows each array element using a for-of loop.

let musketeers = ["Athos", "Porthos", "Aramis"]

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i])
}
musketeers.push("D'Artagnan")
musketeers.forEach((element) => console.log(element))
musketeers.splice(2, 1)

for (let name of musketeers) {
  console.log(name)
}

// ********************
// Sum of values
// ********************
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];
let sum = values.reduce( (acc,c) => acc + c, 0)


// ********************
// Array maximum
// ********************
// Write a program that creates the following array, then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];
Math.max(...values)


// ********************
// List of words
// ********************
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

let words = []
let input

do {
 input = prompt("Please provide a word. Type stop to stop.")
 words.push(input)
 console.log(words)
} while (input !== "stop")