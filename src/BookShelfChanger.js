import React from 'react';
import * as BooksAPI from './BooksAPI';

class BookShelfChanger extends React.Component {
  
  handleChange = event => {
    const targetShelf = event.target.value;
    const bookId = this.props.id;
    this.props.updateShelf(bookId, targetShelf);
    BooksAPI.get(bookId)
      .then(book => BooksAPI.update(book, targetShelf));
  }
    
  render() {

    const options = [
      { value: "currentlyReading", text: "Currently Reading"},
      { value: "wantToRead", text: "Want to Read"},
      { value: "read", text: "Read"},
      { value: "none", text: "None" }
    ];

    return (
      <select value={this.props.shelf} onChange={this.handleChange}>
        
        {options.map(o => 
          <option 
              value={o.value}
              key={o.value}
            >{o.text}</option>)};
      </select>
    )
  }
}

export default BookShelfChanger;