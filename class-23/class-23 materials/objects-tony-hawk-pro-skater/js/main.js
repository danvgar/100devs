//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

// let MakeSkater = function(name, stance, board, height) {
//     this.name = name
//     this.stance = stance
//     this.board = board
//     this.height = height

//     this.kickflip = function() {
//         alert(`${name} did a kickflip!`)
//     }

//     this.bail = function() {
//         alert(`${name} bailed successfully.`)
//     }

//     this.ollie = function() {
//         alert(`${name} did an ollie!`)
//     }
// }

class MakeSkater {
    constructor(name, stance, board, height) {
        this.name = name
        this.stance = stance
        this.board = board
        this.height = height

        this.kickflip = function () {
            alert(`${name} did a kickflip!`)
        }

        this.bail = function () {
            alert(`${name} bailed successfully.`)
        }

        this.ollie = function () {
            alert(`${name} did an ollie!`)
        }
    }
}

let skater = new MakeSkater("Daniel", "frontside", "Cool Board", "6'-0\"")

console.log(skater.height)
console.log(skater.bail())
