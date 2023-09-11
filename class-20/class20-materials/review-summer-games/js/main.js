//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let numArr = [1, 2, 3, 4, 5]

function arrProd(arr) {
    let prod = arr.reduce((acc, c) => acc * c, 1)
    alert(prod)
}

arrProd(numArr)