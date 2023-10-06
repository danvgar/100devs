// danvgar code

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


/*
	Inverse by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function ($) {

	var $window = $(window),
		$header = $('#header'),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		default: ['1681px', null],
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		alignment: 'right',
		hideDelay: 350,
		baseZIndex: 100000
	});

	// Menu.
	$('<a href="#navPanel" class="navPanelToggle"><span>Menu</span></a>')
		.appendTo($header);

	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'<a href="#navPanel" class="close"></a>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			target: $body,
			visibleClass: 'is-navPanel-visible',
			side: 'right'
		});

})(jQuery);