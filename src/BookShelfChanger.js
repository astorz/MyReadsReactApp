import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = props => {
  
  const handleChange = event => {
    const targetShelf = event.target.value;
    const book = props.book;
    props.updateShelf(book, targetShelf);
  }

  const options = [
    { value: "currentlyReading", text: "Currently Reading" },
    { value: "wantToRead", text: "Want to Read" },
    { value: "read", text: "Read" },
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

BookShelfChanger.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string,
  book: PropTypes.object.isRequired
}

export default BookShelfChanger;