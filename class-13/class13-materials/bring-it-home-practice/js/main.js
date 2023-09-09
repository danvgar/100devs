// *Variables*
// Create a variable and console log the value

let dummyVariable = "Hello World"
console.log(dummyVariable)

// Create a variable, add 10 to it, and alert the value

let num1 = 10
num1 = num1 + 10
alert(num1)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(num1,num2,num3,num4) {
    let diff = num1 - num2 - num3 - num4
    alert(diff)
}

// Create a function that divides one number by another and returns the remainder
function findRemainder(num1,num2) {
    let remainder = num1 % num2
    alert(remainder)
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function runJumanji(num1,num2) {
    let jumanji = num1 + num2
    if(jumanji>50){
        alert("Jumanji!")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function runZebra(num1,num2,num3) {
    let zebra = (num1 * num2 * num3)

    if(zebra % 3 === 0) {
        alert('ZEBRA')
    }
}

runJumanji(50,51)
runZebra(3,3,3)