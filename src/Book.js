import React from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = props => {
  const { title, author, thumbnail, shelf, id } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: "100%", backgroundImage: `url(${thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <BookShelfChanger 
            shelf={shelf}
            id={id}
            updateShelf={props.updateShelf}
          />
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  )
}

export default Book;