import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import searchTerms from './SEARCH_TERMS.md';
import Book from "./Book";

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
        // console.log(this.props.booksOnShelves)
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
            }
            // , () => {console.log(this.state.query);}
            )
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
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            type="text" 
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={this.changeQuery}/>
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

export default SearchBooks;