// Javascript.info
// JavaScript Fundamentals: 4.5 Constructor, operator "new"
// https://javascript.info/constructor-new

// ********************
// Tasks
// ********************

// ********************
// Two functions – one object
// ********************

// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// If it is, then provide an example of their code.

// Ans: a and b are storing addresses to a constructor function A() and a constructor function B() respectively. Because they are referencing separate objects, they will not equal each other. This is only possible if they are both referencing the same object outside of their constructor scope. For example, creating let obj = {} outside of the constructors and then have each constructor return the same object. 


// ********************
// Create new Calculator
// ********************

// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
    this.read = function () {
        this.a = +prompt("Provide a first value.", 0)
        this.b = +prompt("Provide a second value.", 0)
    }

    this.sum = function () {
        return this.a + this.b
    }

    this.mul = function () {
        return this.a * this.b
    }
}

// For instance:

let calculator = new Calculator();

calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


// ********************
// Create new Accumulator
// ********************

// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

function Accumulator(initialVal) {
    this.value = initialVal
    
    this.read = function () {
        this.value += +prompt("Provide a value to add.", 0)
    }
}

// Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values