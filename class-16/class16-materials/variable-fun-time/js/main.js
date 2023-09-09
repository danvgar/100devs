//--- Easy
//create a variable and assign it a number
let num1 = 1

//minus 10 from that number
num1 -= 10

//print that number to the console
console.log(num1)

//--- Medium
//create a variable that holds a value from the input
let num2 = document.querySelector("#danceDanceRevolution").value

//add 25 to that number
num2 += 25

//alert that number
alert(num2)

//--- Hard
//create a variable that holds the h1
let h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click',sum)
// let sum = (num1, num2) => console.log(num1 + Number(num2))

function sum() {
    console.log(num1 + Number(num2))
}

// Write the function but it only grabs the input value once you've clicked the header
// function sum() {
//     let num2 = document.querySelector("#danceDanceRevolution").value
//     console.log(num1 + Number(num2))
// }