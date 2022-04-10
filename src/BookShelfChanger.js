import React from 'react';
import * as BooksAPI from './BooksAPI';

const BookShelfChanger = props => {
  
  const handleChange = event => {
    const targetShelf = event.target.value;
    const book = props.book;
    props.updateShelf(book, targetShelf);
    BooksAPI.update(book, targetShelf);
  }

  const options = [
    { value: "currentlyReading", text: "Currently Reading"},
    { value: "wantToRead", text: "Want to Read"},
    { value: "read", text: "Read"},
    { value: "none", text: "None" }
  ];

  return (
    <select value={props.shelf} onChange={handleChange}>
      {options.map(o => 
        <option 
            value={o.value}
            key={o.value}
          >{o.text}</option>)};
    </select>
  )
}

export default BookShelfChanger;