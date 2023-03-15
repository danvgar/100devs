document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerText = "It's class time, baby!"
  } else if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerText = "It's the weekend, baby!"
  } else {
    document.querySelector('#placeToSee').innerText = "It's just a regular day. :("
    document.querySelector('#placeToSee').style.color = 'black'
    document.querySelector('#placeToSee').style.fontSize = '28px'
  }
}
