//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    document.querySelector(`#class`).innerHTML = ""
    document.querySelector(`#subclass`).innerHTML = ""

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            data.classes.forEach((obj, index) => {
                console.log(obj)
                // create an li
                const li = document.createElement('li')
                // add text to li
                li.textContent = obj.name
                // append the li to the ul
                document.querySelector('ul#class').appendChild(li)
            })


            data.subclasses.forEach((obj, index) => {
                console.log(obj)
                const li = document.createElement('li')
                li.textContent = obj.name
                document.querySelector('ul#subclass').appendChild(li)
 
            })


        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

