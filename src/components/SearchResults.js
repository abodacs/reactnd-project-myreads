import React, { Component } from 'react'
import  Book from './Book'

class SearchResults extends Component {
 
    render() {
        const { books, query, onShelfChange } = this.props;
        return (
            <div className="search-books-results">
                { books && books.length > 0 
                 ?
                <ul className="books-grid">
                    {books.map((book) => (
                      <li key={book.id}>
                      <Book book={book} onShelfChange={onShelfChange}/>
                        </li>
                    ))}
                
                </ul>
                    : <h3 className="book-not-found">{query !== '' ? 'Book not found' : ''}</h3>
                }
            </div>
        )
    }
}


export default SearchResults