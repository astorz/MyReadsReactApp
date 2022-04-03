import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList.js'
import { Routes, Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import { element } from 'prop-types'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(prevState => ({
          books: [ ...prevState.books, ...books]
        }));
      })
    
    // BooksAPI.search("Rowling").then((data) => {
    //   console.log(data);
    // });
  }

  navigateToSearch = () => {
    this.setState({ showSearchPage: true });
  }

  updateShelf = (id, shelf) => {
    this.setState((prevState) => {
      let bookUpdate = prevState.books.filter(b => b.id === id)[0];
      bookUpdate.shelf = shelf;
      return {
        books: [...prevState.books.filter(b => b.id !== id), bookUpdate]
      }
    })
  }

  render() {   
    return (
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <BooksList 
                booksOnShelves={this.state.books} 
                updateShelf={this.updateShelf}
                handleClick={this.navigateToSearch}/>
            }
          />
          
          <Route
            path="/search"
            element={<SearchBooks />}/>
        </Routes>
      </div>
    )
  }
}

export default BooksApp;
