//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
alert(arr.reduce((acc, c) => acc + c, 0))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squaredArr = (array) => array.map(element => element ** 2)
console.log(squaredArr(arr))

//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = (string) => string.split("").reverse().join("")

console.log(reverseString("Hello, world!"))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = function (str) {
    console.log(str == reverseString(str))
    return str === reverseString(str) ? alert(`It is a palindrome!`) : alert(`It is not a palindrome!`)
}

palindromeCheck("Hello, world!")
palindromeCheck("racecar")