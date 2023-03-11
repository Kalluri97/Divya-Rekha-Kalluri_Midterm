const json = {
    "books": [{
      "id":1,
      "title": "The Universe and Dr. Einstein",
      "year": 2005,
      "published": true
    },
    {
      "id":2,
      "title": "Einstein on politics",
      "year": 2013,
      "published": true
    },
    {
      "id":3,
      "title": "Einstein versus the physical review",
      "year": 2005,
      "published": true
    },
    {
      "id":4,
      "title": "Einstein on peace",
      "year": 2017,
      "published": true
    },
    {
      "id":5,
      "title": "Einstein: The life and times",
      "year": 2022,
      "author": "Ronald Clark",
      "published": false
    }]
  };
  
  const bookList = document.getElementById("book-list");
  json.books.forEach(book => {
    const title = document.createElement("h3");
    title.textContent = book.title;
    bookList.appendChild(title);
  });
  