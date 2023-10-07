function getNASA() {
	// Clears out the display before pushing a new drink
	// document.querySelector(".list").innerHTML = ""
	
	cocktail = document.querySelector('input').value
	
	fetch(`https://api.nasa.gov/planetary/apod`)
	.then(res => res.json())
	.then(data => {
		console.log(data)
	.catch(err => console.log(`Error: ${err}`))
}