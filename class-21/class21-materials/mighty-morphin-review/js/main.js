// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = "Halloween"
favHoliday = "Christmas"
console.log(favHoliday.toUpperCase())

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = "Hello, world!"
alert(str.slice(str.length - 3, str.length))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function hundredMinus(n1, n2, n3, n4, n5) {
    alert(100 - n1 - n2 - n3 - n4 - n5)
}

hundredMinus(10, 15, 20, 25, 30)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function minMax(n1, n2, n3) {
    let arr = Array.from(arguments)
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    console.log(max)
    console.log(min)
}

minMax(10, 20, 30)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function coinFlip() {
        console.log(Math.floor((Math.random() * 2)) ? "heads" : "tails")
}

coinFlip()


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function coinFlipRepeat(num) {
    let i = 0
    while (i < num) {
       coinFlip()
        i++
    }
}

coinFlipRepeat(10)