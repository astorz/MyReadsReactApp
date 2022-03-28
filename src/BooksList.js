import React from "react"
import BookShelf from "./BookShelf";

const BooksList = props => {
  return (
  <div className="list-books">

    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>

    <div className="list-books-content">

      <BookShelf 
        booksOnShelves={props.booksOnShelves}
        shelfName="Currently Reading"
        shelf="currentlyReading"
      />

      <BookShelf 
        booksOnShelves={props.booksOnShelves}
        shelfName="Want to Read"
        shelf="wantToRead"
      />

      <BookShelf 
        booksOnShelves={props.booksOnShelves}
        shelfName="Read"
        shelf="read"
      />

    </div>

    <div className="open-search">
      <button onClick={props.handleClick}>Add a book</button>
    </div>

  </div>
  )
}



export default BooksList;