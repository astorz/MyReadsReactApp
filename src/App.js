import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList.js'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(prevState => ({
          books: [...prevState.books, ...books]
        }));
      })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState((prevState) => {
        let bookToUpdate = book;
        bookToUpdate["shelf"] = shelf;
        return {
          books: [...prevState.books.filter(b => b.id !== book.id), bookToUpdate]
        }
      })
    })
  }

  render() {
    return (
      <div className="app">
        {/* Key resources regarding regarding upgrade to react-router-dom v6: 
        https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element
        https://stackoverflow.com/questions/70074701/using-react-router-to-switch-between-pages-but-my-props-arent-displaying-is-th */}
        
        <Routes>

          <Route
            path="/"
            element={
              <BooksList 
                booksOnShelves={this.state.books} 
                updateShelf={this.updateShelf}/>
            }
          />
          
          <Route
            path="/search"
            element={<SearchBooks 
              booksOnShelves={this.state.books}
              updateShelf={this.updateShelf}/>
            }/>
        </Routes>
      </div>
    )
  }
}

export default BooksApp;