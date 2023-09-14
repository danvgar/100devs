//Create a mouse object that has four properties and three methods

// let mouse = {
//     manufacturer: "Apple",
//     scrollType: "Track Pad",
//     color: "White",
//     bluetooth: true,

//     leftClick() {
//         return "Mouse is left-clicked."
//     },

//     rightClick() {
//         return "Mouse is right-clicked."
//     },

//     scroll() {
//         return "Mouse is scrolling."
//     }
// }

// function MouseShop(manufacturer, scrollType, color, bluetooth){
//     this.manufacturer = manufacturer
//     this.scrollType = scrollType
//     this.color = color
//     this.bluetooth = bluetooth
//     this.leftClick = function() {
//         alert("Mouse is left-clicked.")
//     }
//     this.rightClick = function(){
//         return "Mouse is right-clicked."
//     }
//     this.scroll = function(){
//         return "Mouse is scrolling."
//     }
// }

function MouseShop(manufacturer, scrollType, color, bluetooth){
    this.manufacturer = manufacturer
    this.scrollType = scrollType
    this.color = color
    this.bluetooth = bluetooth
    this.leftClick = function() {
        alert("Mouse is left-clicked.")
    }
    this.rightClick = function(){
        return "Mouse is right-clicked."
    }
    this.scroll = function(){
        return "Mouse is scrolling."
    }
}

let mouse1 = new MouseShop("Apple", "Track Pad", "White", true)

console.log(mouse1)

// function MakeCar(carMake,carModel,carColor,numOfDoors){
//     this.make = carMake
//     this.model = carModel
//     this.color = carColor
//     this.doors = numOfDoors
//     this.honk = function(){
//       alert('BEEP BEEP FUCKER')
//     }
//     this.lock = function(){
//       alert(`Locked ${this.doors} doors!`)
//     }
//   }
  
//   let hondaCivic = new MakeCar('Honda','Civic','Silver', 4)
  
//   let teslaRoadster = new MakeCar('Tesla','Roadster', 'Red', 2)