// *Variables*
// Declare a variable, assign it a value, and alert the value
let val1 = 10
alert(val1)

// Create a variable, divide it by 10, and console log the value
let val2 = 20
console.log(val2/10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function prod3(n1,n2,n3) {
    alert(n1 * n2 * n3)
}

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function sumDiff(n1,n2,n3,n4) {
    console.log(n1 + n2 - n3 - n4)
}

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winnawinna(n1,n2,n3) {
    let finalNum = (100 + n1 - n2) / n3
    if(finalNum > 25) {
        console.log("WE HAVE A WINNNA")
    }
}

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function weekCheck(day) {
    let day = day.toLowerCase
    
    if(day === "saturday" || day === "sunday") {
        alert("weekend")
    } else if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
        alert("weekday")
    } else {
        alert("Try again!")
    }
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num) {
    let i = 1
    do{
        console.log(i)
        i = i + 3
    } while (i <= num)
}

countByThree(10)