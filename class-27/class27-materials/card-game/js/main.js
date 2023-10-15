// Clicking button draws two cards
document.querySelector('button').addEventListener('click', drawTwo)

// Global Variables
let deckID = ''
let count = 0
const URLNEWDECK = `https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

// Create a new deck on page load, store deck ID
fetch(URLNEWDECK)
  .then(res => res.json()) // parse response as JSON
  .then(data => {

    // Store Deck ID of the deck we will be using
    deckID = data.deck_id

  })
  .catch(err => {
    console.log(`error ${err}`)
  })
  
  // Draw Two Cards from Deck
  function drawTwo() {
  let urlDrawTwo = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=${count}`
  count = 2

  fetch(urlDrawTwo)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      console.log(data)
      document.querySelector(`#player1`).src = data.cards[0].image
      document.querySelector(`#player2`).src = data.cards[1].image

      let player1Val = convertCardToNum(data.cards[0].value)
      let player2Val = convertCardToNum(data.cards[1].value)


      // Determine Who Won
      if (player1Val > player2Val) {
        document.querySelector('h3').innerText = 'Player 1 Wins'
      } else if (player1Val < player2Val) {
        document.querySelector('h3').innerText = 'Player 2 Wins'
      } else {
        document.querySelector('h3').innerText = 'War!'
      }


    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

// API Stores Card values as strings. Need to convert to integers for comparison purposes
function convertCardToNum(val) {
  if (val === 'ACE') {
    return 14
  } else if (val === 'KING') {
    return 13
  } else if (val === 'QUEEN') {
    return 12
  } else if (val === 'JACK') {
    return 11
  } else {
    return Number(val)
  }
}

