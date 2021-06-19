import React, { Component } from 'react'
import Shelf  from "../components/Shelf";
import LinkToSearch from '../components/LinkToSearch'

class Home extends Component{
    render() {
      const { shelves, myReads, onShelfChange} = this.props;
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves && shelves.map((shelf) => (
                  <Shelf 
                    key={shelf.slug}
                    slug={shelf.slug}
                    title={shelf.title}
                    books={myReads && myReads[shelf.slug]}
                    onShelfChange={onShelfChange}
                  />                  
                ))}
             </div>
            </div>
           <LinkToSearch />
          </div>
        )
    }
}


export default Home;