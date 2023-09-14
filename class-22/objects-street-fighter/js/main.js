//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
let StreetFighterCharacter = function (name, signatureMove, attackPower, taunt) {
    this.name = name
    this.signatureMove = signatureMove
    this.attackPower = attackPower
    this.taunt = taunt

    this.doSignatureMove = function () {
        alert(`${this.name} did move ${this.signatureMove}`)
    }

    this.moveLeft = function () {
        alert(`${this.name} moved left.`)
    }

    this.moveRight = function () {
        alert(`${this.name} moved right.`)
    }

    this.sayTaunt = function () {
        alert(`${this.name} says ${this.taunt}`)
    }
}

let player1 = new StreetFighterCharacter("Ryu","Shoryuken",100,`"You must love competition before you can achieve victory."`)

player1.sayTaunt()
player1.doSignatureMove()