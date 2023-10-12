function getIQAir() {
	fetch(`https://api.airvisual.com/v2/nearest_city?key=baf97181-5b9a-4c67-86e9-3667c42a0405
	`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			document.querySelector(`#airquality`).innerHTML = `The current AQI value based on US EPA standard is <h2>${data.data.current.pollution.aqius}</h2>`

			document.querySelector(`#location`).innerText = `Your Location: ${data.data.city}, ${data.data.state}, ${data.data.country}`

			document.querySelector(`#time`).innerText = `Your Time: ${data.data.current.pollution.ts}`

		})
		.catch(err => console.log(`Error: ${err}`))
}

getIQAir()