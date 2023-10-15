// Receive Iitle given an ISBN
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice)
  
  let ISBN = ""
  // 9780980200447
  
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${ISBN}&jscmd=details&format=json`

      document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

