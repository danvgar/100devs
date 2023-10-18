//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverseArray(arr) {
    arr = arr.reverse()
    console.log(arr)
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function squaresVScubes(a, b) {
    let sumA = a.reduce((acc, c) => acc + c ** 2, 0)
    let sumB = a.reduce((acc, c) => acc + c ** 3, 0)

    return sumA > sumB
}


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function indexMultiples(arr) {
    return arr.filter((element, index) => element % index === 0)
}


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function stringSum(arr) {
    return arr.reduce((acc, c) => acc + +c, 0)
}