//Create a dog object that has four properties and three methods
let dog = {}

dog.breed = "Mixed"
dog.size = "Medium"
dog.color = "Brown"
dog.favoriteFood = "chicken"

dog.bark = function() {
    alert("YAP YAP")
}

dog.eat = function() {
    alert("numnumnum")
}

dog.fetch = function() {
    console.log("Error: fetch command not found.")
}


