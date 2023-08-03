// Eloquent Java Script
// Chapter 4: Data Structures: Objects and Arrays
// https://eloquentjavascript.net/04_data.html

// Exercises
// ********************
// The sum of a range
// ********************

// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start,end) {
    let range = [start]
    for(let i = 1; i < end; i++) {
        range.push(start += 1)
    }
    return range
}
range(1,10)

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function sumRange(start,end) {
    let range = [start]
    for(let i = 1; i < end; i++) {
        range.push(start += 1)
    }
    return range.reduce((acc,c) => acc + c, 0)
}
sumRange(1,10)

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function stepSumRange(start,end,step) {
    let range = [start]
    step = step || 1
    // console.log(range)
    if(step > 0) {
        for(let i = 1; range[i-1] < end; i++) {
            range.push(start += step)
        }
        range.pop()
    }
    if(step < 0) {
        for(let i = 1; range[i-1] > end; i++) {
            range.push(start += step)
        }
        range.pop()
    }
    console.log(range)
    return range.reduce((acc,c) => acc + c, 0)
}
stepSumRange(1,10,2)
stepSumRange(10,1,-2)


// // Your code here.

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55