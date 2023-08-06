// Eloquent Java Script
// Chapter 4: Data Structures: Objects and Arrays
// https://eloquentjavascript.net/04_data.html

// Exercises
// ********************
// Reversing an array
// ********************

// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArray(arr) {
    let reversedArr = []
    for(let i = 0; i < arr.length; i++) {
        reversedArr.push(arr[arr.length-i-1])
    }
    console.log(reversedArr)
    return reversedArr
}
reverseArray([1,2,3])

function reverseArrayInPlace(arr) {
    // for 5 element array, index 0 replaces index 4, index 1 replaces index 3, ind
    // if(arr.length % 2 === 1) {
        for (let i = 0; i < arr.length; i++) {
            // console.log(`\nCurrent: ${arr}`)
            
            // Copy first element at appropriate spot at back of array, decreasing index of that spot by i
            arr.splice(arr.length - i, 0, arr[0])
            // console.log(`First Splice: ${arr}`)

            // Remove original first element
            arr.shift()
            // console.log(`Second Splice: ${arr}`)
        }
    // }
    return arr
}
reverseArrayInPlace([1,2,3,4,5])
reverseArrayInPlace([1,2,3,4,5,6])

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// // Your code here.

console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// // → [5, 4, 3, 2, 1]