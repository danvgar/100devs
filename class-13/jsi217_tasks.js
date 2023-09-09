// Javascript.info
// JavaScript Fundamentals: 2.17 Arrow functions, the basics
// https://javascript.info/arrow-functions-basics

// ********************
// Tasks
// ********************

// ********************
// Rewrite with arrow functions
// ********************

// Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );

let ask = (question,yes,no) => {
    let question = "Do you agree?"
    let yes = () => alert("You agreed.")
    let no = () => alert("You cancelled the execution.")
    
    return confirm(question) ? yes() : no()
}