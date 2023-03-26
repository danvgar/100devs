// HTML References
// input id = #day
// button id = #check 

// Main functionality
document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  
  if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerText = "It's class time, baby!"
  } 
  else if (day === 'saturday' || day === 'sunday') {
    document.querySelector('#placeToSee').innerText = "It's the weekend, baby!"
  } 
  else if (day === 'monday' || day === 'wednesday' || day === 'friday') {
    document.querySelector('#placeToSee').innerText = "It's just a regular day. :("
    document.querySelector('#placeToSee').style.color = 'black'
    document.querySelector('#placeToSee').style.fontSize = '28px'
  } 
  else {
    document.querySelector('#placeToSee').innerText = "Try entering a day, my friend :("
    document.querySelector('#placeToSee').style.color = 'black'
    document.querySelector('#placeToSee').style.fontSize = '14px'
  }
  
}

// Trigger main functionality when enter key is pressed

// Currently not working
// document.querySelector('#day').addEventListener('keyup',pressEnter)

// function pressEnter() {
//   if (pressEnter.keyCode === 13) {
//     document.querySelector('#check').click()
//   }
// }