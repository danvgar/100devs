//Create a stopwatch object that has four properties and three methods
const stopwatch = {
    currentTime: 0,
    seconds: 0,
    minutes: 0,
    color: "black",

    stop() {
        alert(`Time has been stopped.`)
    },

    reset() {
        stopwatch.currentTime = 0
    },

    beep() {
        alert(`BEEP!!`)
    }
}