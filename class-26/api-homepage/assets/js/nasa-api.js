document.querySelector('button').addEventListener('click', getDrink)
document.querySelector("#previousCocktail").addEventListener('click', previousCocktail)
document.querySelector("#nextCocktail").addEventListener('click', nextCocktail)

let cocktail = ""
let i = 0

function getDrink() {
	// Clears out the display before pushing a new drink
	// document.querySelector(".list").innerHTML = ""
	
	cocktail = document.querySelector('input').value
	
	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail.replaceAll(" ", "+")}`)
	.then(res => res.json())
	.then(data => {
		console.log(data.drinks)
		console.log(data.drinks.length)
		if(i < 0) {
			i = data.drinks.length - 1
		}
		if(i > data.drinks.length) {
			i = 0
		}
		console.log(`Current Index: ${i}`)
		console.log(`Current Drink: ${data.drinks[i].strDrink}`)
		document.querySelector("#cocktailimage").src = `${data.drinks[i].strDrinkThumb}`
		document.querySelector("#cocktailname").innerText = `${data.drinks[i].strDrink}`
		document.querySelector("#cocktailinstructions").innerText = `${data.drinks[i].strInstructions}`
	})
	.catch(err => console.log(`Error: ${err}`))
}

function previousCocktail() {
	i--

	getDrink()
}

function nextCocktail() {
	i++

	getDrink()
}