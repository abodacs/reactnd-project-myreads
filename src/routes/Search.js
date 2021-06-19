import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from "react-router-dom";
import { Debounce } from 'react-throttle';
import SearchResults from '../components/SearchResults'


class Search extends Component{
  state = {
    query: '',
    resultsBooks : []
  };
   //This method retrieve searched books
  submit = async (query, myReads) => {
    console.log('query change!', query)
    query = query.trim();
    this.setState({ resultsBooks: [] , query })
    if (query !== '') {
			try {
				const searchBooks = await BooksAPI.search(query, 10);
				this.setState({
					resultsBooks: searchBooks.length > 0 ?  this.buildBookForSearch(searchBooks, myReads.all): [],
					query
				});
			} catch (e) {
				console.log(e);
				this.setState({query});
			}
		}
  };

  buildBookForSearch = (searchBooks, allMyReads ) => {
    const books = searchBooks.map(book => {
      const index = allMyReads.findIndex(b => book.id === b.id);
      return {
        ...book,
        shelf: index > -1 ? allMyReads[index].shelf : "none"
      }
    });
    return books;
  }
 
 
  
  render() {
      return (
          <div className="search-books">
          <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input autoFocus type="search" placeholder="Search by title or author"
                onChange={(event) => this.submit(event.target.value, this.props.myReads)} />
            </Debounce>
            </div>
          </div>
            <SearchResults books={this.state.resultsBooks}  query={this.state.query} onShelfChange={this.props.onShelfChange}/>
        </div>
      )
  }
}

export default Search;