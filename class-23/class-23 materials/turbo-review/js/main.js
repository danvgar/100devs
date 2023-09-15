// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let str = "The quick brown fox jumped over the lazy dog."
str[str.length - 1] === "?" ? alert(`"${str}" is a question`) : alert`"${str}" is not a question.`
alert(str.endsWith("?"))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let secondStr = "Hello, I am a jr. dev looking to improve the world!"
secondStr = secondStr.replaceAll("jr. dev", "software engineer")
console.log(secondStr)


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function createRockPaperScissorsChoice() {
    let choice = Math.random() * 3
    switch (true) {
        case (choice < 1):
            return "rock"
        case (choice < 2):
            return "paper"
        case (choice < 3):
            return "scissors"
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice) {
    let botChoice = createRockPaperScissorsChoice()
    console.log(playerChoice)
    console.log(botChoice)
    if ((playerChoice === "rock" && botChoice === "scissors") ||
        (playerChoice === "paper" && botChoice === "rock") ||
        (playerChoice === "scissors" && botChoice === "paper")) {
        return `Player wins!`
    } else {
        return `Computer wins!`
    }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

let choices = ["rock", "paper", "scissors"]

function playRPS(arr) {
    arr.forEach(element => console.log(checkWin(element)))
}

playRPS(choices)