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
    
    confirm(question) ? return yes() : return no()
}