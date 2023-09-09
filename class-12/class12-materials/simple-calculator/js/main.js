let total = 0

document.querySelector('#negOne').addEventListener('click', minusOne)
document.querySelector('#one').addEventListener('click', addOne)
document.querySelector('#negTwo').addEventListener('click', minusTwo)
document.querySelector('#two').addEventListener('click', addTwo)
document.querySelector('#negThree').addEventListener('click', minusThree)
document.querySelector('#three').addEventListener('click', addThree)

document.querySelector('#reset').addEventListener('click', makeZero)

function minusOne() {
  total += -1
  document.querySelector('#placeToPutResult').innerText = total
}

function addOne() {
  total += 1
  document.querySelector('#placeToPutResult').innerText = total
}

function minusTwo() {
  total += -2
  document.querySelector('#placeToPutResult').innerText = total
}

function addTwo() {
  total += 2
  document.querySelector('#placeToPutResult').innerText = total
}
function minusThree() {
  total += -3
  document.querySelector('#placeToPutResult').innerText = total
}

function addThree() {
  total += 3
  document.querySelector('#placeToPutResult').innerText = total
}

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

