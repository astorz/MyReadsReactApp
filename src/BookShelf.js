import React from "react";
import Book from "./Book";

const BookShelf = props => {
  const currentShelf = props.booksOnShelves.filter(b => b.shelf === props.shelf);
  // console.log(currentShelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentShelf.map(b => (
          <li key={b.id}>
            <Book 
              title={b.title}
              author={b.authors[0]}
              thumbnail={b.imageLinks.thumbnail}
              id={b.id}
            />
          </li>))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;