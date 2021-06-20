import React from 'react'
import ShelfChanger from './ShelfChanger'

export default function Book({ book , onShelfChange}) {
    const { id, title, shelf, authors, imageLinks } = book
    const backgroundImageThumbnail = imageLinks ? imageLinks.thumbnail : '';
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${backgroundImageThumbnail})` }}></div>
          <ShelfChanger onShelfChange={onShelfChange} shelf={shelf} bookId={id}/> 
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.length && authors.join(', ')}</div>
      </div>   
    )

}