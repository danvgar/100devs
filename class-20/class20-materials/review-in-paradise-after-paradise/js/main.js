// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function closingTime(intArr) {
    if (intArr[0] < intArr[intArr.length - 1]) {
        alert("Hi")
    } else if (intArr[0] > intArr[intArr.length - 1]) {
        alert("Bye")
    } else if (intArr[0] === intArr[intArr.length - 1]) {
        alert("We close in an hour")
    }
}
closingTime([1, 2, 3, 4, 5])
closingTime([5, 4, 3, 2, 1])
closingTime([1, 1, 1, 1, 1])
