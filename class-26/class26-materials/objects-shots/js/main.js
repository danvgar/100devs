//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let cocktail = ""
document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {
    cocktail = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail.replaceAll(" ","+")}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(cocktail)
            document.querySelector(`h2`).innerText = data.drinks[0].strDrink
            document.querySelector(`img`).src = data.drinks[0].strDrinkThumb
            document.querySelector(`h3`).innerText = data.drinks[0].strInstructions
            // for (let i = 0; i < data.drinks.length; i++) {
            //     if (Object.values(data.drinks[i]).includes(cocktail)) {

            //         console.log(`data.drinks[${i}].strDrink: ${data.drinks[i].strDrink}`)
            //         console.log(`data.drinks[${i}].strDrinkThumb: ${data.drinks[i].strDrinkThumb}`)
            //         console.log(`data.drinks[${i}].strInstructions: ${data.drinks[i].strInstructions}`)

            //     }
            // }
        })
        .catch(err => console.log(`Error: ${err}`))
}