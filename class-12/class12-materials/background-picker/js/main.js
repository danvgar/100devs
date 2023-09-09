document.getElementById('red').onclick = partyRed
document.getElementById('yellow').onclick = partyYellow
document.getElementById('green').onclick = partyGreen
document.querySelector('#reset').onclick = partyOver


function partyRed() {
  document.querySelector('body').style.backgroundColor = 'red'
  document.querySelector('body').style.color = 'white'
  document.querySelector('#reset').style.color = 'black'
}

function partyYellow() {
  document.querySelector('body').style.backgroundColor = 'yellow'
  document.querySelector('body').style.color = 'black'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'green'
  document.querySelector('body').style.color = 'white'
  document.querySelector('#reset').style.color = 'black'
}

function partyOver() {
  document.querySelector('body').style.backgroundColor = 'white'
  document.querySelector('body').style.color = 'black'
  document.querySelector('#reset').style.color = 'red'
}
