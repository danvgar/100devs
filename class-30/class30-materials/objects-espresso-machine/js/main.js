//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(model, color, waterVolume, temp) {
        this.model = model
        this.color = color
        this.waterVolume = waterVolume
        this.temp = temp
    }
    brew() {
        console.log("Espresso has been brewed.")
    }
    heatWater() {
        console.log("Water has been heated.")
    }
    getTemp() {
        console.log(`Current temp is ${temp}`)
    }
}

let gaggiaClassic = new EspressoMachine("Classic Pro", "white", 2, 50)