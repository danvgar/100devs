//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

let nums = [1, 2, 3, 4, 5]

function evensOnly(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

evensOnly(nums)