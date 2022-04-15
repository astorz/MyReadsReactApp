import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import searchTerms from './SEARCH_TERMS.md';
import Book from "./Book";
import { Hint } from 'react-autocomplete-hint';
import PropTypes from 'prop-types';

class SearchBooks extends React.Component {
  
  state = {
    query: "",
    results: [],
    validSearchTerms: []
  }

  componentDidMount() {
    fetch(searchTerms)
      .then((res) => res.text())
      .then((text) => {
        let searchTermsList = text.split(/', '|^'|'\n$/);
        searchTermsList.pop();
        searchTermsList.shift();
        this.setState(prevState => (
          { validSearchTerms: [ ...prevState.validSearchTerms, ...searchTermsList]}
        ));
      })
  }
  
  cleanQuery = query => {
    const regex = /\s+/;
    let cleaned = query.trim().toLowerCase().split(regex);
    return cleaned.join(" ");
  }

  // https://stackoverflow.com/questions/34687091/can-i-execute-a-function-after-setstate-is-finished-updating
  changeQuery = event => {
    if(event.target.value === ""){
      this.setState({
        results: []
      })
    };
    this.setState({
      query: event.target.value
    }, 
    () => {
      if(this.state.validSearchTerms.map(t => t.toLowerCase()).includes(this.cleanQuery(this.state.query))) {
        BooksAPI.search(this.cleanQuery(this.state.query))
          .then((data) => {
            return data.filter(d => d.authors !== undefined && d.imageLinks !== undefined)
          })
          .then(data => {
            const onShelfIds = this.props.booksOnShelves.map(b => b.id);
            data.map(d => 
              onShelfIds.includes(d.id) ? 
              d["shelf"] = this.props.booksOnShelves.filter(b => b.id === d.id)[0].shelf
                : 
              d["shelf"] = "none");
              return data;
          })
          .then((books) => (
            this.setState({
              results: books
            })
          ));
      }
    }
    );
  }

  clearQuery = () => {
    this.setState({
      query: "",
      results: []
    })
  }

  render() {
    
    return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/">Close
        </Link> 
        <div className="search-books-input-wrapper">
            <Hint options={this.state.validSearchTerms} allowTabFill>
              <input
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={this.changeQuery}
              />
            </Hint>
          <button
            onClick={this.clearQuery}>Clear</button>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.results.map(b => (
          <li key={b.id}>
            <Book 
              title={b.title}
              authors={b.authors}
              thumbnail={b.imageLinks.thumbnail}
              shelf={b.shelf}
              book={b}
              updateShelf={this.props.updateShelf}
            />
          </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }  
}

SearchBooks.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  booksOnShelves: PropTypes.array.isRequired
}

export default SearchBooks;