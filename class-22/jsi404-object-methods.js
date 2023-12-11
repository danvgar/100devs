// Javascript.info
// JavaScript Fundamentals: 4.5 Object methods, "this"
// https://javascript.info/object-methods

// ********************
// Tasks
// ********************

// ********************
// Using "this" in object literal
// ********************

// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // What's the result?

// Ans: In this case the this keyword is accessing the function itself, which is a first-class object, so it will return an error because this is undefined as far as the dot notation is concerned. 


// ********************
// Create a calculator
// ********************

// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    read() {
        this.a = +prompt("Provide your first value(must be an integer)", 0)
        this.b = +prompt("Provide your second value(must be an integer)", 0)
    },

    sum() {
        return this.a + this.b
    },

    mul() {
        return this.a * this.b
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// ********************
// Chaining
// ********************

// There’s a ladder object that allows to go up and down:

let ladder = {
    step: 0,

     up() {
        this.step++;
        return this
    },

    down() {
        this.step--;
        return this
    },

    showStep: function () { // shows the current step
        alert(this.step);
    }
};
// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such approach is widely used across JavaScript libraries.
