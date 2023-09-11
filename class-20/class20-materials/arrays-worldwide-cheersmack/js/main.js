//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function sequence(num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr
}

console.log(sequence(10))