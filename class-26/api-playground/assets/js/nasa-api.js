function getNASA() {
	fetch(`https://api.nasa.gov/planetary/apod?api_key=qGPeJOjRHwvpioGPrWZZqYFH8eMqVke4fdTuFqCJ`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			document.querySelector("#cocktailimage").src = data.url
		})
		.catch(err => console.log(`Error: ${err}`))
}

getNASA()