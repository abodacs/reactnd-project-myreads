import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Search from './routes/Search'
import Home from './routes/Home'
class BooksApp extends React.Component {
  state = {
    shelves: [
      {
        slug: 'currentlyReading',
        title: 'Currently Reading',
      },
      {
        slug: 'wantToRead',
        title: 'Want to Read',
      },
      {
        slug: 'read',
        title: 'Read',
      }
    ],
    myReads : {
      all:[]
    },
  }
  constructor(props) {
    super(props);
    this.loadShelfsData    = this.getShelfsData.bind(this);
    this.onShelfChange     = this.onShelfChange.bind(this);
  }
  componentDidMount() {
    this.getShelfsData();
  }
 
  getShelfsData() {
    const myReads = { all: []}
    BooksAPI.getAll()
      .then((books) => {
        books.forEach(book => {
          if (myReads[book.shelf]) {
            myReads[book.shelf].push(book)
          } else {
            myReads[book.shelf] = [book]
          }
          myReads.all.push(book)
        })
        this.setState({myReads});
      })
      .catch(function(error) {
        console.log(error);
      });
  }
 
  //This method is used to change shelves
 onShelfChange = async (newShelf, bookId) => {
  try {
    await BooksAPI.update({id: bookId}, newShelf);
    this.getShelfsData();
  }
  catch (e) {
    console.log(e);
  }
};

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Home  shelves={this.state.shelves} myReads={this.state.myReads} onShelfChange={this.onShelfChange}/>} /> 
          <Route exact path="/search" render={() => <Search onShelfChange={this.onShelfChange}  myReads={this.state.myReads}  />} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
