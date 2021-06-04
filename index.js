function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    return renderBooks(json)
  })
  
}

fetch("string representing a URL to a data source")
.then(function(response) {
  return response.json();
})
.then(function(json){
  // Use the data inside of `json` to do DOM manipulation
})

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
