// The JS Way
// Chapter 06: Create your first objects
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

// ********************
// Coding time!
// ********************

// ********************
// Adding character experience
// ********************
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// // TODO: create the character object here
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength. ${this.name} has ${this.xp} experience.`;
  }
};

aurora.xp = 0

// // Aurora is harmed by an arrow
aurora.health -= 20;

// // Aurora equips a strength necklace
aurora.strength += 10;

// // Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());


// ********************
// Modeling a dog
// ********************
// Complete the following program to add the dog object definition.

// // TODO: create the dog object here

const dog = {
  name: "Dog",
  species: "normal",
  size: "a typical dog size",

  bark() {
    return "YAP YAP YAP!"
  }

}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


// ********************
// Modeling a circle
// ********************
// Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));
const PI = Math.PI

// // TODO: create the circle object here
const circle = {
  circumference() {
    return 2 * PI * r
  },

  area() {
    return PI * r ** 2
  }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);


// ********************
// Modeling a bank account
// ********************
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.
const bankAccount = {
  name: "Alex",
  balance: 0,

  credit(val) {
    bankAccount.balance += val
  },

  describe() {
    return `${bankAccount.name} has a current balance of ${bankAccount.balance}`
  }
}

console.log(bankAccount.describe())
console.log(bankAccount.credit(250))
console.log(bankAccount.credit(-80))
console.log(bankAccount.describe())