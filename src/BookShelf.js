import React from "react";
import Book from "./Book";

const BookShelf = props => {
  const currentShelf = props.booksOnShelves.filter(b => b.shelf === props.shelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentShelf.map(b => (
            <li key={b.id}>
              <Book 
                title={b.title}
                authors={b.authors}
                thumbnail={b.imageLinks.thumbnail}
                shelf={b.shelf}
                book = {b}
                updateShelf={props.updateShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;