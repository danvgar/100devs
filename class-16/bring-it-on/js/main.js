// *Variables*
// Create a variable and console log the value
let val1 = 10
console.log(val1)

// Create a variable, add 10 to it, and alert the value
let val2 = 20
val2 += 10
alert(val2)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(n1,n2,n3,n4) {
    alert(n1 - n2 - n3 - n4)
}

// Create a function that divides one number by another and returns the remainder
function divRemain(n1,n2) {
    return n1 % n2
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1,n2) {
    if((n1 + n2) > 50) {
        alert("JUMANJI")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1,n2,n3) {
    if(n1*n2*n3 % 3 === 0) {
        alert("ZERBA")
    }
}

zebra(10,5,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function repeatWord(str, num) {
    for(let i = 0; i < num; i++) {
        console.log(str)
    }
}

repeatWord("STOP!", 3)