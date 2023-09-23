//Create a constructor with 4 properties and 3 methods

// let pizza = {}

// pizza.toppings = ["pepperoni", "sausage", "ham"]
// pizza.crust = "thin"
// pizza.vegan = false
// pizza.slices = 8

// pizza.burnTongue = function () {
//     console.log("Ouch")
// }
// pizza.frisbee = function () {
//     console.log("Pizza has been tossed on garage roof")
// }
// pizza.toGo = function() {
//     console.log("User has taken pizza to go.")
// }


let Dominoes = function (toppings, crust, vegan, slices) {
    this.toppings = toppings
    this.crust = crust
    this.vegan = vegan
    this.slices = slices

    this.burnTongue = function () {
        console.log("Ouch")
    }
    this.frisbee = function () {
        console.log("Pizza has been tossed on garage roof")
    }
    this.toGo = function () {
        console.log("User has taken pizza to go.")
    }
}

let pizza = new Dominoes(["pepperoni", "sausage", "ham"], "thin", false, 8)