import React from "react"
import BookShelf from "./BookShelf";
import { Link } from 'react-router-dom'

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
        updateShelf={props.updateShelf}
      />
      <BookShelf 
        booksOnShelves={props.booksOnShelves}
        shelfName="Want to Read"
        shelf="wantToRead"
        updateShelf={props.updateShelf}
      />
      <BookShelf 
        booksOnShelves={props.booksOnShelves}
        shelfName="Read"
        shelf="read"
        updateShelf={props.updateShelf}
      />
    </div>

    <div className="open-search">
      <Link
        className="open-search-button"
        to="/search">
          <button>Add a book</button>
      </Link>
    </div>
    
  </div>
  )
}

export default BooksList;