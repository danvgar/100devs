//Create a button that adds 1 to a botScore stored in localStorage 

// Upon clicking button, should increment the value of botScore in local storage by 1
document.querySelector('button').addEventListener('click', addAnothaOne)

// If botScore doesn't exist yet in localStorage, it will return a falsy value
if (localStorage.getItem('botScore')) {
    // Upon page load, set botScore to zero.
    localStorage.setItem('botScore', 0)
}

function addAnothaOne() {
    // Ensure item retrived from local storage is used as a Number.
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal += 1
    
    // Set the value in local storage
    localStorage.setItem('botScore', botScoreVal)
}