// Receive Iitle given an ISBN
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').textContent = localStorage.getItem('books')



function getFetch() {
  const ISBN = document.querySelector('input').value
  // 9780980200447
  let url = `https://openlibrary.org/isbn/${ISBN}.json`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // given ISBN, console log title 
      console.log(data)

      let bookTitle = data.title
      console.log(bookTitle)

      if (!localStorage.getItem('books')) {
        localStorage.setItem('books', bookTitle)
      } else {
        let books = localStorage.getItem('books') + "; " + bookTitle
        localStorage.setItem('books', books)
      }

      document.querySelector('h2').textContent = localStorage.getItem('books')
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

