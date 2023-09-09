//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector("#help").addEventListener('click',check)

function check() {
    let numberOfSnacks = Number(document.querySelector("input").value)
    document.querySelector("#stops").value = ""

    for(let i = 0; i < numberOfSnacks; i++) {   
        document.querySelector("#stops").innerText += " STOP!"
    } 
}

