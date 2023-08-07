// The JS Way
// Chapter 03: Add conditions
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter03.md

// ********************
// Coding time!
// ********************
// Here are a few pieces of advice about these exercises:

// Keep on choosing your variable names wisely, and respect indentation when creating code blocks associated to if, else and switch statements.

// Try to find alternative solutions. For example, one using an if and another using a switch.

// Test your programs thoroughly, without fear of finding mistakes. It's a very important skill.

// ********************
// Following day
// ********************
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
const DAYOFWEEK = prompt("What day of the week is it?").toLowerCase()
if (DAYOFWEEK === "monday") {
    alert("Tomorrow is Tuesday.")
} else if (DAYOFWEEK === "tuesday") {
    alert("Tomorrow is Wednesday.")
} else if (DAYOFWEEK === "wednesday") {
    alert("Tomorrow is Thursday.")
} else if (DAYOFWEEK === "thursday") {
    alert("Tomorrow is Friday.")
} else if (DAYOFWEEK === "friday") {
    alert("Tomorrow is Saturday.")
} else if (DAYOFWEEK === "saturday") {
    alert("Tomorrow is Sunday.")
} else if (DAYOFWEEK === "sunday") {
    alert("Tomorrow is Monday.")
} else {
    alert("Please enter a valid day of the week.")
}

switch (DAYOFWEEK.toLowerCase()) {
    case "monday":
        alert("Tomorrow is Tuesday.")
        break;
    case "tuesday":
        alert("Tomorrow is Wednesday.")
        break;
    case "wednesday":
        alert("Tomorrow is Thursday.")
        break;
    case "thursday":
        alert("Tomorrow is Friday.")
        break;
    case "friday":
        alert("Tomorrow is Saturday.")
        break;
    case "saturday":
        alert("Tomorrow is Sunday.")
        break;
    case "sunday":
        alert("Tomorrow is Monday.")
        break;
    default:
        alert("Please enter a valid day of the week.")
}


// ********************
// Number comparison
// ********************
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

const NUM1 = prompt("Please provide a number")
const NUM2 = prompt("Please provide a number")


// ********************
// Final values
// ********************
// Take a look at the following program.

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
// console.log(nb1, nb2, nb3);
// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.

// Initial values	nb1 final value	nb2 final value	nb3 final value
// nb1=nb2=nb3=4			
// nb1=4,nb2=3,nb3=2			
// nb1=2,nb2=4,nb3=0			
// Check your predictions by executing the program.

// ********************
// Number of days in a month
// ********************
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

// ********************
// Following second
// ********************
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

// 14h17m59s should give 14h18m0s
// 6h59m59s should give 7h0m0s
// 23h59m59s should give 0h0m0s (midnight)