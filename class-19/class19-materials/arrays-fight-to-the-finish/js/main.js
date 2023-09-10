//Create an array of movie titles. Loop through the array and each element to the h2.

let movieTitles = ["The Fast & The Furious", "2 Fast 2 Furious", "The Fast & The Furious: Tokyo Drift"]

for(let title in movieTitles) {
    document.querySelector("h2").innerText += `${movieTitles[title]}\n`
}


//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numArr = [7,17,27]
numArr = numArr.map( (num) => num + 3)
document.querySelector("h2").innerText += `\n${numArr}\n`


//Find the average of all the numbers from question three

let avg = numArr.reduce( (acc,c) => acc + c, 0) / numArr.length
document.querySelector('h2').innerText += `\n${avg}\n`