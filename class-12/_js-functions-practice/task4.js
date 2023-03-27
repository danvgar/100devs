// Function pow(x,n)

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// Run the demo

// P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(x,n) {
    x = prompt('Enter a number you would like to exponentially increase.')
    n = prompt('Enter the value to exponentially increase it to.')
    while (n < 1) { 
        n = prompt('Please enter a minimum value of 1.')
    }
    return alert(x ** n) 
}