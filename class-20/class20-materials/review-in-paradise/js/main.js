// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "asian"
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = "Hello, world!"
alert(str.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideThenMultiply(n1, n2, n3) {
    return n1 / n2 * n3
}
alert(divideThenMultiply(1, 2, 3))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num) {
    num = num ** (1 / 3)
    console.log(num)

    return num
}
cubeRoot(8)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isItSummer(month) {
    switch (month.toLowerCase()) {
        case "june":
        case "july":
        case "august":
            alert("YAY")
            break;
        default:
            alert("BOO")
            break;
    }
}

isItSummer("january")
isItSummer("august")


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFive(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    } 
}
skipFive(10)