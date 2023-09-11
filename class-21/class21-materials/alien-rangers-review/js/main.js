//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let shows = ["Mighty Morphin'", "Zeo Rangers", "Turbo Rangers"]

let i = 0

while (i < shows.length) {
    console.log(shows[i])
    i++
}

//Create and array of numbers
let numArr = [1, 2, 3, 4, 5, 6, 7]
//Return a new array of numbers that includes every even number from the previous Arrays
let evenArr = numArr.filter((element) => element % 2 === 0)


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const secondMinMax = (arr) => {
    if (arr.length < 3) {
        alert(`Array has less than three numbers. Returning the min and max instead. The lowest number is ${Math.min(...arr)} and the highest number is ${Math.max(...arr)}`)
    } else {
        arr.sort((a, b) => a - b)
        alert(`Second lowest number is ${arr[1]}, and second highest number is ${arr[-2]}`)
    }
}

secondMinMax([10, 20])