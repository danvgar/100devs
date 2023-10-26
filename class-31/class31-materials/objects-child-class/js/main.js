//Create an a class and extend it - Can be anything you would like it to be! 

class Pokemon {
    constructor(species, type1, cry) {
        this.species = species
        this.type1 = type1
    }
    speak() {
        console.log(`${cry}`)
    }
}

class Swampert extends Pokemon {
    constructor(species, nickname, type1, type2) {
        super(species)
        this.nickname = nickname
        super(type1)
        this.type2 = type2
    }
}