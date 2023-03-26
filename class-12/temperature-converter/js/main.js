//Write your pseduo code first!

// *****
// Celsius Converter
// *****

// Upon click of `Convert to °C` Button, Start Function
document.querySelector('#convertToC').addEventListener('click', cConverter)

// °F to °C Converter Function
function cConverter() {
  
  // Store input value
  let const fahrenheit = document.querySelector('#inputF').value
  
  // Calculations
  let celsius = (fahrenheit - 32) * (5/9)
  
  //Display converted value
  document.querySelector('#convertedToC').innerText = celsius
}


// *****
// Fahrenheit Converter
// *****

// Upon click of 'Convert to °F' Button, Start Function
document.querySelector('#convertToF').addEventListener('click', fConverter)

// °C to °F Converter Function
function fConverter() {
  
  // Store input value
  let const celsius = document.querySelector('#inputC').value
  
  // Calculations
  let fahrenheit = celsius * (9/5) + 32
  
  //display the value
  document.querySelector('#convertedToF').innerText = fahrenheit
}
