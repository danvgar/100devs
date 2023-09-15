//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let nums = [10, 20, 30, 40, 50]
let sum = nums.reduce((acc, c) => acc + c, 0)
alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let squaredArray = (arr) => arr.map(element => element ** 2)
console.log(squaredArray(nums))

//Create a function that takes string
//Print the reverse of that string to the console

let reverseString = (str) => {
    let revStr = str.split("").reverse().join("")
    console.log(revStr)
    return revStr
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

let palindromeTest = (str) => str === reverseString(str)
console.log(palindromeTest("racecar"))
