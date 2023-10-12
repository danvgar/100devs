let id
document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon() {
	id = document.querySelector('input').value
	console.log(`ID: ${id}`)
	if (id < 0 || id > 1017) {
		document.querySelector(`#cocktailname`).innerText = `Please enter a number from 0 to 1017!`
	} else {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				console.log(data.name)
				console.log(data.sprites.front_default)
				document.querySelector(`#cocktailimage`).src = data.sprites.front_default
				document.querySelector(`#cocktailname`).innerText = `It's ${data.name.charAt(0).toUpperCase() + data.name.substr(1).toLowerCase()}!`

			})
			.catch(err => console.log(`Error: ${err}`))
	}
}