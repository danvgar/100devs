//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.toppings = ["pepperoni", "sausage", "ham"]
pizza.crust = "thin"
pizza.vegan = false
pizza.slices = 8

pizza.burnTongue = function () {
    console.log("Ouch")
}
pizza.frisbee = function () {
    console.log("Pizza has been tossed on garage roof")
}
pizza.toGo = function() {
    console.log("User has taken pizza to go.")
}