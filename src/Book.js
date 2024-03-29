import React from "react";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types';

const Book = props => {
  const { title, authors, thumbnail, shelf, book } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: "100%", backgroundImage: `url(${thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <BookShelfChanger 
            shelf={shelf}
            book={book}
            updateShelf={props.updateShelf}
          />
        </div>
      </div>
      <div className="book-title">{title}</div>
      {authors.map(a => <div 
          className="book-authors"
          key={a}
        >{a}</div>)}
    </div>
  )
}

Book.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  thumbnail: PropTypes.string.isRequired,
  shelf: PropTypes.string,
  book: PropTypes.object.isRequired
}

export default Book;