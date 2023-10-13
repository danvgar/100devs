let today = new Date()
let yyyy = today.getFullYear()
let mm = today.getMonth() + 1
let dd = today.getDate()

if (dd < 10) {
	dd = '0' + dd;
}
if (mm < 10) {
	mm = '0' + mm;
}

let date = `${yyyy}-${mm}-${dd}`
console.log(`Date: ${date}`)

let url = `https://api.nasa.gov/planetary/apod?api_key=qGPeJOjRHwvpioGPrWZZqYFH8eMqVke4fdTuFqCJ&date=${date}`
console.log(`URL: ${url}`)

document.querySelector('button').addEventListener('click', getNASA)

function getNASA() {
	date = document.querySelector('input').value
	console.log(`Fetch Date: ${date}`)
	console.log(`Fetch URL: ${url}`)
	url = `https://api.nasa.gov/planetary/apod?api_key=qGPeJOjRHwvpioGPrWZZqYFH8eMqVke4fdTuFqCJ&date=${date}`
	fetch(url)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if (data.media_type === 'image') {
				document.querySelector("div.image.fit.special").innerHTML = `<img id="cocktailimage" src="${data.url}">`
			} else if (data.media_type === 'video') {
				document.querySelector("div.image.fit.special").innerHTML = `<iframe id="cocktailimage" src="${data.url}"></iframe>`
			}
			document.querySelector(`#cocktailinstructions`).innerText = data.explanation
		})
		.catch(err => console.log(`Error: ${err}`))
}

getNASA()