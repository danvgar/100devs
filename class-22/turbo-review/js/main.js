// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = "Apple Juice"
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str = "The quick brown fox jumped over the lazy dog."
console.log(str.includes(favDrink))
str = "this string has the word Apple Juice."
console.log(str.includes(favDrink))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let choice = Math.random() * 3
    switch (true) {
        case choice < 1:
            return "rock"
        case choice < 2:
            return "paper"
        case choice < 3:
            return "scissors"
    }
}

rockPaperScissors()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(player1) {
    // player1 = prompt("What is your choice?").toLowerCase()
    console.log(player1)
    let botChoice = rockPaperScissors()
    console.log(botChoice)

    if (botChoice === player1) { // tie
        return `You chose ${player1}, computer chose ${botChoice}, ending in a draw. Try again`

    } else if (player1 !== "rock" && player1 !== "paper" && player1 !== "scissors") { // error
        return `Error. Please enter rock, paper, or scissors`

    } else if (botChoice === "rock") { // rock
        if (player1 === "paper") {
            return `You chose ${player1}, computer chose ${botChoice}. You win!`
        } else if (player1 === "scissors") {
            return `You chose ${player1}, computer chose ${botChoice}. Computer wins!`
        }

    } else if (botChoice === "paper") { // paper
        if (player1 === "scissors") {
            return `You chose ${player1}, computer chose ${botChoice}. You win!`
        } else if (player1 === "rock") {
            return `You chose ${player1}, computer chose ${botChoice}. Computer wins!`
        }

    } else if (botChoice === "scissors") { // scissors
        if (player1 === "rock") {
            return `You chose ${player1}, computer chose ${botChoice}. You win!`
        } else if (player1 === "paper") {
            return `You chose ${player1}, computer chose ${botChoice}. Computer wins!`
        }
    }
}

checkWin()

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playRPSbutWithArrays(arr) {
    arr.forEach(element => {
        console.log(checkWin(element))
    })
}

let choices = ["rock","paper","scissors"]

playRPSbutWithArrays(choices)
